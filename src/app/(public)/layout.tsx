"use client";

import { usePathname } from "next/navigation";
import { BubbleBackground } from "@/src/components/animate-ui/components/backgrounds/bubble";
import Footer from "@/src/components/layout/Footer";
import Navbar from "@/src/components/layout/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const hideLayout = pathname === "/signin" || pathname === "/signup";

  return (
    <div className="relative min-h-screen overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <BubbleBackground />
      </div>

      {!hideLayout && <Navbar />}

      <main className="relative z-10 max-w-5xl mx-auto">{children}</main>

      {!hideLayout && <Footer />}
    </div>
  );
}
