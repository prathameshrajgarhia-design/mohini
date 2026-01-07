
import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="py-16 bg-stone-950 text-stone-400">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-white flex items-center justify-center">
                <span className="text-stone-950 font-black text-lg italic">M</span>
              </div>
              <span className="text-white font-black tracking-widest uppercase text-sm">Mohini Tradelink</span>
            </div>
            <p className="max-w-xs text-xs leading-relaxed font-light mb-8">
              Technical textile manufacturing for agricultural and industrial infrastructure. ISO-aligned processes for global batch consistency.
            </p>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Solutions</h4>
            <ul className="space-y-3 text-[11px] font-medium tracking-wide">
              <li><button onClick={() => onNavigate('applications')} className="hover:text-emerald-500 transition-colors">Agricultural Shade Nets</button></li>
              <li><button onClick={() => onNavigate('applications')} className="hover:text-emerald-500 transition-colors">Construction Nets</button></li>
              <li><button onClick={() => onNavigate('applications')} className="hover:text-emerald-500 transition-colors">Flooring Nets</button></li>
              <li><button onClick={() => onNavigate('applications')} className="hover:text-emerald-500 transition-colors">Tenting Nets</button></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-6">Contact</h4>
            <ul className="space-y-3 text-[11px] font-medium tracking-wide">
              <li className="text-stone-200">Contact Desk: +91 9377006881/ +91 9429117406</li>
              <li className="text-stone-200">Email: mohinitradelink@yahoo.com</li>
              <li className="text-stone-500 mt-4 leading-relaxed">Phase-1, GIDC, Vapi<br />Gujarat, India</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-stone-900 flex flex-col md:flex-row justify-between items-center text-[9px] font-bold tracking-[0.4em] uppercase text-stone-600">
          <div>© {new Date().getFullYear()} MOHINI TRADELINK MFG.</div>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Compliance</a>
            <a href="#" className="hover:text-white">Logistics</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
