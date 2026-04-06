import ModuleDetailFooter from "../moduleDetail/ModuleDetailFooter";
import ModuleDetailHeader from "../moduleDetail/ModuleDetailHeader";
import ModuleDetailSidebar from "../moduleDetail/ModuleDetailSidebar";
import MobileSectionNav from "../landing/MobileSectionNav";
import { learningDetailChrome } from "./learningDetailChrome";

export default function LearningDetailLayout({ children, streakLabel }) {
  return (
    <div
      className="min-h-screen bg-surface text-on-surface"
      style={{ backgroundColor: "#060e20", color: "#dee5ff" }}
    >
      <ModuleDetailHeader
        brand={learningDetailChrome.brand}
        links={learningDetailChrome.headerLinks}
        profileImage={learningDetailChrome.profileImage}
        streakLabel={streakLabel}
      />

      <div className="flex pt-20">
        <ModuleDetailSidebar sidebar={learningDetailChrome.sidebar} />

        <main className="w-full flex-1 p-6 pb-32 lg:ml-64 md:p-12 md:pb-12">
          {children}
        </main>
      </div>

      <ModuleDetailFooter
        brand={learningDetailChrome.brand}
        footer={learningDetailChrome.footer}
      />
      <MobileSectionNav items={learningDetailChrome.mobileNav} />
    </div>
  );
}
