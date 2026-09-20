import React from 'react';
import { Instagram, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/mzstore150?stkn=MWtnZWVkN2IzN3hhNQ==";
  const whatsappUrl = "https://w.app/ti9mc8";

  return (
    <footer 
      id="footer-section" 
      className="relative py-12 px-5 border-t border-white/10 bg-black text-center"
    >
      <div className="max-w-md mx-auto flex flex-col items-center">
        {/* Miniature Brand Logo */}
        <div className="w-12 h-12 rounded-xl p-1.5 bg-zinc-950 border border-white/10 mb-3 flex items-center justify-center">
          <img
            src="https://i.postimg.cc/HjGCK7Gb/file-00000000857c820e8d1e476647a22b9a.png"
            alt="MZ Store"
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Brand Name */}
        <h3 id="footer-brand" className="font-heading text-2xl font-black uppercase tracking-widest text-white">
          MZ STORE
        </h3>

        {/* Links: Instagram & WhatsApp strictly as requested */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <a
            id="footer-link-instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-heading text-base font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
          >
            <Instagram className="w-4 h-4 text-zinc-400" />
            <span>Instagram</span>
          </a>

          <span className="text-zinc-600">&bull;</span>

          <a
            id="footer-link-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 font-heading text-base font-bold uppercase tracking-wider text-zinc-300 hover:text-white transition-colors"
          >
            <MessageCircle className="w-4 h-4 text-zinc-400" />
            <span>WhatsApp</span>
          </a>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 w-full text-center">
          <p className="text-[11px] font-mono text-zinc-400 tracking-wider">
            &copy; {new Date().getFullYear()} MZ STORE. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};
