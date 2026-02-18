"use client";

import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface VaultHeaderProps {
  email?: string | null;
}

export function VaultHeader({ email }: VaultHeaderProps) {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/vault" className="text-xl font-bold">
          TOTP Vault
        </Link>
        <div className="flex items-center gap-4">
          <span className="text-sm text-muted-foreground">
            {email}
          </span>
          <Button
            variant="outline"
            size="sm"
            onClick={() => signOut({ callbackUrl: "/signin" })}
          >
            Sign Out
          </Button>
        </div>
      </div>
    </header>
  );
}
