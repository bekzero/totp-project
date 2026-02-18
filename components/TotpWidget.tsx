"use client";

import { useState, useEffect } from "react";
import { generateTotp, getTimeRemaining, parseOtpAuthUrl } from "@/lib/totp";
import { Button } from "./ui/button";
import { Copy, RefreshCw } from "lucide-react";

interface TotpWidgetProps {
  secret: string;
  issuer?: string;
  algorithm?: "SHA1" | "SHA256" | "SHA512";
  digits?: number;
  period?: number;
}

export function TotpWidget({ 
  secret, 
  issuer, 
  algorithm = "SHA1", 
  digits = 6, 
  period = 30 
}: TotpWidgetProps) {
  const [code, setCode] = useState("");
  const [seconds, setSeconds] = useState(30);
  const [progress, setProgress] = useState(1);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateCode = () => {
      const newCode = generateTotp(secret, {
        secretBytes: new Uint8Array(),
        algorithm,
        digits,
        period,
      });
      setCode(newCode);
      
      const { seconds: secs, progress: prog } = getTimeRemaining(period);
      setSeconds(secs);
      setProgress(prog);
    };

    updateCode();
    const interval = setInterval(updateCode, 1000);

    return () => clearInterval(interval);
  }, [secret, algorithm, digits, period]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const formatCode = (code: string) => {
    return code.slice(0, 3) + " " + code.slice(3);
  };

  return (
    <div className="flex flex-col gap-2 p-4 bg-muted rounded-lg">
      <div className="flex items-center justify-between">
        <div className="text-sm text-muted-foreground">
          {issuer && <span className="font-medium text-foreground">{issuer} - </span>}
          TOTP Code
        </div>
        <div className="text-sm text-muted-foreground">
          {seconds}s
        </div>
      </div>
      
      <div className="flex items-center gap-3">
        <div className="text-3xl font-mono font-bold tracking-wider">
          {formatCode(code)}
        </div>
        <div className="flex gap-1">
          <Button
            variant="ghost"
            size="icon"
            onClick={handleCopy}
            title="Copy to clipboard"
          >
            {copied ? <RefreshCw className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
          </Button>
        </div>
      </div>

      <div className="w-full h-1.5 bg-background rounded-full overflow-hidden">
        <div
          className="h-full bg-primary transition-all duration-1000 ease-linear"
          style={{ width: `${progress * 100}%` }}
        />
      </div>
    </div>
  );
}
