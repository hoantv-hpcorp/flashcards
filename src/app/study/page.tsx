export default function StudyPage() {
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
              <a className="flex items-center gap-3 text-slate-500 px-4 py-3 hover:bg-blue-50/50 hover:text-blue-600 transition-all rounded-xl" href="/library">
                <span className="material-symbols-outlined">library_books</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">Library</span>
              </a>
              <a className="flex items-center gap-3 bg-white text-blue-700 rounded-xl px-4 py-3 shadow-sm font-bold transition-all duration-300 translate-x-1" href="/study">
                <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>style</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }} className="font-medium">Flashcards</span>
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

        {/* Main Flashcard Area */}
        <main className="ml-64 pt-16 min-h-screen">
          <div className="flex flex-col items-center px-12 py-10">
            {/* Header */}
            <div className="w-full max-w-4xl mb-12">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <span className="text-[#0060ad] font-bold tracking-widest text-xs uppercase block mb-1">Advanced Spanish</span>
                  <h1 className="text-3xl font-extrabold text-[#2c3338] tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Unit 4: Academic Terminology</h1>
                </div>
                <div className="text-right flex items-center gap-4">
                  <span className="text-[#596065] font-medium text-sm">12 / 30 cards reviewed</span>
                  <a href="/" className="text-sm font-medium tracking-tight text-[#0060ad] border border-[#0060ad]/20 px-4 py-2 rounded-lg hover:bg-slate-50 transition-all" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Exit Session</a>
                </div>
              </div>
              {/* Progress Bar */}
              <div className="h-2 w-full bg-[#dce3e9] rounded-full overflow-hidden">
                <div className="h-full bg-[#006e36] w-[40%] rounded-full shadow-[0_0_10px_rgba(0,110,54,0.3)]"></div>
              </div>
            </div>

            {/* Flashcard */}
            <div className="flex flex-col items-center gap-10 w-full max-w-3xl">
              <div className="w-full aspect-video bg-white rounded-xl flashcard-shadow flex flex-col items-center justify-center p-12 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#0060ad]/5 rounded-bl-full -mr-8 -mt-8"></div>
                <div className="text-center">
                  <p className="text-[#596065]/60 text-xs tracking-widest uppercase mb-4" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Spanish Term</p>
                  <h2 className="text-5xl font-extrabold text-[#0060ad] tracking-tight mb-12" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Biblioteca</h2>
                  <button className="primary-gradient text-[#f8f8ff] px-10 py-4 rounded-full font-bold text-lg shadow-lg hover:scale-105 active:scale-95 transition-all duration-200 flex items-center gap-3">
                    <span className="material-symbols-outlined">rotate_right</span>
                    Flip Card
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#0060ad]/20 to-transparent"></div>
              </div>

              {/* Feedback Buttons */}
              <div className="flex gap-6 w-full justify-center">
                <button className="flex-1 max-w-[240px] flex flex-col items-center gap-3 p-6 rounded-xl bg-[#fa746f]/10 border border-[#fa746f]/20 hover:bg-[#fa746f]/20 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#fa746f]/20 flex items-center justify-center text-[#a83836] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined">close</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-[#a83836]">Need practice</span>
                    <span className="text-[10px] text-[#a83836]/60 font-bold uppercase tracking-widest">Key 1</span>
                  </div>
                </button>
                <button className="flex-1 max-w-[240px] flex flex-col items-center gap-3 p-6 rounded-xl bg-[#83fba5]/10 border border-[#83fba5]/20 hover:bg-[#83fba5]/20 transition-all group">
                  <div className="w-12 h-12 rounded-full bg-[#83fba5]/20 flex items-center justify-center text-[#006e36] group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>check</span>
                  </div>
                  <div className="text-center">
                    <span className="block font-bold text-[#006e36]">I knew it</span>
                    <span className="text-[10px] text-[#006e36]/60 font-bold uppercase tracking-widest">Key 2</span>
                  </div>
                </button>
              </div>

              {/* Hotkeys */}
              <div className="mt-8 flex flex-col items-center gap-8">
                <div className="flex gap-8 text-[#596065]/40 text-xs font-medium uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e3e9ee] px-2 py-1 rounded text-[#596065]/70 border border-[#abb3b9]/20">SPACE</span>
                    <span>to flip</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="bg-[#e3e9ee] px-2 py-1 rounded text-[#596065]/70 border border-[#abb3b9]/20">1-2</span>
                    <span>for feedback</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 text-[10px] font-bold text-slate-400 tracking-[0.4em] uppercase">
                  <span>The Mindful Scholar</span>
                  <span className="w-1 h-1 rounded-full bg-slate-300"></span>
                  <span>Deep Focus Mode</span>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Background decoration */}
        <div className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-40">
          <div className="absolute top-[10%] left-[20%] w-[400px] h-[400px] bg-[#0060ad]/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[10%] right-[10%] w-[300px] h-[300px] bg-[#006e36]/5 rounded-full blur-[80px]"></div>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (<md) ===== */}
      <div className="block md:hidden min-h-screen flex flex-col">
        {/* Session Header */}
        <section className="w-full bg-white border-b border-[#dce3e9] pt-8 pb-10 px-6">
          <div className="max-w-xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
              <a href="/" className="flex items-center gap-1.5 text-[#0060ad] font-medium hover:opacity-80 transition-opacity">
                <span className="material-symbols-outlined text-xl">arrow_back</span>
                <span className="text-xs uppercase tracking-wider font-bold" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Exit</span>
              </a>
              <div className="text-center">
                <h1 className="text-[#2c3338] font-extrabold text-sm tracking-tight uppercase" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Advanced Spanish</h1>
                <p className="text-[#596065] text-[10px] font-medium opacity-70" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>UNIT 4: ACADEMIC TERMINOLOGY</p>
              </div>
              <div className="w-12"></div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col">
                <span className="text-[10px] text-[#596065] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Daily Goal Progress</span>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-extrabold text-[#006e36]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>75%</span>
                  <div className="flex-1 h-2 bg-[#dce3e9] rounded-full overflow-hidden self-center">
                    <div className="h-full progress-gradient rounded-full" style={{ width: "75%" }}></div>
                  </div>
                </div>
              </div>
              <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col">
                <span className="text-[10px] text-[#596065] uppercase tracking-widest mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Session Cards</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>12</span>
                  <span className="text-lg font-bold text-[#abb3b9]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>/ 30</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Flashcard Area */}
        <main className="flex-1 flex flex-col items-center justify-start pt-12 px-6 pb-20 max-w-xl mx-auto w-full">
          {/* Card */}
          <div className="relative w-full aspect-[4/3] flex flex-col items-center justify-center p-8 bg-white rounded-xl flashcard-shadow group mb-8">
            <div className="text-center space-y-2">
              <span className="text-[10px] text-[#747c81] tracking-[0.2em] uppercase" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Word</span>
              <h2 className="text-[#2c3338] text-3xl font-extrabold leading-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
                Biblioteca
              </h2>
            </div>
            <div className="absolute bottom-0 left-1/4 right-1/4 h-1 progress-gradient rounded-t-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>

          {/* Flip & Feedback */}
          <div className="w-full flex flex-col items-center gap-6">
            <button className="primary-gradient text-[#f8f8ff] w-full py-4 px-8 rounded-xl font-bold text-lg shadow-lg hover:shadow-xl transition-all active:scale-[0.98]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
              Flip Card
            </button>
            <div className="flex gap-3 w-full">
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#fa746f]/10 text-[#a83836] py-3.5 rounded-xl font-bold text-xs hover:bg-[#fa746f]/20 transition-colors border border-[#a83836]/10" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
                <span className="material-symbols-outlined text-lg">refresh</span>
                Need practice
              </button>
              <button className="flex-1 flex items-center justify-center gap-2 bg-[#83fba5]/20 text-[#006e36] py-3.5 rounded-xl font-bold text-xs hover:bg-[#83fba5]/30 transition-colors border border-[#006e36]/10" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>
                <span className="material-symbols-outlined text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                I knew it
              </button>
            </div>
          </div>

          {/* Keyboard hints */}
          <div className="mt-auto pt-12 flex gap-6">
            <div className="flex items-center gap-1.5 text-[#abb3b9]">
              <span className="px-1 py-0.5 rounded border border-[#abb3b9] text-[9px] font-bold">SPACE</span>
              <span className="text-[10px] uppercase" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>to flip</span>
            </div>
            <div className="flex items-center gap-1.5 text-[#abb3b9]">
              <span className="px-1 py-0.5 rounded border border-[#abb3b9] text-[9px] font-bold">1-2</span>
              <span className="text-[10px] uppercase" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>for feedback</span>
            </div>
          </div>
        </main>

        <footer className="pb-8 text-center">
          <p className="text-[9px] text-[#abb3b9] uppercase tracking-[0.3em]" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>The Mindful Scholar • Deep Focus Mode</p>
        </footer>
      </div>
    </>
  );
}
