"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SignInButton, UserButton, Show } from "@clerk/nextjs";

export default function MobileHeader() {
  const pathname = usePathname();

  // Hide entirely on /study
  if (pathname === "/study" || pathname?.startsWith("/study/")) return null;

  // Show back arrow except on home/dashboard
  const showBackButton = pathname !== "/" && pathname !== "/dashboard";

  return (
    <header className="fixed top-0 w-full z-50 bg-[#f7f9fc]/80 backdrop-blur-xl">
      <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
        <div className="flex items-center gap-4">
          {showBackButton && (
            <Link href="/" className="text-[#0060ad] hover:opacity-80 transition-opacity">
              <span className="material-symbols-outlined">arrow_back</span>
            </Link>
          )}
          <h1
            className="font-bold text-lg tracking-tight text-[#0060ad]"
            style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}
          >
            Mindful Scholar
          </h1>
        </div>
        <div className="flex items-center gap-6">
          <Show when="signed-out">
            <SignInButton />
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </div>
    </header>
  );
}
