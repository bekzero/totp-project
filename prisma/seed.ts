import { PrismaClient } from "@/lib/generated/prisma-client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  const email = process.env.SEED_EMAIL || "user@test.com";
  const password = process.env.SEED_PASSWORD || "TestPass123!";

  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    const passwordHash = await bcrypt.hash(password, 10);
    
    await prisma.user.create({
      data: {
        email,
        name: "Test User",
        passwordHash,
      },
    });

    console.log(`Created user: ${email}`);
  } else {
    console.log(`User already exists: ${email}`);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
