import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Zap, Shield, ArrowRight } from 'lucide-react';

export const CtaSection: React.FC = () => {
  const whatsappUrl = "https://w.app/ti9mc8";

  return (
    <section 
      id="cta-whatsapp-section" 
      className="relative py-24 px-5 text-center overflow-hidden border-t border-white/15 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Background High-Intensity Light Flare */}
      <div 
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-white/[0.05] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative Accent Lines */}
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="max-w-md mx-auto relative z-10 flex flex-col items-center">
        {/* Subtle Sports Icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="w-12 h-12 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center mb-6 shadow-xl backdrop-blur-md"
        >
          <Zap className="w-6 h-6 text-white animate-pulse" />
        </motion.div>

        {/* Big 3D Title */}
        <motion.h2
          id="title-cta-final"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white text-3d-title leading-tight"
        >
          PRONTO PARA ESCOLHER A SUA?
        </motion.h2>

        {/* Short Text */}
        <motion.p
          id="text-cta-final"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-4 font-body text-xl text-zinc-300 font-medium"
        >
          Fale com a MZ Store.
        </motion.p>

        {/* Large Touch-Friendly WhatsApp CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="w-full mt-8"
        >
          <a
            id="btn-cta-whatsapp-final"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full min-h-[64px] py-5 px-8 rounded-2xl bg-white text-black font-heading font-black text-2xl tracking-wider uppercase flex items-center justify-center gap-3.5 transition-all duration-300 hover:bg-zinc-100 hover:scale-[1.03] active:scale-[0.98] glow-silver-button shadow-2xl cursor-pointer"
          >
            <MessageCircle className="w-7 h-7 stroke-[2.5] transition-transform group-hover:rotate-12" />
            <span>CHAMAR NO WHATSAPP</span>
            <ArrowRight className="w-6 h-6 transition-transform group-hover:translate-x-1" />
          </a>

          <p className="mt-4 text-xs font-mono uppercase tracking-widest text-zinc-400">
            Atendimento direto &bull; Resposta rápida
          </p>
        </motion.div>
      </div>
    </section>
  );
};
