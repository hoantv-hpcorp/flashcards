import { Show, SignInButton, UserButton } from "@clerk/nextjs";
import { currentUser } from "@clerk/nextjs/server";

export default async function TopNav() {
  const user = await currentUser();

  return (
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
            {user && (
              <div className="text-right hidden xl:block">
                <p className="text-sm font-bold text-[#2c3338] leading-none">{user.fullName}</p>
                <p className="text-[11px] text-slate-500">{user.primaryEmailAddress?.emailAddress}</p>
              </div>
            )}
            <Show when="signed-out">
              <SignInButton />
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>
          </div>

        </div>
        <div className="bg-slate-100/50 h-[1px] w-full absolute bottom-0 left-0"></div>
      </div>
    </header>
  );
}
