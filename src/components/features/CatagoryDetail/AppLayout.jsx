import Footer from "./Footer";
import MobileBottomNav from "./MobileBottomNav";
import SideNavBar from "./SideNabBar";
import TopNavBar from "./TopNavBar";

export default function AppLayout({
  children,
  footer,
  mobileNav,
  sidebar,
  topNav,
}) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <TopNavBar {...topNav} />
      <div className="flex flex-1 pt-24">
        <SideNavBar {...sidebar} />
        <main className="flex-1 lg:ml-64">
          <div className="w-full pb-20 md:pb-20">{children}</div>
        </main>
      </div>
      <Footer {...footer} />
      <MobileBottomNav items={mobileNav} />
    </div>
  );
}
