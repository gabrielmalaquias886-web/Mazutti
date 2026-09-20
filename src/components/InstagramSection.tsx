import React from 'react';
import { motion } from 'motion/react';
import { Instagram, ArrowUpRight, CheckCircle2, Flame } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const instagramUrl = "https://www.instagram.com/mzstore150?stkn=MWtnZWVkN2IzN3hhNQ==";

  return (
    <section 
      id="instagram-section" 
      className="relative py-20 px-5 max-w-xl mx-auto border-t border-white/10 text-center"
    >
      {/* Background ambient lighting */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 w-72 h-72 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3">
          <Instagram className="w-3.5 h-3.5 text-zinc-200" />
          <span>Comunidade & Conteúdo</span>
        </div>

        <h2 
          id="title-instagram"
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-white text-3d-title leading-none"
        >
          ACOMPANHE A MZ STORE
        </h2>

        <p 
          id="text-instagram"
          className="mt-3 font-body text-base text-zinc-300 max-w-sm mx-auto"
        >
          Veja novidades, produtos e conteúdos da MZ Store.
        </p>
      </motion.div>

      {/* Instagram Profile Card Preview */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="mt-8 p-6 rounded-2xl glass-card border border-white/15 relative overflow-hidden"
      >
        {/* Subtle decorative grid in card */}
        <div className="absolute inset-0 bg-tactical-grid opacity-15 pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 flex flex-col items-center">
          {/* Logo Profile Avatar */}
          <div className="relative w-20 h-20 rounded-2xl p-2 bg-black border border-white/20 shadow-xl mb-3 flex items-center justify-center">
            <img
              src="https://i.postimg.cc/HjGCK7Gb/file-00000000857c820e8d1e476647a22b9a.png"
              alt="MZ Store"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain"
            />
            <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-white text-black flex items-center justify-center">
              <CheckCircle2 className="w-3.5 h-3.5" />
            </div>
          </div>

          <h3 className="font-heading text-2xl font-bold tracking-wider uppercase text-white">
            @mzstore150
          </h3>

          <p className="text-xs text-zinc-400 font-mono mt-1">
            Loja Oficial MZ Store &bull; Chuteiras & Futebol
          </p>

          {/* Social Proof Stats */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-xs mt-5 py-3 border-y border-white/10 text-center">
            <div>
              <span className="block font-heading text-lg font-bold text-white">NOVIDADES</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Diárias</span>
            </div>
            <div className="border-x border-white/10">
              <span className="block font-heading text-lg font-bold text-white">FOTOS</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Reais</span>
            </div>
            <div>
              <span className="block font-heading text-lg font-bold text-white">DIRECT</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase">Ativo</span>
            </div>
          </div>

          {/* Instagram Button */}
          <a
            id="btn-seguir-instagram"
            href={instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-6 w-full min-h-[52px] py-3.5 px-6 rounded-xl bg-white hover:bg-zinc-200 text-black font-heading font-extrabold text-lg tracking-wider uppercase flex items-center justify-center gap-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] glow-silver-button"
          >
            <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
            <span>SEGUIR NO INSTAGRAM</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </motion.div>
    </section>
  );
};
