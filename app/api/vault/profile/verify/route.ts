import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { base64Decode, computeVerifier } from "@/lib/vaultCrypto";
import { z } from "zod";

const verifySchema = z.object({
  masterPassword: z.string().min(1),
});

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = verifySchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const profile = await prisma.vaultProfile.findUnique({
    where: { userId: session.user.id },
  });

  if (!profile) {
    return NextResponse.json({ error: "Vault not initialized" }, { status: 400 });
  }

  const salt = base64Decode(profile.kdfSalt);
  const computedVerifier = await computeVerifier(
    parsed.data.masterPassword,
    salt,
    100000
  );

  const isValid = computedVerifier === profile.masterVerifier;

  return NextResponse.json({ ok: isValid });
}
