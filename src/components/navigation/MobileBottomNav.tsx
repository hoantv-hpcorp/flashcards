"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function MobileBottomNav() {
  const pathname = usePathname();

  if (pathname === "/study" || pathname?.startsWith("/study/")) return null;

  const links = [
    { href: "/", icon: "home", label: "Home" },
    { href: "/library", icon: "library_books", label: "Library" },
    { href: "#", icon: "insights", label: "Progress" },
    { href: "#", icon: "settings", label: "Settings" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-3xl bg-[#f7f9fc]/80 backdrop-blur-xl border-t border-slate-200/15 shadow-[0_-10px_40px_rgba(44,51,56,0.04)]">
      <div className="flex justify-around items-center px-4 pb-6 pt-2">
        {links.map((link) => {
          const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));

          return (
            <Link
              key={link.label}
              href={link.href}
              className={
                isActive
                  ? "flex flex-col items-center justify-center bg-[#0060ad] text-white rounded-2xl px-4 py-2"
                  : "flex flex-col items-center justify-center text-[#2c3338] px-4 py-2 hover:bg-slate-100 transition-colors rounded-2xl"
              }
            >
              <span className="material-symbols-outlined">{link.icon}</span>
              <span
                className="text-[10px] font-medium uppercase tracking-widest mt-1"
                style={{ fontFamily: "var(--font-lexend), sans-serif" }}
              >
                {link.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
