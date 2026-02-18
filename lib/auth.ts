import type { NextAuthOptions } from "next-auth";
import { getServerSession } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { z } from "zod";
import prisma from "@/lib/prisma";
import { createHash } from "crypto";

const credentialsSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1),
});

function getNextAuthSecret(): string {
  if (process.env.NEXTAUTH_SECRET) {
    return process.env.NEXTAUTH_SECRET;
  }
  const databaseUrl = process.env.DATABASE_URL || process.env.POSTGRES_URL || "";
  return createHash("sha256").update(databaseUrl + "fallback-secret").digest("hex");
}

export const authOptions: NextAuthOptions = {
  secret: getNextAuthSecret(),
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const parsed = credentialsSchema.safeParse(credentials);
        if (!parsed.success) return null;

        try {
          const user = await prisma.user.findUnique({
            where: { email: parsed.data.email },
          });
          if (!user) return null;

          const ok = await bcrypt.compare(parsed.data.password, user.passwordHash);
          if (!ok) return null;

          return {
            id: user.id,
            email: user.email,
            name: user.name ?? undefined,
          } as any;
        } catch (error) {
          console.error("Auth error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      if (url.startsWith("/")) return `${baseUrl}${url}`;
      if (new URL(url).origin === baseUrl) return url;
      return `${baseUrl}/`;
    },
    async jwt({ token, user }) {
      if (user) {
        token.uid = (user as any).id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as any).id = (token as any).uid;
      }
      return session;
    },
  },
};

export function getSession() {
  return getServerSession(authOptions);
}
