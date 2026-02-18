import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";

const createItemSchema = z.object({
  name: z.string().min(1),
  encryptedBlob: z.string(),
  iv: z.string(),
});

export async function POST(request: Request) {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await prisma.vaultProfile.findUnique({
    where: { userId: session.user.id },
  });

  if (!profile) {
    return NextResponse.json({ error: "Vault not initialized" }, { status: 400 });
  }

  const parsed = createItemSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const item = await prisma.vaultItem.create({
    data: {
      userId: session.user.id,
      name: parsed.data.name,
      encryptedBlob: parsed.data.encryptedBlob,
      iv: parsed.data.iv,
      schemaVersion: 1,
    },
  });

  return NextResponse.json({
    id: item.id,
    name: item.name,
    updatedAt: item.updatedAt,
  });
}
