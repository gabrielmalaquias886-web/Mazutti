import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Compass, Shield, Activity } from 'lucide-react';

export const ChooseYourGame: React.FC = () => {
  const games = [
    {
      id: 'game-campo',
      name: 'CAMPO',
      tag: 'TRAVAS FIXAS & ALTAS',
      surface: 'Gramado Natural',
      description: 'Estrutura desenvolvida para arrancadas explosivas, fixação no solo e máxima estabilidade em qualquer condição de gramado.',
      attribute: 'Tração & Velocidade',
    },
    {
      id: 'game-society',
      name: 'SOCIETY',
      tag: 'MICROTRAVAS DE BORRACHA',
      surface: 'Grama Sintética',
      description: 'Distribuição precisa de microtravas para amortecimento de impacto, giros rápidos e aderência sem travar a articulação.',
      attribute: 'Estabilidade & Agilidade',
    },
    {
      id: 'game-futsal',
      name: 'FUTSAL',
      tag: 'SOLADO NON-MARKING',
      surface: 'Quadra / Salão',
      description: 'Perfil baixo com borracha de alta aderência para toques refinados, trocas de direção instantâneas e controle de bola milimétrico.',
      attribute: 'Precisão & Toque',
    },
  ];

  return (
    <section 
      id="escolha-seu-jogo-section" 
      className="relative py-20 px-5 max-w-xl mx-auto border-t border-white/10"
    >
      {/* Background visual detail */}
      <div 
        className="absolute -right-20 top-1/3 w-64 h-64 bg-zinc-800/10 rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Section Header with 3D Title */}
      <div className="text-center mb-10">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-zinc-900 border border-white/10 text-xs font-mono uppercase tracking-widest text-zinc-400 mb-3"
        >
          <Activity className="w-3.5 h-3.5 text-zinc-300" />
          <span>Proposta MZ Store</span>
        </motion.div>

        <motion.h2 
          id="title-escolha-seu-jogo"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-wider text-white text-3d-title leading-none"
        >
          ESCOLHA SEU JOGO.
        </motion.h2>

        <motion.p 
          id="desc-escolha-seu-jogo"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-4 font-body text-base sm:text-lg text-zinc-300 max-w-md mx-auto leading-relaxed"
        >
          Encontre a chuteira certa para entrar em campo preparado.
        </motion.p>
      </div>

      {/* Game Categories Cards */}
      <div className="flex flex-col gap-4">
        {games.map((game, index) => (
          <motion.div
            key={game.id}
            id={game.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: index * 0.12 }}
            className="group relative p-5 rounded-2xl glass-card glass-card-hover transition-all duration-300"
          >
            {/* Top Row: Surface + Tag */}
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="text-[11px] font-mono uppercase tracking-widest text-zinc-400">
                {game.surface}
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-white/5 border border-white/10 text-zinc-300">
                {game.tag}
              </span>
            </div>

            {/* Name with 3D feel */}
            <div className="flex items-center justify-between mt-1 mb-2">
              <h3 className="font-heading text-3xl sm:text-4xl font-extrabold tracking-wider uppercase text-white group-hover:text-zinc-100 transition-colors">
                {game.name}
              </h3>
              <a
                href="https://w.app/axicvo"
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Consultar modelos para ${game.name} no WhatsApp`}
                className="w-10 h-10 rounded-xl bg-white/5 group-hover:bg-white group-hover:text-black text-white flex items-center justify-center transition-all duration-300 border border-white/10 group-hover:border-white"
              >
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>

            {/* Description */}
            <p className="font-body text-sm text-zinc-300 leading-relaxed mb-3">
              {game.description}
            </p>

            {/* Attribute Bar */}
            <div className="pt-2 border-t border-white/5 flex items-center justify-between text-xs">
              <span className="text-zinc-400 font-medium">Foco técnico:</span>
              <span className="text-zinc-200 font-semibold tracking-wide">{game.attribute}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
