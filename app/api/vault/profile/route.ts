import { NextResponse } from "next/server";
import { getSession } from "@/lib/auth";
import prisma from "@/lib/prisma";

export async function GET() {
  const session = await getSession();
  if (!session?.user?.id) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const profile = await prisma.vaultProfile.findUnique({
    where: { userId: session.user.id },
    select: {
      kdfSalt: true,
      kdfIterations: true,
      kdfVersion: true,
    },
  });

  if (!profile) {
    return NextResponse.json({ exists: false });
  }

  return NextResponse.json({
    exists: true,
    ...profile,
  });
}
