"use client";

import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from "react";
import { deriveKey, base64Decode, computeVerifier, VaultItemPayload } from "@/lib/vaultCrypto";

interface VaultProfile {
  kdfSalt: string;
  kdfIterations: number;
  kdfVersion: number;
}

interface VaultContextType {
  isUnlocked: boolean;
  isInitialized: boolean | null;
  unlock: (masterPassword: string) => Promise<boolean>;
  lock: () => void;
  checkInitialized: () => Promise<void>;
  initializeVault: (masterPassword: string) => Promise<boolean>;
  getDecryptedItem: (item: { encryptedBlob: string; iv: string }) => Promise<VaultItemPayload | null>;
  encryptItem: (payload: VaultItemPayload) => Promise<{ encryptedBlob: string; iv: string } | null>;
}

const VaultContext = createContext<VaultContextType | null>(null);

export function VaultProvider({ children }: { children: ReactNode }) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isInitialized, setIsInitialized] = useState<boolean | null>(null);
  const [vaultKey, setVaultKey] = useState<CryptoKey | null>(null);
  const [profile, setProfile] = useState<VaultProfile | null>(null);

  const checkInitialized = useCallback(async () => {
    try {
      const res = await fetch("/api/vault/profile");
      const data = await res.json();
      if (data.exists) {
        setProfile({
          kdfSalt: data.kdfSalt,
          kdfIterations: data.kdfIterations,
          kdfVersion: data.kdfVersion,
        });
        setIsInitialized(true);
      } else {
        setIsInitialized(false);
      }
    } catch (error) {
      console.error("Failed to check vault initialization:", error);
      setIsInitialized(false);
    }
  }, []);

  const initializeVault = useCallback(async (masterPassword: string): Promise<boolean> => {
    if (!profile) return false;

    try {
      const salt = base64Decode(profile.kdfSalt);
      const iterations = profile.kdfIterations;
      const key = await deriveKey(masterPassword, salt, iterations);
      
      const verifier = await computeVerifier(masterPassword, salt, 100000);
      
      const res = await fetch("/api/vault/profile/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ masterPassword }),
      });
      
      const data = await res.json();
      
      if (data.ok) {
        setVaultKey(key);
        setIsUnlocked(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to unlock vault:", error);
      return false;
    }
  }, [profile]);

  const unlock = useCallback(async (masterPassword: string): Promise<boolean> => {
    if (!profile) return false;

    try {
      const salt = base64Decode(profile.kdfSalt);
      const iterations = profile.kdfIterations;
      const key = await deriveKey(masterPassword, salt, iterations);
      
      const res = await fetch("/api/vault/profile/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ masterPassword }),
      });
      
      const data = await res.json();
      
      if (data.ok) {
        setVaultKey(key);
        setIsUnlocked(true);
        return true;
      }
      return false;
    } catch (error) {
      console.error("Failed to unlock vault:", error);
      return false;
    }
  }, [profile]);

  const lock = useCallback(() => {
    setVaultKey(null);
    setIsUnlocked(false);
  }, []);

  const getDecryptedItem = useCallback(async (item: { encryptedBlob: string; iv: string }): Promise<VaultItemPayload | null> => {
    if (!vaultKey) return null;

    try {
      const { decryptJson } = await import("@/lib/vaultCrypto");
      const decrypted = await decryptJson(vaultKey, item.iv, item.encryptedBlob);
      return decrypted as VaultItemPayload;
    } catch (error) {
      console.error("Failed to decrypt item:", error);
      return null;
    }
  }, [vaultKey]);

  const encryptItem = useCallback(async (payload: VaultItemPayload): Promise<{ encryptedBlob: string; iv: string } | null> => {
    if (!vaultKey) return null;

    try {
      const { encryptJson } = await import("@/lib/vaultCrypto");
      const encrypted = await encryptJson(vaultKey, payload);
      return {
        encryptedBlob: encrypted.ciphertext,
        iv: encrypted.iv,
      };
    } catch (error) {
      console.error("Failed to encrypt item:", error);
      return null;
    }
  }, [vaultKey]);

  useEffect(() => {
    checkInitialized();
  }, [checkInitialized]);

  return (
    <VaultContext.Provider
      value={{
        isUnlocked,
        isInitialized,
        unlock,
        lock,
        checkInitialized,
        initializeVault,
        getDecryptedItem,
        encryptItem,
      }}
    >
      {children}
    </VaultContext.Provider>
  );
}

export function useVault() {
  const context = useContext(VaultContext);
  if (!context) {
    throw new Error("useVault must be used within a VaultProvider");
  }
  return context;
}
