import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Instagram, ChevronDown, ShieldCheck, Zap } from 'lucide-react';

interface HeroProps {
  onExploreClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreClick }) => {
  return (
    <section 
      id="hero-section" 
      className="relative min-h-[92vh] sm:min-h-screen flex flex-col items-center justify-between px-5 pt-8 pb-10 text-center overflow-hidden"
    >
      {/* Background ambient lighting effects */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-96 sm:h-96 bg-white/[0.04] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true"
      />
      <div 
        className="absolute inset-0 bg-tactical-grid opacity-30 pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Top subtle badge */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="pt-2 z-10"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/[0.03] text-xs font-mono uppercase tracking-widest text-zinc-400">
          <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
          <span>Futebol &bull; Performance &bull; Elite</span>
        </div>
      </motion.div>

      {/* Central Hero Block */}
      <div className="flex-1 flex flex-col items-center justify-center max-w-md mx-auto w-full my-6 z-10">
        {/* Logo Container with 3D Depth & Lighting */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-6 group"
        >
          {/* Subtle halo glow behind logo */}
          <div 
            className="absolute -inset-4 bg-gradient-to-b from-white/10 to-transparent rounded-full blur-xl opacity-60 group-hover:opacity-90 transition-opacity" 
            aria-hidden="true"
          />

          <div className="relative w-36 h-36 sm:w-44 sm:h-44 p-3 rounded-2xl bg-zinc-950/80 border border-white/15 shadow-2xl flex items-center justify-center backdrop-blur-md">
            {/* Corner metallic brackets */}
            <div className="absolute top-1.5 left-1.5 w-2.5 h-2.5 border-t border-l border-white/40" />
            <div className="absolute top-1.5 right-1.5 w-2.5 h-2.5 border-t border-r border-white/40" />
            <div className="absolute bottom-1.5 left-1.5 w-2.5 h-2.5 border-b border-l border-white/40" />
            <div className="absolute bottom-1.5 right-1.5 w-2.5 h-2.5 border-b border-r border-white/40" />

            <img
              id="hero-mz-logo"
              src="https://i.postimg.cc/HjGCK7Gb/file-00000000857c820e8d1e476647a22b9a.png"
              alt="MZ Store Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain filter drop-shadow-[0_4px_12px_rgba(255,255,255,0.2)] transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </motion.div>

        {/* Brand Name with Subtle 3D Depth & Heavy Modern Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="w-full"
        >
          <h1 
            id="hero-title"
            className="font-heading text-5xl sm:text-6xl font-black tracking-wider uppercase leading-none text-white text-3d-title"
          >
            MZ STORE
          </h1>

          {/* Slogan */}
          <p 
            id="hero-slogan"
            className="mt-3 font-body text-lg sm:text-xl text-zinc-300 font-medium tracking-wide"
          >
            Seu jogo começa nos pés.
          </p>

          <p className="mt-2 text-xs text-zinc-400 font-body uppercase tracking-widest max-w-xs mx-auto">
            Chuteiras de alto nível para quem joga sério
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full mt-8 flex flex-col gap-3.5"
        >
          {/* Main Button - WhatsApp */}
          <a
            id="btn-hero-whatsapp"
            href="https://w.app/axicvo"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full min-h-[56px] py-4 px-6 rounded-xl bg-white text-black font-heading font-extrabold text-xl tracking-wider uppercase flex items-center justify-center gap-3 transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.02] active:scale-[0.98] glow-silver-button"
          >
            <MessageCircle className="w-6 h-6 stroke-[2.2] transition-transform group-hover:rotate-6" />
            <span>FALAR NO WHATSAPP</span>
          </a>

          {/* Secondary Button - Instagram */}
          <a
            id="btn-hero-instagram"
            href="https://www.instagram.com/mzstore150?stkn=MWtnZWVkN2IzN3hhNQ=="
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full min-h-[52px] py-3.5 px-6 rounded-xl bg-zinc-900/90 hover:bg-zinc-800 text-white font-heading font-bold text-lg tracking-wider uppercase flex items-center justify-center gap-3 border border-white/15 transition-all duration-300 hover:border-white/40 active:scale-[0.98]"
          >
            <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>CONHEÇA A MZ STORE</span>
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator for mobile natural flow */}
      <motion.button
        id="btn-scroll-explore"
        onClick={onExploreClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="z-10 flex flex-col items-center gap-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer group pt-2 pb-1"
        aria-label="Rolar para ver mais"
      >
        <span className="text-[11px] font-mono tracking-widest uppercase text-zinc-400 group-hover:text-zinc-200">
          Explorar
        </span>
        <ChevronDown className="w-4 h-4 animate-bounce text-zinc-400 group-hover:text-white" />
      </motion.button>
    </section>
  );
};
