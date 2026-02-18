import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import { VaultProvider } from "@/components/VaultContext";
import { VaultHeader } from "@/components/VaultHeader";

export default async function VaultLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getSession();

  if (!session?.user) {
    redirect("/signin");
  }

  return (
    <VaultProvider>
      <div className="min-h-screen">
        <VaultHeader email={session.user.email} />
        <main className="container mx-auto px-4 py-8">
          {children}
        </main>
      </div>
    </VaultProvider>
  );
}
