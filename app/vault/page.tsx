"use client";

import { useState, useEffect } from "react";
import { useVault } from "@/components/VaultContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus, Lock, Unlock, Search, Copy, Eye, Trash2 } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";

interface VaultItem {
  id: string;
  name: string;
  updatedAt: string;
}

export default function VaultPage() {
  const router = useRouter();
  const { isUnlocked, isInitialized, unlock, lock, checkInitialized, getDecryptedItem } = useVault();
  const [masterPassword, setMasterPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState<VaultItem[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [loadingItems, setLoadingItems] = useState(false);
  const [decryptedItems, setDecryptedItems] = useState<Record<string, { username?: string; password?: string; notes?: string; totpSecret?: string }>>({});
  const [revealedPasswords, setRevealedPasswords] = useState<Record<string, boolean>>({});

  useEffect(() => {
    if (isInitialized === false) {
      initializeVault();
    }
  }, [isInitialized]);

  useEffect(() => {
    if (isUnlocked) {
      loadItems();
    }
  }, [isUnlocked]);

  const loadItems = async () => {
    setLoadingItems(true);
    try {
      const res = await fetch("/api/vault/items");
      const data = await res.json();
      setItems(data.items || []);
    } catch (error) {
      console.error("Failed to load items:", error);
    } finally {
      setLoadingItems(false);
    }
  };

  const initializeVault = async () => {
    const password = prompt("Create a master password for your vault:");
    if (!password) return;

    try {
      const initRes = await fetch("/api/vault/profile/init", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ masterPassword: password }),
      });
      if (!initRes.ok) {
        alert("Failed to initialize vault");
        return;
      }

      await checkInitialized();
      
      const unlockRes = await unlock(password);
      if (!unlockRes) {
        alert("Failed to unlock vault");
      }
    } catch (error) {
      console.error("Failed to initialize vault:", error);
    }
  };

  const handleUnlock = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const success = await unlock(masterPassword);
    
    setLoading(false);
    if (!success) {
      setError("Invalid master password");
    }
  };

  const handleResetVault = async () => {
    if (!confirm("This will delete your vault and all stored items. Are you sure?")) return;
    
    try {
      await fetch("/api/vault/profile/reset", { method: "DELETE" });
      await checkInitialized();
      setMasterPassword("");
      setError("");
    } catch (error) {
      console.error("Failed to reset vault:", error);
    }
  };

  const handleLock = () => {
    lock();
    setItems([]);
    setDecryptedItems({});
    setRevealedPasswords({});
  };

  const handleViewItem = async (item: VaultItem) => {
    if (decryptedItems[item.id]) {
      const newRevealed = { ...revealedPasswords };
      newRevealed[item.id] = !newRevealed[item.id];
      setRevealedPasswords(newRevealed);
      return;
    }

    try {
      const res = await fetch(`/api/vault/items/${item.id}`);
      const data = await res.json();
      const decrypted = await getDecryptedItem({
        encryptedBlob: data.encryptedBlob,
        iv: data.iv,
      });
      if (decrypted) {
        setDecryptedItems({ ...decryptedItems, [item.id]: decrypted });
      }
    } catch (error) {
      console.error("Failed to decrypt item:", error);
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Are you sure you want to delete this item?")) return;
    
    try {
      await fetch(`/api/vault/items/${id}`, { method: "DELETE" });
      setItems(items.filter(i => i.id !== id));
      const newDecrypted = { ...decryptedItems };
      delete newDecrypted[id];
      setDecryptedItems(newDecrypted);
    } catch (error) {
      console.error("Failed to delete item:", error);
    }
  };

  const filteredItems = items.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isInitialized === null) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (!isUnlocked) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <Card className="w-full max-w-md">
          <CardHeader className="space-y-1">
            <CardTitle className="flex items-center gap-2">
              <Lock className="h-5 w-5" />
              Vault Locked
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleUnlock} className="space-y-4">
              {error && (
                <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                  {error}
                </div>
              )}
              <div className="space-y-2">
                <Input
                  type="password"
                  placeholder="Enter master password"
                  value={masterPassword}
                  onChange={(e) => setMasterPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Unlocking..." : "Unlock Vault"}
              </Button>
              <Button type="button" variant="ghost" className="w-full text-sm text-muted-foreground" onClick={handleResetVault}>
                Reset Vault (delete all data)
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-bold">Your Vault</h1>
          <div className="flex items-center gap-2 text-sm text-green-500">
            <Unlock className="h-4 w-4" />
            Unlocked
          </div>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" onClick={handleLock}>
            <Lock className="h-4 w-4 mr-2" />
            Lock
          </Button>
          <Link href="/vault/new">
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add Item
            </Button>
          </Link>
        </div>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search vault..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pl-10"
        />
      </div>

      {loadingItems ? (
        <div className="text-center text-muted-foreground py-8">Loading items...</div>
      ) : filteredItems.length === 0 ? (
        <div className="text-center text-muted-foreground py-8">
          {searchQuery ? "No items match your search" : "No items yet. Add your first item!"}
        </div>
      ) : (
        <div className="space-y-2">
          {filteredItems.map((item) => (
            <Card key={item.id}>
              <CardContent className="p-4">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="font-medium">{item.name}</h3>
                    {decryptedItems[item.id]?.username && (
                      <p className="text-sm text-muted-foreground">
                        {decryptedItems[item.id].username}
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    {decryptedItems[item.id] && (
                      <>
                        {decryptedItems[item.id].username && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(decryptedItems[item.id].username!)}
                            title="Copy username"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        )}
                        {decryptedItems[item.id].password && (
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleCopy(decryptedItems[item.id].password!)}
                            title="Copy password"
                          >
                            <Copy className="h-4 w-4" />
                          </Button>
                        )}
                        {decryptedItems[item.id].totpSecret && (
                          <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded">
                            TOTP
                          </span>
                        )}
                      </>
                    )}
                    <Link href={`/vault/${item.id}`}>
                      <Button variant="ghost" size="icon">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </Link>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleDelete(item.id)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
