"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { useVault } from "@/components/VaultContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { TotpWidget } from "@/components/TotpWidget";
import { ArrowLeft, Copy, Eye, EyeOff, Save, Trash2 } from "lucide-react";
import Link from "next/link";

interface VaultItemData {
  id: string;
  name: string;
  encryptedBlob: string;
  iv: string;
}

interface DecryptedData {
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

export default function VaultItemPage() {
  const router = useRouter();
  const params = useParams();
  const { isUnlocked, getDecryptedItem, encryptItem } = useVault();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [itemData, setItemData] = useState<VaultItemData | null>(null);
  const [decrypted, setDecrypted] = useState<DecryptedData | null>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");
  const [hasTotp, setHasTotp] = useState(false);

  useEffect(() => {
    loadItem();
  }, [params.id, isUnlocked]);

  const loadItem = async () => {
    if (!isUnlocked) return;
    
    setLoading(true);
    try {
      const res = await fetch(`/api/vault/items/${params.id}`);
      if (!res.ok) {
        setError("Item not found");
        return;
      }
      const data = await res.json();
      setItemData(data);
      setName(data.name);

      const decryptedData = await getDecryptedItem({
        encryptedBlob: data.encryptedBlob,
        iv: data.iv,
      });

      if (decryptedData) {
        setDecrypted(decryptedData);
        setUsername(decryptedData.username || "");
        setPassword(decryptedData.password || "");
        setNotes(decryptedData.notes || "");
        setHasTotp(!!decryptedData.totpSecret);
      }
    } catch (err) {
      console.error("Failed to load item:", err);
      setError("Failed to load item");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async () => {
    if (!itemData || !encryptItem) return;

    setSaving(true);
    setError("");

    try {
      const payload: DecryptedData = {
        username,
        password,
        notes,
      };

      if (decrypted?.totpSecret) {
        payload.totpSecret = decrypted.totpSecret;
        payload.totpMeta = decrypted.totpMeta;
      }

      const encrypted = await encryptItem(payload);
      if (!encrypted) {
        setError("Failed to encrypt data");
        setSaving(false);
        return;
      }

      const res = await fetch(`/api/vault/items/${params.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          encryptedBlob: encrypted.encryptedBlob,
          iv: encrypted.iv,
        }),
      });

      if (res.ok) {
        router.push("/vault");
      } else {
        setError("Failed to save item");
      }
    } catch (err) {
      console.error("Failed to save item:", err);
      setError("Failed to save item");
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!confirm("Are you sure you want to delete this item?")) return;

    try {
      await fetch(`/api/vault/items/${params.id}`, { method: "DELETE" });
      router.push("/vault");
    } catch (err) {
      console.error("Failed to delete item:", err);
    }
  };

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-muted-foreground">Loading...</div>
      </div>
    );
  }

  if (error && !itemData) {
    return (
      <div className="max-w-2xl mx-auto space-y-6">
        <div className="flex items-center gap-4">
          <Link href="/vault">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">Error</h1>
        </div>
        <Card>
          <CardContent className="p-6">
            <p className="text-destructive">{error}</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/vault">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-2xl font-bold">View Item</h1>
        </div>
        <Button variant="destructive" onClick={handleDelete}>
          <Trash2 className="h-4 w-4 mr-2" />
          Delete
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Credential Details</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {error && (
            <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
              {error}
            </div>
          )}

          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="username">Username / Email</Label>
            <div className="flex gap-2">
              <Input
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopy(username)}
                title="Copy"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Password</Label>
            <div className="flex gap-2">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={() => setShowPassword(!showPassword)}
                title={showPassword ? "Hide" : "Show"}
              >
                {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              </Button>
              <Button
                variant="outline"
                size="icon"
                onClick={() => handleCopy(password)}
                title="Copy"
              >
                <Copy className="h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Notes</Label>
            <Textarea
              id="notes"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
            />
          </div>

          {hasTotp && decrypted?.totpSecret && (
            <div className="space-y-2 pt-4 border-t">
              <Label>TOTP Code</Label>
              <TotpWidget
                secret={decrypted.totpSecret}
                issuer={decrypted.totpMeta?.issuer}
                algorithm={decrypted.totpMeta?.algorithm as "SHA1" | "SHA256" | "SHA512" || "SHA1"}
                digits={decrypted.totpMeta?.digits || 6}
                period={decrypted.totpMeta?.period || 30}
              />
            </div>
          )}

          <div className="flex justify-end gap-2 pt-4">
            <Link href="/vault">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button onClick={handleSave} disabled={saving || !isUnlocked}>
              <Save className="h-4 w-4 mr-2" />
              {saving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
