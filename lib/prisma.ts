import { PrismaClient } from "@/lib/generated/prisma-client";

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || process.env.PRISMA_DATABASE_URL;

const prisma = globalForPrisma.prisma ?? new PrismaClient(
  databaseUrl ? {
    datasources: {
      db: {
        url: databaseUrl,
      },
    },
  } : undefined
);

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

export default prisma;
