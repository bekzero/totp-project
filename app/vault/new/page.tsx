"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useVault } from "@/components/VaultContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { parseOtpAuthUrl, generateTotp } from "@/lib/totp";
import { TotpWidget } from "@/components/TotpWidget";
import { ArrowLeft, Plus, Trash2 } from "lucide-react";
import Link from "next/link";

export default function NewVaultItemPage() {
  const router = useRouter();
  const { isUnlocked, encryptItem } = useVault();
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [notes, setNotes] = useState("");
  const [totpMode, setTotpMode] = useState<"none" | "manual" | "url">("none");
  const [totpSecret, setTotpSecret] = useState("");
  const [totpUrl, setTotpUrl] = useState("");
  const [totpIssuer, setTotpIssuer] = useState("");
  const [totpDigits, setTotpDigits] = useState(6);
  const [totpPeriod, setTotpPeriod] = useState(30);
  const [totpAlgorithm, setTotpAlgorithm] = useState<"SHA1" | "SHA256" | "SHA512">("SHA1");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleParseOtpUrl = () => {
    const parsed = parseOtpAuthUrl(totpUrl);
    if (parsed) {
      setTotpSecret(parsed.secret);
      if (parsed.issuer) setTotpIssuer(parsed.issuer);
      if (parsed.digits) setTotpDigits(parsed.digits);
      if (parsed.period) setTotpPeriod(parsed.period);
      if (parsed.algorithm) setTotpAlgorithm(parsed.algorithm);
    } else {
      setError("Invalid otpauth URL");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!isUnlocked) {
      setError("Vault is locked");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const payload = {
        username,
        password,
        notes,
        totpSecret: totpMode !== "none" ? totpSecret : undefined,
        totpMeta: totpMode !== "none" ? {
          issuer: totpIssuer,
          algorithm: totpAlgorithm,
          digits: totpDigits,
          period: totpPeriod,
        } : undefined,
      };

      const encrypted = await encryptItem(payload);
      if (!encrypted) {
        setError("Failed to encrypt data");
        setLoading(false);
        return;
      }

      const res = await fetch("/api/vault/items", {
        method: "POST",
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
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Link href="/vault">
          <Button variant="ghost" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-2xl font-bold">Add New Item</h1>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Credential Details</CardTitle>
          <CardDescription>Store a new username and password in your vault</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <div className="text-sm text-destructive bg-destructive/10 p-3 rounded-md">
                {error}
              </div>
            )}
            
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                placeholder="e.g., Google Account"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="username">Username / Email</Label>
              <Input
                id="username"
                type="text"
                placeholder="user@example.com"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="notes">Notes</Label>
              <Textarea
                id="notes"
                placeholder="Additional notes..."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={3}
              />
            </div>

            <div className="space-y-4 pt-4 border-t">
              <div className="flex items-center justify-between">
                <Label>TOTP (Two-Factor)</Label>
                <select
                  value={totpMode}
                  onChange={(e) => setTotpMode(e.target.value as "none" | "manual" | "url")}
                  className="bg-background border border-input rounded-md px-2 py-1 text-sm"
                >
                  <option value="none">None</option>
                  <option value="manual">Manual Secret</option>
                  <option value="url">From URL</option>
                </select>
              </div>

              {totpMode === "url" && (
                <div className="space-y-2">
                  <Label htmlFor="totpUrl">otpauth:// URL</Label>
                  <div className="flex gap-2">
                    <Input
                      id="totpUrl"
                      placeholder="otpauth://totp/..."
                      value={totpUrl}
                      onChange={(e) => setTotpUrl(e.target.value)}
                    />
                    <Button type="button" variant="outline" onClick={handleParseOtpUrl}>
                      Parse
                    </Button>
                  </div>
                </div>
              )}

              {totpMode !== "none" && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="totpSecret">TOTP Secret (Base32)</Label>
                    <Input
                      id="totpSecret"
                      placeholder="JBSWY3DPEHPK3PXP"
                      value={totpSecret}
                      onChange={(e) => setTotpSecret(e.target.value.toUpperCase().replace(/[^A-Z2-7]/g, ""))}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="totpIssuer">Issuer</Label>
                      <Input
                        id="totpIssuer"
                        placeholder="Google, GitHub, etc."
                        value={totpIssuer}
                        onChange={(e) => setTotpIssuer(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="totpAlgorithm">
                        Algorithm
                        <span className="text-muted-foreground font-normal ml-2">(most services use SHA1)</span>
                      </Label>
                      <select
                        id="totpAlgorithm"
                        value={totpAlgorithm}
                        onChange={(e) => setTotpAlgorithm(e.target.value as "SHA1" | "SHA256" | "SHA512")}
                        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                      >
                        <option value="SHA1">SHA1 (Google, Microsoft, GitHub)</option>
                        <option value="SHA256">SHA256 (some high-security)</option>
                        <option value="SHA512">SHA512 (rare)</option>
                      </select>
                    </div>
                  </div>

                  {totpSecret && (
                    <div className="space-y-2">
                      <Label>Preview</Label>
                      <TotpWidget
                        secret={totpSecret}
                        issuer={totpIssuer}
                        algorithm={totpAlgorithm}
                        digits={totpDigits}
                        period={totpPeriod}
                      />
                    </div>
                  )}
                </>
              )}
            </div>

            <div className="flex justify-end gap-2 pt-4">
              <Link href="/vault">
                <Button variant="outline" type="button">Cancel</Button>
              </Link>
              <Button type="submit" disabled={loading || !isUnlocked}>
                {loading ? "Saving..." : "Save Item"}
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
