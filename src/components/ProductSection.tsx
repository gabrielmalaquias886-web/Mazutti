import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Image as ImageIcon, Sparkles, Upload, ExternalLink } from 'lucide-react';
import { ProductCardItem } from '../types';

export const ProductSection: React.FC = () => {
  // Pre-configured items ready to receive real images, with no invented prices or fake brands
  const [products, setProducts] = useState<ProductCardItem[]>([
    {
      id: 'prod-campo',
      name: 'CHUTEIRA CAMPO',
      category: 'Campo',
      description: 'Estrutura aerodinâmica com travamento projetado para máxima aderência e estabilidade em gramados naturais.',
      badge: 'GRAMA NATURAL',
    },
    {
      id: 'prod-society',
      name: 'CHUTEIRA SOCIETY',
      category: 'Society',
      description: 'Sola de borracha com microtravas de alta durabilidade para tração em sintético e redução de impacto.',
      badge: 'GRAMA SINTÉTICA',
    },
    {
      id: 'prod-futsal',
      name: 'CHUTEIRA FUTSAL',
      category: 'Futsal',
      description: 'Cabedal flexível com solado antiderrapante non-marking para toques precisos e velocidade em quadra.',
      badge: 'QUADRA / SALÃO',
    },
    {
      id: 'prod-performance',
      name: 'CHUTEIRA PERFORMANCE',
      category: 'Elite',
      description: 'Ajuste anatômico ao pé e sensação de segunda pele para controle e potência em todas as partidas.',
      badge: 'ALTA PERFORMANCE',
    },
  ]);

  const [activeCategory, setActiveCategory] = useState<string>('Todos');

  const categories = ['Todos', 'Campo', 'Society', 'Futsal'];

  const filteredProducts = activeCategory === 'Todos' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  const handleImageUpload = (id: string, e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setProducts(prev => prev.map(item => item.id === id ? { ...item, image: url } : item));
    }
  };

  return (
    <section 
      id="produtos-section" 
      className="relative py-20 px-5 max-w-xl mx-auto border-t border-white/10"
    >
      {/* Background glow */}
      <div 
        className="absolute left-1/2 -translate-x-1/2 top-10 w-80 h-80 bg-white/[0.02] rounded-full blur-3xl pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Section Header */}
      <div className="text-center mb-8">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs font-mono uppercase tracking-widest text-zinc-400 block mb-2"
        >
          Catálogo & Atendimento
        </motion.span>

        <motion.h2 
          id="title-produtos"
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading text-5xl sm:text-6xl font-black uppercase tracking-wider text-white text-3d-title"
        >
          ENCONTRE A SUA
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 font-body text-sm sm:text-base text-zinc-300 max-w-sm mx-auto"
        >
          Confira as linhas disponíveis e consulte os tamanhos diretamente pelo WhatsApp da MZ Store.
        </motion.p>
      </div>

      {/* Filter Chips */}
      <div className="flex items-center justify-center gap-2 mb-8 overflow-x-auto pb-2 scrollbar-none">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
              activeCategory === cat
                ? 'bg-white text-black glow-silver-button scale-105'
                : 'bg-zinc-900/80 text-zinc-400 border border-white/10 hover:border-white/25 hover:text-white'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Products Grid */}
      <div className="flex flex-col gap-6">
        {filteredProducts.map((product, idx) => (
          <motion.article
            key={product.id}
            id={product.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group relative rounded-2xl glass-card overflow-hidden transition-all duration-300 glass-card-hover"
          >
            {/* Image Area / Placeholder Prepared for Real Image */}
            <div className="relative w-full h-56 sm:h-64 bg-gradient-to-b from-zinc-900/90 via-zinc-950 to-black flex items-center justify-center overflow-hidden border-b border-white/10">
              {/* Subtle background tech grid */}
              <div className="absolute inset-0 bg-tactical-grid opacity-20" aria-hidden="true" />

              {/* Badge */}
              {product.badge && (
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md bg-black/80 backdrop-blur-md border border-white/20 text-[10px] font-mono tracking-widest uppercase text-white font-bold">
                    {product.badge}
                  </span>
                </div>
              )}

              {product.image ? (
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
                />
              ) : (
                /* High-end athletic boot stylized presentation */
                <div className="relative w-full h-full flex flex-col items-center justify-center p-6 text-center">
                  {/* Studio Light Beam */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-48 h-32 bg-gradient-to-b from-white/10 to-transparent blur-2xl pointer-events-none" />

                  {/* Athletic Cleat Vector Art in pure black & silver aesthetic */}
                  <svg 
                    className="w-40 h-28 text-zinc-300 drop-shadow-[0_10px_20px_rgba(255,255,255,0.15)] group-hover:scale-105 transition-transform duration-500" 
                    viewBox="0 0 240 120" 
                    fill="none" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    {/* Upper shoe silhouette */}
                    <path 
                      d="M20 75 C30 50 65 35 110 32 C155 30 190 40 220 60 C225 65 228 72 220 78 C210 82 170 82 135 84 C90 86 40 85 20 80 C15 78 15 77 20 75 Z" 
                      fill="url(#bootGradient)" 
                      stroke="#FFFFFF" 
                      strokeWidth="1.5" 
                      strokeOpacity="0.4" 
                    />
                    {/* Dynamic speed lines */}
                    <path d="M70 42 Q115 52 175 62" stroke="#FFFFFF" strokeWidth="2" strokeOpacity="0.8" />
                    <path d="M85 48 Q125 58 185 68" stroke="#94A3B8" strokeWidth="1.2" strokeOpacity="0.6" />
                    <path d="M100 54 Q135 64 195 74" stroke="#64748B" strokeWidth="1" strokeOpacity="0.5" />
                    
                    {/* Sole and Studs */}
                    <path d="M22 81 C60 85 140 86 218 80 L220 86 C160 90 70 90 20 85 Z" fill="#FFFFFF" fillOpacity="0.85" />
                    {/* Studs */}
                    <path d="M35 87 L38 98 L44 98 L47 87 Z" fill="#E2E8F0" />
                    <path d="M60 88 L63 99 L69 99 L72 88 Z" fill="#CBD5E1" />
                    <path d="M160 87 L163 98 L169 98 L172 87 Z" fill="#CBD5E1" />
                    <path d="M185 85 L187 97 L193 97 L195 85 Z" fill="#E2E8F0" />

                    <defs>
                      <linearGradient id="bootGradient" x1="20" y1="30" x2="220" y2="85" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#27272A" />
                        <stop offset="0.5" stopColor="#18181B" />
                        <stop offset="1" stopColor="#09090B" />
                      </linearGradient>
                    </defs>
                  </svg>

                  <div className="mt-2 flex items-center gap-1.5 text-zinc-400 text-xs font-mono tracking-widest uppercase">
                    <Sparkles className="w-3.5 h-3.5 text-zinc-300" />
                    <span>Espaço reservado para foto oficial</span>
                  </div>
                </div>
              )}

              {/* Optional Local Photo Upload Trigger */}
              <label 
                htmlFor={`upload-${product.id}`}
                className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-md bg-black/70 hover:bg-black/90 border border-white/15 text-[11px] font-body text-zinc-400 hover:text-white flex items-center gap-1.5 cursor-pointer backdrop-blur-sm transition-colors"
                title="Carregar imagem para este card"
              >
                <Upload className="w-3 h-3" />
                <span>{product.image ? 'Alterar foto' : 'Adicionar foto'}</span>
                <input
                  id={`upload-${product.id}`}
                  type="file"
                  accept="image/*"
                  onChange={(e) => handleImageUpload(product.id, e)}
                  className="hidden"
                />
              </label>
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col justify-between">
              <div>
                <h3 className="font-heading text-2xl sm:text-3xl font-extrabold tracking-wider uppercase text-white">
                  {product.name}
                </h3>
                <p className="mt-2 font-body text-sm text-zinc-300 leading-relaxed">
                  {product.description}
                </p>
              </div>

              {/* Action Button: WhatsApp */}
              <div className="mt-5 pt-4 border-t border-white/10 flex items-center justify-between gap-3">
                <div className="text-xs text-zinc-400 font-mono">
                  <span>DISPONIBILIDADE: </span>
                  <span className="text-white font-semibold">SOB CONSULTA</span>
                </div>

                <a
                  href={`https://w.app/axicvo`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-heading font-bold text-sm tracking-wider uppercase transition-all duration-200 hover:scale-105 active:scale-95"
                >
                  <MessageCircle className="w-4 h-4 stroke-[2.2]" />
                  <span>CONSULTAR</span>
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
