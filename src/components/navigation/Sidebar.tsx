"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const links = [
    { href: "/", icon: "home", label: "Home" },
    { href: "/library", icon: "library_books", label: "Library" },
    { href: "/study", icon: "style", label: "Flashcards" },
    { href: "#", icon: "insights", label: "Progress" },
    { href: "#", icon: "settings", label: "Settings" },
  ];

  return (
    <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 flex flex-col z-40">
      <div className="flex flex-col gap-2 p-4 h-full">
        {/* Logo */}
        <div className="flex items-center gap-3 px-4 py-8 mb-4">
          <div className="w-10 h-10 bg-[#68abff] rounded-xl flex items-center justify-center">
            <span className="material-symbols-outlined text-[#002b52]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-black text-blue-800 tracking-tight leading-none" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Mindful Scholar</span>
            <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Deep Learning</span>
          </div>
        </div>

        {/* Nav Links */}
        <nav className="flex-1 space-y-1">
          {links.map((link) => {
            const isActive = pathname === link.href || (link.href !== "/" && pathname?.startsWith(link.href));
            
            return (
              <Link 
                key={link.label}
                href={link.href}
                className={
                  isActive
                    ? "flex items-center gap-3 bg-white text-blue-700 rounded-xl px-4 py-3 shadow-sm font-bold transition-all duration-300 translate-x-1"
                    : "flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-blue-50/50 hover:text-blue-600 transition-all rounded-xl"
                }
              >
                <span className="material-symbols-outlined" style={isActive ? { fontVariationSettings: "'FILL' 1" } : {}}>{link.icon}</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">{link.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* Upgrade CTA */}
        <div className="mt-auto p-2">
          <div className="bg-[#e9eef3] rounded-2xl p-4 relative overflow-hidden">
            <div className="relative z-10">
              <p className="text-xs font-bold text-[#0060ad] mb-1">Upgrade to Pro</p>
              <p className="text-[11px] text-[#596065] leading-tight mb-3">Unlock unlimited decks &amp; AI insights.</p>
              <button className="w-full py-2 bg-[#0060ad] text-[#f8f8ff] text-xs font-bold rounded-lg shadow-md hover:brightness-110 transition-all">Get Access</button>
            </div>
            <div className="absolute -right-4 -bottom-4 w-16 h-16 bg-[#599ef1]/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </aside>
  );
}
