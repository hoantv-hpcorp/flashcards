export default function LibraryPage() {
  const desktopDecks = [
    { icon: "architecture", color: "#0060ad", bg: "#0060ad", label: "124 Cards", title: "Modern Architecture", desc: "Structural concepts, materials, and historical movements of the 20th century.", mastery: 82 },
    { icon: "psychology", color: "#855500", bg: "#feb246", label: "86 Cards", title: "Cognitive Psychology", desc: "Understanding memory, perception, and problem-solving mechanisms.", mastery: 45 },
    { icon: "language", color: "#006e36", bg: "#83fba5", label: "210 Cards", title: "Latin Terminology", desc: "Essential roots for legal, medical, and scientific discourse.", mastery: 12 },
    { icon: "biotech", color: "#a83836", bg: "#fa746f", label: "54 Cards", title: "Microbiology Basics", desc: "Study of microscopic organisms, including viruses, bacteria, and fungi.", mastery: 95 },
    { icon: "finance", color: "#0060ad", bg: "#0060ad", label: "72 Cards", title: "Financial Derivatives", desc: "Advanced instruments, hedging strategies, and market dynamics.", mastery: 60 },
  ];

  return (
    <>
      {/* ===== DESKTOP LAYOUT (md+) ===== */}
      <div className="hidden md:block">
        {/* Sidebar */}
        <aside className="fixed left-0 top-0 h-full w-64 bg-slate-50 flex flex-col z-40">
          <div className="flex flex-col gap-2 p-4 h-full">
            <div className="flex items-center gap-3 px-4 py-8 mb-4">
              <div className="w-10 h-10 bg-[#68abff] rounded-xl flex items-center justify-center">
                <span className="material-symbols-outlined text-[#002b52]" style={{ fontVariationSettings: "'FILL' 1" }}>auto_stories</span>
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black text-blue-800 tracking-tight leading-none" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Mindful Scholar</span>
                <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">Deep Learning</span>
              </div>
            </div>
            <nav className="flex-1 space-y-1">
              <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-blue-50/50 hover:text-blue-600 transition-all rounded-xl" href="/">
                <span className="material-symbols-outlined">home</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">Home</span>
              </a>
              <a className="flex items-center gap-3 bg-white text-blue-700 rounded-xl px-4 py-3 shadow-sm font-bold transition-all duration-300 translate-x-1" href="/library">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>library_books</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">Library</span>
              </a>
              <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-blue-50/50 hover:text-blue-600 transition-all rounded-xl" href="#">
                <span className="material-symbols-outlined">insights</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">Progress</span>
              </a>
              <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-blue-50/50 hover:text-blue-600 transition-all rounded-xl" href="#">
                <span className="material-symbols-outlined">settings</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">Settings</span>
              </a>
            </nav>
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

        {/* Top Nav */}
        <header className="fixed top-0 left-64 right-0 h-16 bg-white/80 backdrop-blur-xl z-30 shadow-sm">
          <div className="flex justify-between items-center px-8 h-full w-full max-w-screen-2xl mx-auto relative">
            <div className="flex items-center flex-1">
              <div className="relative w-full max-w-md group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-[#0060ad] transition-colors">search</span>
                <input className="w-full bg-[#f0f4f8] border-none rounded-full py-2 pl-10 pr-4 text-sm focus:ring-2 focus:ring-[#0060ad]/20 focus:bg-white transition-all outline-none" placeholder="Search your library..." type="text" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="p-2 text-slate-500 hover:text-[#0060ad] transition-colors">
                <span className="material-symbols-outlined">notifications</span>
              </button>
              <button className="p-2 text-slate-500 hover:text-[#0060ad] transition-colors">
                <span className="material-symbols-outlined">help</span>
              </button>
              <div className="h-8 w-px bg-slate-200 mx-2"></div>
              <div className="flex items-center gap-3 pl-2">
                <div className="text-right hidden xl:block">
                  <p className="text-sm font-bold text-[#2c3338] leading-none">Alex Johnson</p>
                  <p className="text-[11px] text-slate-500">Scholar Level 12</p>
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-[#68abff] overflow-hidden">
                  <img className="w-full h-full object-cover" alt="User profile" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmCFtMCuu3gaxvesfliiFi5Rbf3u4ITycMOcVeyGqEHXHX0SeZbBNutBc8eUoH2VQke3MFoucdhP2l_2IDDwalWxCu7TygALzWiAm6_sXt0a7C07f7mjSAQnyf9jDvBN_RR-BcG6qsGh-P_vrPziBVinq9v3qqrh6mxh8W_SfKfLIK6IT85j9q4oV4gBmX1Absqpiqwk7NL5UKdc9W5SlV5Uu0lwDfuNPFe7DticE2rrC3fXjlPaAqj0Aqh30-QcCPpqGpayWmRmjl" />
                </div>
              </div>
            </div>
            <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
          </div>
        </header>

        {/* Main Content */}
        <main className="ml-64 pt-16 min-h-screen">
          <div className="max-w-7xl mx-auto px-10 py-16">
            {/* Header */}
            <div className="flex justify-between items-end mb-12">
              <div className="space-y-2">
                <nav className="flex items-center gap-2 text-xs text-slate-400 mb-4">
                  <span>Library</span>
                  <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                  <span className="text-[#0060ad] font-medium">Vocabulary Library</span>
                </nav>
                <h2 className="text-5xl font-extrabold text-[#2c3338] tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Vocabulary Library</h2>
                <p className="text-lg text-[#596065] max-w-2xl leading-relaxed">
                  Curate your cognitive space. Manage your study decks and track your mastery across diverse disciplines.
                </p>
              </div>
              <button className="flex items-center gap-2 bg-[#83fba5] text-[#005f2e] px-6 py-3 rounded-xl font-bold hover:brightness-95 transition-all editorial-shadow active:scale-95" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
                <span className="material-symbols-outlined">add</span>
                Add New Deck
              </button>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {desktopDecks.map((deck) => (
                <div key={deck.title} className="group relative bg-white p-8 rounded-[2rem] editorial-shadow border border-white/50 hover:-translate-y-1 transition-transform duration-300">
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-14 h-14 rounded-2xl flex items-center justify-center" style={{ background: deck.bg + "1a", color: deck.color }}>
                      <span className="material-symbols-outlined text-3xl">{deck.icon}</span>
                    </div>
                    <span className="bg-[#e3e9ee] text-[#596065] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">{deck.label}</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#2c3338] mb-3" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>{deck.title}</h3>
                  <p className="text-[#596065] text-sm leading-relaxed mb-8">{deck.desc}</p>
                  <div className="space-y-4">
                    <div className="flex justify-between items-end text-xs font-bold uppercase tracking-wider">
                      <span className="text-[#006e36]">Mastery</span>
                      <span className="text-[#2c3338]">{deck.mastery}%</span>
                    </div>
                    <div className="h-2 w-full bg-[#dce3e9] rounded-full overflow-hidden">
                      <div className="h-full progress-gradient rounded-full" style={{ width: `${deck.mastery}%` }}></div>
                    </div>
                  </div>
                  <a href="/study" className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-2 text-[#0060ad] font-bold text-sm">
                    Review Deck
                    <span className="material-symbols-outlined text-sm">arrow_forward</span>
                  </a>
                </div>
              ))}

              {/* Add New Deck Card */}
              <div className="group flex flex-col items-center justify-center p-8 rounded-[2rem] border-2 border-dashed border-[#abb3b9]/30 hover:border-[#0060ad]/50 transition-colors cursor-pointer bg-[#f0f4f8]/30 min-h-[320px]">
                <div className="w-16 h-16 rounded-full bg-white editorial-shadow flex items-center justify-center text-[#0060ad] mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-3xl">add</span>
                </div>
                <p className="font-bold text-lg text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Create New Deck</p>
                <p className="text-sm text-slate-400 mt-1">Start a new study journey</p>
              </div>
            </div>
          </div>
        </main>

        {/* FAB */}
        <div className="fixed bottom-10 right-10 z-50">
          <button className="w-14 h-14 rounded-full primary-gradient text-[#f8f8ff] editorial-shadow flex items-center justify-center hover:scale-105 active:scale-95 transition-all">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
          </button>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (<md) ===== */}
      <div className="block md:hidden min-h-screen pb-32">
        {/* Fixed Header */}
        <header className="fixed top-0 w-full z-50 bg-[#f7f9fc]/80 backdrop-blur-xl">
          <div className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
            <div className="flex items-center gap-4">
              <a href="/" className="text-[#0060ad] hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined">arrow_back</span>
              </a>
              <h1 className="font-bold text-lg tracking-tight text-[#0060ad]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Mindful Scholar</h1>
            </div>
            <div className="flex items-center gap-6">
              <div className="w-10 h-10 rounded-full bg-[#dce3e9] overflow-hidden border-2 border-[#0060ad]/10">
                <img alt="User Profile" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-Jk7FJmgVU31iR8NQ90gq4lU6_cWp1rpqEe3MqM2U_FSKRIIgIqLmhOnqb3p4JSQAqpiuyy9Oiwn2cHC-CWOZ1DHwuP-wvPfUPmYK7pWfvGtvA7KQPTLToRwYK03fOYaYzcJYFkoYKivx0u4aHa51y_x2a1zO_wqcQ9DpXpuWSeoDuARI41AMdItgvVpD5Aa6AUXN7K7MBV5y6RBJ7Zkq3sowvfWqJ_Mfyxd07VcpPGUGDZV8GOSFpGud65Ror2EzUvU7ua8GYM-r" />
              </div>
            </div>
          </div>
        </header>

        <main className="pt-24 pb-32 px-6 max-w-4xl mx-auto">
          {/* Header */}
          <section className="mb-12">
            <div className="flex flex-col gap-6">
              <div className="space-y-2">
                <h2 className="font-extrabold text-4xl text-[#2c3338] tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Vocabulary Library</h2>
                <p className="text-[#596065] text-lg">Curate your cognitive sanctuary. Deep dive into specialized terminologies and master new concepts.</p>
              </div>
              <button className="bg-gradient-to-br from-[#0060ad] to-[#68abff] text-[#f8f8ff] px-8 py-4 rounded-full font-bold flex items-center justify-center gap-2 shadow-lg hover:scale-[1.01] transition-transform w-full" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
                <span className="material-symbols-outlined">add</span>
                Add New Deck
              </button>
            </div>
            {/* Search */}
            <div className="mt-8 relative">
              <div className="absolute inset-y-0 left-5 flex items-center pointer-events-none text-[#747c81]">
                <span className="material-symbols-outlined">search</span>
              </div>
              <input className="w-full bg-[#f0f4f8] border-none rounded-xl py-4 pl-14 pr-6 text-[#2c3338] placeholder:text-[#747c81] focus:ring-2 focus:ring-[#0060ad]/20 transition-all focus:bg-white editorial-shadow outline-none" placeholder="Search your collections..." type="text" />
            </div>
          </section>

          {/* Deck List */}
          <section className="flex flex-col gap-6">
            {/* Card 1 - In Progress */}
            <div className="bg-white rounded-[1.5rem] p-6 editorial-shadow border border-[#abb3b9]/15 flex flex-col gap-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="bg-[#83fba5] text-[#005f2e] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>In Progress</span>
                  <span className="text-[#596065] text-sm" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>84 Cards</span>
                </div>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-2xl text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Modern Architecture &amp; Forms</h3>
                <p className="text-[#596065] text-base leading-relaxed">Fundamental concepts of brutalism, minimalism, and organic architecture in the 21st century.</p>
              </div>
              <div className="pt-4 flex flex-col gap-3">
                <div className="flex justify-between items-center text-sm font-bold text-[#006e36]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
                  <span>Progress</span>
                  <span>65% Mastered</span>
                </div>
                <div className="h-2.5 bg-[#dce3e9] rounded-full overflow-hidden">
                  <div className="h-full w-[65%] bg-gradient-to-r from-[#006e36] to-[#83fba5]"></div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[1.5rem] p-6 editorial-shadow border border-[#abb3b9]/15 flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#feb246]/20 text-[#855500] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">auto_stories</span>
                  </div>
                  <span className="text-[#596065] text-sm" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>120 Cards</span>
                </div>
                <span className="material-symbols-outlined text-[#006e36]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Cognitive Psychology</h3>
                <p className="text-[#596065] text-base">Memory, perception, and focus mechanisms.</p>
              </div>
              <div className="pt-4 border-t border-[#e9eef3] flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-[#596065]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Status</span>
                <span className="font-bold text-[#006e36]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>100% Mastery</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[1.5rem] p-6 editorial-shadow border border-[#abb3b9]/15 flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#0060ad]/10 text-[#0060ad] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">translate</span>
                  </div>
                  <span className="text-[#596065] text-sm" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>45 Cards</span>
                </div>
                <span className="material-symbols-outlined text-[#abb3b9]">star</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Advanced Latin Verbs</h3>
                <p className="text-[#596065] text-base">Deep dive into archaic and classical forms.</p>
              </div>
              <div className="pt-4 border-t border-[#e9eef3] flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-[#596065]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Status</span>
                <span className="font-bold text-[#855500]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>22% Mastered</span>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white rounded-[1.5rem] p-6 editorial-shadow border border-[#abb3b9]/15 flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#006e36]/10 text-[#006e36] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">biotech</span>
                  </div>
                  <span className="text-[#596065] text-sm" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>210 Cards</span>
                </div>
                <span className="material-symbols-outlined text-[#abb3b9]">star</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Molecular Biology</h3>
                <p className="text-[#596065] text-base">Cellular structures and chemical pathways.</p>
              </div>
              <div className="pt-4 border-t border-[#e9eef3] flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-[#596065]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Status</span>
                <span className="font-bold text-[#596065]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Not Started</span>
              </div>
            </div>

            {/* Card 5 */}
            <div className="bg-white rounded-[1.5rem] p-6 editorial-shadow border border-[#abb3b9]/15 flex flex-col gap-5">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#2c3338]/5 text-[#2c3338] rounded-xl flex items-center justify-center">
                    <span className="material-symbols-outlined">palette</span>
                  </div>
                  <span className="text-[#596065] text-sm" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>32 Cards</span>
                </div>
                <span className="material-symbols-outlined text-[#006e36]" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
              </div>
              <div className="space-y-2">
                <h3 className="font-bold text-xl text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Color Theory Basics</h3>
                <p className="text-[#596065] text-base">Harmony, contrast, and psychology.</p>
              </div>
              <div className="pt-4 border-t border-[#e9eef3] flex justify-between items-center">
                <span className="text-xs uppercase tracking-widest text-[#596065]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Status</span>
                <span className="font-bold text-[#006e36]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>100% Mastery</span>
              </div>
            </div>
          </section>
        </main>

        {/* Bottom Nav */}
        <nav className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-[#f7f9fc]/80 backdrop-blur-xl z-50 rounded-t-3xl border-t border-slate-200/15 shadow-[0_-10px_40px_rgba(44,51,56,0.04)]">
          <a className="flex flex-col items-center justify-center text-[#2c3338] px-4 py-2 hover:bg-slate-100 transition-colors rounded-2xl" href="/">
            <span className="material-symbols-outlined">home</span>
            <span className="text-[10px] font-medium uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Home</span>
          </a>
          <a className="flex flex-col items-center justify-center bg-[#0060ad] text-white rounded-2xl px-4 py-2" href="/library">
            <span className="material-symbols-outlined">library_books</span>
            <span className="text-[10px] font-medium uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Library</span>
          </a>
          <a className="flex flex-col items-center justify-center text-[#2c3338] px-4 py-2 hover:bg-slate-100 transition-colors rounded-2xl" href="#">
            <span className="material-symbols-outlined">insights</span>
            <span className="text-[10px] font-medium uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Progress</span>
          </a>
          <a className="flex flex-col items-center justify-center text-[#2c3338] px-4 py-2 hover:bg-slate-100 transition-colors rounded-2xl" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="text-[10px] font-medium uppercase tracking-widest mt-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Settings</span>
          </a>
        </nav>
      </div>
    </>
  );
}
