import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function DELETE() {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  await prisma.vaultProfile.deleteMany({
    where: { userId: session.user.id },
  });

  await prisma.vaultItem.deleteMany({
    where: { userId: session.user.id },
  });

  return NextResponse.json({ ok: true });
}
