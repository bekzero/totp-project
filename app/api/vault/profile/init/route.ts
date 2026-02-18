import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { generateSalt, base64Encode, computeVerifier } from "@/lib/vaultCrypto";
import { z } from "zod";

const initSchema = z.object({
  masterPassword: z.string().min(1),
});

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const parsed = initSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const existing = await prisma.vaultProfile.findUnique({
    where: { userId: session.user.id },
  });

  if (existing) {
    return NextResponse.json({ error: "Vault already initialized" }, { status: 400 });
  }

  const salt = generateSalt();
  const iterations = 310000;
  const saltBase64 = base64Encode(salt);
  
  const verifier = await computeVerifier(parsed.data.masterPassword, salt, 100000);

  const profile = await prisma.vaultProfile.create({
    data: {
      userId: session.user.id,
      kdfSalt: saltBase64,
      kdfIterations: iterations,
      kdfVersion: 1,
      masterVerifier: verifier,
    },
  });

  return NextResponse.json({
    id: profile.id,
    kdfSalt: saltBase64,
    kdfIterations: iterations,
    kdfVersion: 1,
  });
}
