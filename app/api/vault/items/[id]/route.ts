import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { z } from "zod";

const updateItemSchema = z.object({
  name: z.string().min(1).optional(),
  encryptedBlob: z.string().optional(),
  iv: z.string().optional(),
});

export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const item = await prisma.vaultItem.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!item) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  return NextResponse.json({
    id: item.id,
    name: item.name,
    encryptedBlob: item.encryptedBlob,
    iv: item.iv,
    schemaVersion: item.schemaVersion,
  });
}

export async function PUT(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await prisma.vaultItem.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  const parsed = updateItemSchema.safeParse(await request.json());
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const updateData: {
    name?: string;
    encryptedBlob?: string;
    iv?: string;
  } = {};

  if (parsed.data.name) updateData.name = parsed.data.name;
  if (parsed.data.encryptedBlob) updateData.encryptedBlob = parsed.data.encryptedBlob;
  if (parsed.data.iv) updateData.iv = parsed.data.iv;

  const item = await prisma.vaultItem.update({
    where: { id },
    data: updateData,
  });

  return NextResponse.json({
    id: item.id,
    name: item.name,
    updatedAt: item.updatedAt,
  });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const existing = await prisma.vaultItem.findFirst({
    where: { id, userId: session.user.id },
  });

  if (!existing) {
    return NextResponse.json({ error: "Not found" }, { status: 404 });
  }

  await prisma.vaultItem.delete({
    where: { id },
  });

  return NextResponse.json({ ok: true });
}
