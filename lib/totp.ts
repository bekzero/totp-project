import { hmac } from "@noble/hashes/hmac";
import { sha1 } from "@noble/hashes/sha1";
import { sha256 } from "@noble/hashes/sha256";
import { sha512 } from "@noble/hashes/sha512";

const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

export function base32Decode(input: string): Uint8Array {
  const cleaned = input.toUpperCase().replace(/[^A-Z2-7]/g, "").replace(/=+$/, "");
  
  let bits = "";
  for (const char of cleaned) {
    const index = BASE32_ALPHABET.indexOf(char);
    if (index === -1) throw new Error(`Invalid Base32 character: ${char}`);
    bits += index.toString(2).padStart(5, "0");
  }

  const bytes: number[] = [];
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes.push(parseInt(bits.slice(i, i + 8), 2));
  }

  return new Uint8Array(bytes);
}

export function base32Encode(bytes: Uint8Array): string {
  let bits = "";
  for (const byte of bytes) {
    bits += byte.toString(2).padStart(8, "0");
  }

  let result = "";
  for (let i = 0; i + 5 <= bits.length; i += 5) {
    const index = parseInt(bits.slice(i, i + 5), 2);
    result += BASE32_ALPHABET[index];
  }

  const remaining = (bits.length % 5);
  if (remaining > 0) {
    const lastBits = bits.slice(-remaining).padEnd(5, "0");
    result += BASE32_ALPHABET[parseInt(lastBits, 2)];
  }

  while (result.length % 8 !== 0) {
    result += "=";
  }

  return result;
}

export interface OtpAuthParams {
  secret: string;
  issuer?: string;
  algorithm?: "SHA1" | "SHA256" | "SHA512";
  digits?: number;
  period?: number;
}

export function parseOtpAuthUrl(url: string): OtpAuthParams | null {
  try {
    const parsed = new URL(url);
    if (parsed.protocol !== "otpauth:") return null;
    if (parsed.host !== "totp" && parsed.host !== "hotp") return null;

    const params = parsed.searchParams;
    const secret = params.get("secret");
    if (!secret) return null;

    const result: OtpAuthParams = {
      secret,
      issuer: params.get("issuer") || undefined,
      algorithm: (params.get("algorithm") as "SHA1" | "SHA256" | "SHA512") || "SHA1",
      digits: parseInt(params.get("digits") || "6", 10),
      period: parseInt(params.get("period") || "30", 10),
    };

    const label = parsed.pathname.replace(/^\/+/, "");
    if (!result.issuer && label.includes(":")) {
      const [issuer] = label.split(":");
      result.issuer = issuer;
    }

    return result;
  } catch {
    return null;
  }
}

export interface TotpOptions {
  secretBytes: Uint8Array;
  period?: number;
  digits?: number;
  algorithm?: "SHA1" | "SHA256" | "SHA512";
}

function getHashFunction(algorithm: string) {
  switch (algorithm) {
    case "SHA256":
      return sha256;
    case "SHA512":
      return sha512;
    case "SHA1":
    default:
      return sha1;
  }
}

export function generateTotp(secret: string, options: TotpOptions, timestampMs?: number): string {
  const time = Math.floor((timestampMs ?? Date.now()) / 1000);
  const period = options.period ?? 30;
  const digits = options.digits ?? 6;
  const algorithm = options.algorithm ?? "SHA1";

  const counterValue = Math.floor(time / period);
  
  const counter = new Array(8);
  let t = counterValue;
  for (let i = 7; i >= 0; i--) {
    counter[i] = t & 0xff;
    t = Math.floor(t / 256);
  }

  const secretBytes = typeof secret === "string" ? base32Decode(secret) : secret;
  const hashFn = getHashFunction(algorithm);
  const hmacResult = hmac(hashFn, secretBytes, new Uint8Array(counter));

  const offset = hmacResult[hmacResult.length - 1] & 0x0f;
  const code =
    ((hmacResult[offset] & 0x7f) << 24) |
    ((hmacResult[offset + 1] & 0xff) << 16) |
    ((hmacResult[offset + 2] & 0xff) << 8) |
    (hmacResult[offset + 3] & 0xff);

  const otp = code % Math.pow(10, digits);
  return otp.toString().padStart(digits, "0");
}

export function getTimeRemaining(period: number = 30): { seconds: number; progress: number } {
  const now = Math.floor(Date.now() / 1000);
  const seconds = period - (now % period);
  const progress = seconds / period;
  return { seconds, progress };
}
