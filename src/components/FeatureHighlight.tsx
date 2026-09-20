import React from 'react';
import { motion } from 'motion/react';
import { Crosshair, Zap, ShieldCheck, Flame } from 'lucide-react';

export const FeatureHighlight: React.FC = () => {
  return (
    <section 
      id="destaque-section" 
      className="relative py-24 px-5 overflow-hidden border-t border-white/10 bg-gradient-to-b from-black via-zinc-950 to-black"
    >
      {/* Background Graphic Elements: Tactical Pitch Grid & Abstract Shapes */}
      <div 
        className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 bg-white/[0.03] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Decorative Football Geometry: Center Circle Accent */}
      <div 
        className="absolute -right-24 -bottom-24 w-72 h-72 rounded-full border border-white/5 pointer-events-none flex items-center justify-center"
        aria-hidden="true"
      >
        <div className="w-48 h-48 rounded-full border border-dashed border-white/5" />
      </div>

      <div className="max-w-xl mx-auto relative z-10">
        {/* Campaign Eyebrow */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-2 mb-4"
        >
          <span className="h-px w-8 bg-white/40" />
          <span className="text-xs font-mono uppercase tracking-widest text-zinc-400">
            Campanha MZ Store &bull; Temporada Oficial
          </span>
        </motion.div>

        {/* Big Asymmetric 3D Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="space-y-1"
        >
          <h2 
            id="title-destaque-1"
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white text-3d-title leading-none"
          >
            SEU JOGO.
          </h2>
          <h2 
            id="title-destaque-2"
            className="font-heading text-5xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-zinc-300 text-3d-title leading-none"
          >
            SUA CHUTEIRA.
          </h2>
        </motion.div>

        {/* Asymmetric Editorial Text & Tech Pillars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-8 space-y-6"
        >
          <p className="font-body text-base sm:text-lg text-zinc-300 leading-relaxed pl-4 border-l-2 border-white/30">
            Cada dividida, cada drible e cada finalização dependem da firmeza do seu apoio. Na MZ Store, selecionamos modelos projetados para oferecer segurança, estabilidade e confiança do primeiro ao último minuto.
          </p>

          {/* Performance Features Grid */}
          <div className="grid grid-cols-2 gap-3 pt-4">
            <div className="p-4 rounded-xl glass-card border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                <Crosshair className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                PRECISÃO
              </h4>
              <p className="text-xs text-zinc-400 font-body mt-1 leading-snug">
                Toque limpo e estabilidade nas mudanças de direção.
              </p>
            </div>

            <div className="p-4 rounded-xl glass-card border border-white/10">
              <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center mb-3">
                <Zap className="w-4 h-4 text-white" />
              </div>
              <h4 className="font-heading text-lg font-bold uppercase tracking-wider text-white">
                EXPLOSÃO
              </h4>
              <p className="text-xs text-zinc-400 font-body mt-1 leading-snug">
                Arrancadas velozes com máxima fixação no gramado.
              </p>
            </div>
          </div>

          {/* Tactical Specs Stamp */}
          <div className="p-4 rounded-xl border border-dashed border-white/15 bg-white/[0.02] flex items-center justify-between text-xs font-mono text-zinc-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-white" />
              <span>PADRÃO PROFISSIONAL</span>
            </div>
            <span className="text-zinc-500">100% ESPORTIVO</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
