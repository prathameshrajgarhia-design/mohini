import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import MyIcon from "../assets/image.png";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="h-20 max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* LOGO */}
        <div
          className="flex items-center gap-4 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <img
            src={MyIcon}
            alt="Mohini Tradelink Logo"
            className="h-16 w-auto object-contain"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-stone-900 font-semibold text-[15px]">
              Mohini Tradelink
            </span>
            <span className="text-stone-500 text-[10px] tracking-[0.22em] uppercase">
              Manufacturing
            </span>
          </div>
        </div>

        {/* NAV */}
        <nav className="hidden md:flex gap-10 text-[15px] tracking-[0.18em] uppercase font-medium">
          {[
            { to: "/", label: "Home" },
            { to: "/about", label: "About Us" },
            { to: "/applications", label: "Applications" },
            { to: "/products", label: "Products" },
            { to: "/contact", label: "Contact Us" },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end
              className={({ isActive }) =>
                `relative pb-2 transition-colors ${
                  isActive ? "text-stone-900" : "text-stone-600 hover:text-stone-900"
                }`
              }
            >
              {item.label}
              <span className="absolute left-0 bottom-0 w-full h-[2px] bg-emerald-700 scale-x-0 group-hover:scale-x-100 transition" />
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <button
          onClick={() => navigate("/contact")}
          className="px-6 py-2.5 bg-stone-900 text-white text-[11px] tracking-[0.18em] uppercase font-semibold hover:bg-stone-800 transition"
        >
          Inquiry
        </button>
      </div>
    </header>
  );
};

export default Header;
