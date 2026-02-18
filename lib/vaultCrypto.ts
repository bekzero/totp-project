export function generateSalt(): Uint8Array {
  return crypto.getRandomValues(new Uint8Array(32));
}

export function base64Encode(buffer: Uint8Array | ArrayBuffer): string {
  const bytes = buffer instanceof Uint8Array ? buffer : new Uint8Array(buffer);
  let binary = "";
  for (let i = 0; i < bytes.length; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

export function base64Decode(base64: string): Uint8Array {
  const binary = atob(base64);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i++) {
    bytes[i] = binary.charCodeAt(i);
  }
  return bytes;
}

export async function deriveKey(
  masterPassword: string,
  salt: Uint8Array,
  iterations: number = 310000
): Promise<CryptoKey> {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(masterPassword);

  const baseKey = await crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    "PBKDF2",
    false,
    ["deriveBits", "deriveKey"]
  );

  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      salt: salt.buffer as ArrayBuffer,
      iterations: iterations,
      hash: "SHA-256",
    },
    baseKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );

  return derivedKey;
}

export interface EncryptedPayload {
  iv: string;
  ciphertext: string;
}

export interface VaultItemData {
  encryptedBlob: string;
  iv: string;
}

export async function encryptJson(
  key: CryptoKey,
  obj: object
): Promise<EncryptedPayload> {
  const encoder = new TextEncoder();
  const data = encoder.encode(JSON.stringify(obj));
  
  const iv = crypto.getRandomValues(new Uint8Array(12));
  
  const ciphertext = await crypto.subtle.encrypt(
    { name: "AES-GCM", iv: iv.buffer as ArrayBuffer },
    key,
    data.buffer as ArrayBuffer
  );

  return {
    iv: base64Encode(iv),
    ciphertext: base64Encode(ciphertext),
  };
}

export async function decryptJson(
  key: CryptoKey,
  iv: string,
  ciphertext: string
): Promise<object> {
  const ivBytes = base64Decode(iv);
  const ciphertextBytes = base64Decode(ciphertext);

  const decrypted = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv: ivBytes.buffer as ArrayBuffer },
    key,
    ciphertextBytes.buffer as ArrayBuffer
  );

  const decoder = new TextDecoder();
  return JSON.parse(decoder.decode(decrypted));
}

const VERIFIER_ITERATIONS = 100000;

export async function computeVerifier(
  masterPassword: string,
  salt: Uint8Array,
  iterations: number = VERIFIER_ITERATIONS
): Promise<string> {
  const encoder = new TextEncoder();
  const passwordBuffer = encoder.encode(masterPassword);

  const baseKey = await crypto.subtle.importKey(
    "raw",
    passwordBuffer,
    "PBKDF2",
    false,
    ["deriveBits"]
  );

  const derivedBits = await crypto.subtle.deriveBits(
    {
      name: "PBKDF2",
      salt: salt.buffer as ArrayBuffer,
      iterations: iterations,
      hash: "SHA-256",
    },
    baseKey,
    256
  );

  return base64Encode(derivedBits);
}

export interface VaultProfileData {
  kdfSalt: string;
  kdfIterations: number;
  kdfVersion: number;
  masterVerifier: string;
}

export interface VaultItemPayload {
  username?: string;
  password?: string;
  notes?: string;
  totpSecret?: string;
  totpMeta?: {
    issuer?: string;
    algorithm?: string;
    digits?: number;
    period?: number;
  };
}
