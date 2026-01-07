
import React from 'react';
import MyIcon from "../assets/image.png";


interface HeaderProps {
  onNavigate: (page: string) => void;
  currentPage: string;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, currentPage }) => {
  const navItems = [
    { label: 'About Us', id: 'about' },
    { label: 'Applications', id: 'applications' },
    { label: 'Products', id: 'products' },
    { label: 'Contact Us', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-[1000] bg-white/90 backdrop-blur-md border-b border-stone-100 h-16 transition-all">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        <div 
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => onNavigate('home')}
        >
          <div className="relative">
<div className="w-10 h-10 flex-shrink-0">
  <img
    src={MyIcon}
    alt="Icon"
    className="w-full h-full object-contain block"
  />
</div>

            <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-emerald-600 border-2 border-white"></div>
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-black tracking-tighter text-stone-900 leading-none">MOHINI</span>
            <span className="text-[9px] font-bold tracking-[0.2em] text-emerald-800 leading-none mt-0.5 uppercase">Tradelink</span>
          </div>
        </div>
        
        <nav className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <button 
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-colors relative py-1 hover:text-stone-900 ${
                currentPage === item.id ? 'text-emerald-900' : 'text-stone-400'
              }`}
            >
              {item.label}
              {currentPage === item.id && (
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-emerald-600"></span>
              )}
            </button>
          ))}
          <button 
            onClick={() => onNavigate('contact')}
            className="bg-stone-900 text-white px-5 py-2 hover:bg-emerald-900 transition-all text-[9px] font-bold tracking-widest border border-stone-800"
          >
            INQUIRY
          </button>
        </nav>
      </div>
    </header>
  );
};
