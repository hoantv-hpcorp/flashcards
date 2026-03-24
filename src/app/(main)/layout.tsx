import Sidebar from "@/components/navigation/Sidebar";
import TopNav from "@/components/navigation/TopNav";
import MobileBottomNav from "@/components/navigation/MobileBottomNav";
import MobileHeader from "@/components/navigation/MobileHeader";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="hidden md:block">
        <Sidebar />
        <TopNav />
      </div>

      {children}

      <div className="block md:hidden">
        <MobileHeader />
        <MobileBottomNav />
      </div>
    </>
  );
}
