import React, { useState, useEffect } from 'react';
import { MessageCircle, Instagram, ChevronUp } from 'lucide-react';

export const FloatingActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div 
      id="floating-navigation"
      className="fixed bottom-5 right-5 z-50 flex flex-col items-end gap-2.5 pointer-events-auto"
    >
      {/* Scroll to Top */}
      {showScrollTop && (
        <button
          id="btn-scroll-top"
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
          className="w-10 h-10 rounded-full bg-zinc-900/90 text-zinc-300 hover:text-white border border-white/20 flex items-center justify-center backdrop-blur-md shadow-lg transition-all hover:scale-110 active:scale-95 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating WhatsApp Quick Action Button for Mobile */}
      <a
        id="btn-floating-whatsapp"
        href="https://w.app/axicvo"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp com a MZ Store"
        className="group relative flex items-center gap-2 pl-3.5 pr-4 py-3 rounded-full bg-white text-black font-heading font-black text-sm tracking-wider uppercase shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 glow-silver-button"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-40"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-black"></span>
        </span>
        <MessageCircle className="w-5 h-5 stroke-[2.4]" />
        <span className="hidden xs:inline sm:inline">WhatsApp</span>
      </a>
    </div>
  );
};
