export default function DashboardPage() {
  return (
    <>
      {/* ===== DESKTOP LAYOUT (md+) ===== */}
      <div className="hidden md:block">
        {/* Main Content */}
        <main className="ml-64 pt-16 min-h-screen">
          <div className="max-w-7xl mx-auto px-10 py-12">
            {/* Welcome Header */}
            <header className="mb-12">
              <h1 className="text-4xl font-extrabold text-[#2c3338] leading-tight mb-2 tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>
                Good morning, Alex.
              </h1>
              <p className="text-xl text-[#596065] font-light max-w-2xl">
                You've mastered <span className="text-[#0060ad] font-bold">12 new words</span> this week. Keep the flow going.
              </p>
            </header>

            {/* Stats Bento Grid */}
            <section className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-16">
              {/* Streak */}
              <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm hover:shadow-md transition-all border border-[#abb3b9]/10">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-orange-100 rounded-2xl flex items-center justify-center">
                    <span className="material-symbols-outlined text-orange-600" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                  </div>
                  <span className="text-xs font-bold text-orange-600 bg-orange-50 px-2 py-1 rounded-lg">Top 5%</span>
                </div>
                <p className="text-[#596065] text-sm font-medium mb-1">Current Streak</p>
                <div className="flex items-baseline gap-2">
                  <h2 className="text-4xl font-black text-[#2c3338] tracking-tighter" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>14</h2>
                  <span className="text-lg font-bold text-[#596065]">Days</span>
                </div>
              </div>

              {/* Daily Goal */}
              <div className="col-span-1 lg:col-span-2 bg-white p-6 rounded-3xl shadow-sm border border-[#abb3b9]/10">
                <div className="flex justify-between items-center mb-6">
                  <p className="text-[#596065] text-sm font-medium">Daily Goal</p>
                  <span className="text-sm font-black text-[#006e36]">75%</span>
                </div>
                <h2 className="text-4xl font-black text-[#2c3338] tracking-tighter mb-4" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>45<span className="text-lg text-[#596065] font-medium">/60m</span></h2>
                <div className="w-full h-3 bg-[#dce3e9] rounded-full overflow-hidden">
                  <div className="h-full rounded-full" style={{ width: "75%", background: "linear-gradient(to right, #006e36, #83fba5)" }}></div>
                </div>
              </div>

              {/* Review Alert */}
              <div className="col-span-1 lg:col-span-2 bg-[#0060ad] text-[#f8f8ff] p-6 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between hover:scale-[1.02] transition-transform">
                <div className="relative z-10">
                  <p className="text-[#f8f8ff]/70 text-sm font-medium mb-1">Review Cards</p>
                  <div className="flex items-center gap-3">
                    <h2 className="text-4xl font-black tracking-tighter" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>12</h2>
                    <span className="px-2 py-0.5 bg-white/20 rounded text-[10px] font-bold uppercase tracking-widest">Due Now</span>
                  </div>
                </div>
                <a href="/study" className="relative z-10 w-fit mt-4 px-4 py-2 bg-white text-[#0060ad] rounded-xl text-sm font-bold hover:bg-[#f8f8ff] transition-colors block">Start Review</a>
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
              </div>

              {/* Vocab */}
              <div className="col-span-1 lg:col-span-2 bg-[#f0f4f8] p-6 rounded-3xl border border-[#abb3b9]/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#0060ad]">translate</span>
                  </div>
                  <div>
                    <p className="text-[#596065] text-xs font-bold uppercase tracking-wider">Vocab</p>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>24 Words</h3>
                  </div>
                </div>
              </div>

              {/* Listening */}
              <div className="col-span-1 lg:col-span-2 bg-[#f0f4f8] p-6 rounded-3xl border border-[#abb3b9]/10">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[#006e36]">headphones</span>
                  </div>
                  <div>
                    <p className="text-[#596065] text-xs font-bold uppercase tracking-wider">Listening</p>
                    <h3 className="text-xl font-bold" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>15m Focus</h3>
                  </div>
                </div>
              </div>

              {/* Achievement Placeholder */}
              <div className="col-span-1 lg:col-span-2 bg-[#f0f4f8] p-6 rounded-3xl border border-dashed border-[#abb3b9] flex flex-col items-center justify-center text-center opacity-70">
                <span className="material-symbols-outlined text-[#747c81] mb-2">military_tech</span>
                <p className="text-xs font-medium text-[#747c81]">Next Milestone at 20 Days</p>
              </div>
            </section>

            {/* CTA */}
            <div className="mb-12 flex justify-between items-center">
              <h2 className="text-2xl font-extrabold tracking-tight" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Expand Your Knowledge</h2>
              <button className="px-6 py-3 bg-gradient-to-r from-[#0060ad] to-[#68abff] text-[#f8f8ff] font-bold rounded-full shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all flex items-center gap-2">
                <span className="material-symbols-outlined">add_circle</span>
                <span style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Create New Study Deck</span>
              </button>
            </div>

            {/* Recommended */}
            <section>
              <div className="flex justify-between items-baseline mb-8">
                <h3 className="text-xl font-bold text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Recommended for you</h3>
                <a className="text-[#0060ad] font-bold text-sm hover:underline decoration-2 underline-offset-4" href="#">View all</a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Card 1 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm group border border-[#abb3b9]/10 hover:border-[#0060ad]/20 transition-all flex flex-col">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-[#0060ad]">
                        <span className="material-symbols-outlined text-3xl">work</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-[#e9eef3] text-[10px] font-bold text-[#596065] rounded-md">B2</span>
                        <span className="px-2 py-1 bg-[#e9eef3] text-[10px] font-bold text-[#596065] rounded-md">Business</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#0060ad] transition-colors" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Business Idioms</h4>
                    <p className="text-[#596065] text-sm leading-relaxed mb-6">Master professional metaphors used in global boardrooms and corporate meetings.</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[#596065]">
                        <span className="material-symbols-outlined text-sm">style</span>
                        <span className="text-xs font-medium">120 Cards</span>
                      </div>
                      <a href="/study" className="w-10 h-10 bg-[#68abff] text-[#002b52] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 2 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm group border border-[#abb3b9]/10 hover:border-[#0060ad]/20 transition-all flex flex-col">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 bg-green-50 rounded-2xl flex items-center justify-center text-[#006e36]">
                        <span className="material-symbols-outlined text-3xl">bolt</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-[#e9eef3] text-[10px] font-bold text-[#596065] rounded-md">C1</span>
                        <span className="px-2 py-1 bg-[#e9eef3] text-[10px] font-bold text-[#596065] rounded-md">Grammar</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#006e36] transition-colors" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Advanced Phrasal Verbs</h4>
                    <p className="text-[#596065] text-sm leading-relaxed mb-6">Complex combinations that give you the nuance of a native speaker in academic contexts.</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[#596065]">
                        <span className="material-symbols-outlined text-sm">style</span>
                        <span className="text-xs font-medium">85 Cards</span>
                      </div>
                      <a href="/study" className="w-10 h-10 bg-[#83fba5] text-[#005f2e] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Card 3 */}
                <div className="bg-white rounded-3xl overflow-hidden shadow-sm group border border-[#abb3b9]/10 hover:border-[#0060ad]/20 transition-all flex flex-col">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-[#855500]">
                        <span className="material-symbols-outlined text-3xl">school</span>
                      </div>
                      <div className="flex gap-1">
                        <span className="px-2 py-1 bg-[#e9eef3] text-[10px] font-bold text-[#596065] rounded-md">B2</span>
                        <span className="px-2 py-1 bg-[#e9eef3] text-[10px] font-bold text-[#596065] rounded-md">IELTS</span>
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-2 group-hover:text-[#855500] transition-colors" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Academic Vocabulary</h4>
                    <p className="text-[#596065] text-sm leading-relaxed mb-6">Essential terminology for writing essays, reports, and delivering formal presentations.</p>
                    <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-50">
                      <div className="flex items-center gap-2 text-[#596065]">
                        <span className="material-symbols-outlined text-sm">style</span>
                        <span className="text-xs font-medium">210 Cards</span>
                      </div>
                      <a href="/study" className="w-10 h-10 bg-[#feb246] text-[#563500] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>play_arrow</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </main>

        {/* Floating Chat Button */}
        <div className="fixed bottom-8 right-8 z-50">
          <button className="w-14 h-14 bg-[#2c3338] text-white rounded-full shadow-2xl flex items-center justify-center hover:scale-110 active:scale-95 transition-all">
            <span className="material-symbols-outlined">chat_bubble</span>
          </button>
        </div>
      </div>

      {/* ===== MOBILE LAYOUT (<md) ===== */}
      <div className="block md:hidden min-h-screen pb-32">
        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 pt-24">
          {/* Welcome */}
          <section className="mb-8">
            <h2 className="text-3xl font-extrabold tracking-tight text-[#2c3338] mb-1" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Good morning, Alex.</h2>
            <p className="text-[#596065] text-sm">You've mastered 12 new words this week. Keep the flow going.</p>
          </section>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-10">
            <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col items-center text-center justify-center">
              <p className="text-[10px] uppercase tracking-widest text-[#006e36] font-bold mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Streak</p>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-[#2c3338]">14</span>
                <span className="material-symbols-outlined text-[#006e36] text-sm">local_fire_department</span>
              </div>
              <p className="text-[10px] text-[#596065] mt-1">Days</p>
            </div>
            <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col items-center text-center justify-center">
              <p className="text-[10px] uppercase tracking-widest text-[#0060ad] font-bold mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Goal</p>
              <div className="flex items-center gap-1">
                <span className="text-2xl font-bold text-[#2c3338]">75%</span>
                <span className="material-symbols-outlined text-[#0060ad] text-sm">donut_large</span>
              </div>
              <p className="text-[10px] text-[#596065] mt-1">45 / 60m</p>
            </div>
            <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col items-center text-center justify-center">
              <p className="text-[10px] uppercase tracking-widest text-[#596065] font-bold mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Vocab</p>
              <span className="text-2xl font-bold text-[#0060ad]">24</span>
              <p className="text-[10px] text-[#596065] mt-1">Words</p>
            </div>
            <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col items-center text-center justify-center">
              <p className="text-[10px] uppercase tracking-widest text-[#596065] font-bold mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Listening</p>
              <span className="text-2xl font-bold text-[#006e36]">15m</span>
              <p className="text-[10px] text-[#596065] mt-1">Focus</p>
            </div>
            <div className="bg-[#f0f4f8] p-4 rounded-xl flex flex-col items-center text-center justify-center col-span-2">
              <p className="text-[10px] uppercase tracking-widest text-[#596065] font-bold mb-1" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Review</p>
              <span className="text-2xl font-bold text-[#855500]">12</span>
              <p className="text-[10px] text-[#596065] mt-1">Due now</p>
            </div>
          </div>

          {/* Deck Section */}
          <section>
            <a href="/study" className="w-full mb-8 bg-[#0060ad] text-[#f8f8ff] flex items-center justify-center gap-2 py-4 rounded-2xl shadow-sm hover:opacity-90 transition-opacity block text-center">
              <span className="material-symbols-outlined">add_circle</span>
              <span className="font-bold tracking-tight text-base" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>Create New Study Deck</span>
            </a>

            <div className="flex justify-between items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-[#2c3338]" style={{ fontFamily: "var(--font-plus-jakarta-sans), sans-serif" }}>Recommended for you</h3>
                <p className="text-xs text-[#596065]">Personalized study list</p>
              </div>
              <button className="text-[#0060ad] text-sm font-bold hover:underline">View all</button>
            </div>

            <div className="flex flex-col gap-3">
              {[
                { icon: "business_center", color: "#0060ad", bg: "#68abff", title: "Business Idioms", desc: "Master professional workplace communication.", cards: "42 Cards" },
                { icon: "psychology", color: "#006e36", bg: "#83fba5", title: "Advanced Phrasal Verbs", desc: "Daily conversational verbs for fluency.", cards: "68 Cards" },
                { icon: "translate", color: "#855500", bg: "#feb246", title: "Academic Vocabulary", desc: "High-impact terms for IELTS/TOEFL.", cards: "120 Cards" },
              ].map((deck) => (
                <div key={deck.title} className="flex items-center gap-4 bg-white p-4 rounded-2xl shadow-sm border border-[#e9eef3]">
                  <div className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center" style={{ background: deck.bg + "33", color: deck.color }}>
                    <span className="material-symbols-outlined">{deck.icon}</span>
                  </div>
                  <div className="flex-grow min-w-0">
                    <h4 className="text-base font-bold text-[#2c3338] truncate">{deck.title}</h4>
                    <p className="text-[#596065] text-xs truncate">{deck.desc}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="hidden sm:inline text-[10px] bg-[#e3e9ee] px-2 py-1 rounded-full text-[#596065] whitespace-nowrap" style={{ fontFamily: "var(--font-lexend), sans-serif" }}>{deck.cards}</span>
                    <a href="/study" className="w-10 h-10 rounded-full flex items-center justify-center shadow-md" style={{ background: deck.color }}>
                      <span className="material-symbols-outlined text-white">play_arrow</span>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </main>

      </div>
    </>
  );
}
