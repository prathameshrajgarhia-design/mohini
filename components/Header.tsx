import React from "react";
import MyIcon from "../assets/image.png";

type HeaderProps = {
  onNavigate: (section: string) => void;
  activeSection: string;
};

const Header: React.FC<HeaderProps> = ({ onNavigate, activeSection }) => {
  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LEFT — LOGO + BRAND (UNCHANGED SIZE) */}
        <div
          className="flex items-center gap-4 cursor-pointer select-none"
          onClick={() => onNavigate("home")}
        >
          <img
            src={MyIcon}
            alt="Mohini Tradelink Logo"
            className="h-16 w-auto object-contain block"
          />

          <div className="flex flex-col leading-tight">
            <span className="text-stone-900 font-semibold tracking-wide text-[15px]">
              Mohini Tradelink
            </span>
            <span className="text-stone-500 text-[10px] tracking-[0.22em] uppercase">
              Manufacturing
            </span>
          </div>
        </div>

        {/* CENTER — NAVIGATION (RESTORED FEEL) */}
        <nav className="hidden md:flex items-center gap-10 mt-[5px] text-[15px] tracking-[0.18em] uppercase font-medium text-stone-600">
          {[
            { id: "home", label: "Home" },
            { id: "about", label: "About Us" },
            { id: "applications", label: "Applications" },
            { id: "products", label: "Products" },
            { id: "contact", label: "Contact Us" },
          ].map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`relative pb-2 transition-colors ${
                activeSection === item.id
                  ? "text-stone-900"
                  : "hover:text-stone-900"
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-700" />
              )}
            </button>
          ))}
        </nav>

        {/* RIGHT — INQUIRY (BACK TO ORIGINAL POSITIONING) */}
        <button
          onClick={() => onNavigate("contact")}
          className="px-6 py-2.5 bg-stone-900 text-white text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-stone-800 transition"
        >
          Inquiry
        </button>
      </div>
    </header>
  );
};

export default Header;
