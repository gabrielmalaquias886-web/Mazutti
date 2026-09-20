/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef } from 'react';
import { Hero } from './components/Hero';
import { ChooseYourGame } from './components/ChooseYourGame';
import { ProductSection } from './components/ProductSection';
import { FeatureHighlight } from './components/FeatureHighlight';
import { InstagramSection } from './components/InstagramSection';
import { CtaSection } from './components/CtaSection';
import { Footer } from './components/Footer';
import { FloatingActions } from './components/FloatingActions';
import { MessageCircle, Instagram } from 'lucide-react';

export default function App() {
  const chooseGameRef = useRef<HTMLDivElement>(null);

  const scrollToChooseGame = () => {
    chooseGameRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-black text-white font-body selection:bg-white selection:text-black relative">
      {/* Top Brand Micro Header */}
      <header 
        id="top-header"
        className="sticky top-0 z-40 w-full backdrop-blur-xl bg-black/75 border-b border-white/10 px-5 py-3.5 transition-all"
      >
        <div className="max-w-md mx-auto flex items-center justify-between">
          <a 
            href="#hero-section" 
            className="flex items-center gap-2.5 group"
            aria-label="MZ Store Início"
          >
            <div className="w-8 h-8 rounded-lg p-1 bg-zinc-950 border border-white/15 flex items-center justify-center">
              <img
                src="https://i.postimg.cc/HjGCK7Gb/file-00000000857c820e8d1e476647a22b9a.png"
                alt="MZ Store"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-heading text-xl font-black tracking-widest uppercase text-white group-hover:text-zinc-200 transition-colors">
              MZ STORE
            </span>
          </a>

          <div className="flex items-center gap-2">
            <a
              id="header-link-instagram"
              href="https://www.instagram.com/mzstore150?stkn=MWtnZWVkN2IzN3hhNQ=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram MZ Store"
              className="w-9 h-9 rounded-xl bg-white/5 hover:bg-white/15 border border-white/10 text-zinc-300 hover:text-white flex items-center justify-center transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              id="header-link-whatsapp"
              href="https://w.app/axicvo"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp MZ Store"
              className="px-3.5 py-1.5 rounded-xl bg-white hover:bg-zinc-200 text-black font-heading font-extrabold text-xs uppercase tracking-wider flex items-center gap-1.5 transition-transform hover:scale-105 active:scale-95 glow-silver-button"
            >
              <MessageCircle className="w-3.5 h-3.5 stroke-[2.4]" />
              <span>CONTATO</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Biosite Flow */}
      <main className="w-full">
        {/* 1. Hero / Primeira Tela */}
        <Hero onExploreClick={scrollToChooseGame} />

        {/* 2. Seção "Escolha Seu Jogo" */}
        <div ref={chooseGameRef}>
          <ChooseYourGame />
        </div>

        {/* 3. Seção de Produtos ("Encontre a Sua" / "Chuteiras") */}
        <ProductSection />

        {/* 4. Seção de Destaque ("Seu Jogo. Sua Chuteira.") */}
        <FeatureHighlight />

        {/* 5. Seção Instagram */}
        <InstagramSection />

        {/* 6. WhatsApp / CTA Final */}
        <CtaSection />
      </main>

      {/* 7. Rodapé */}
      <Footer />

      {/* Persistent Mobile Floating Actions */}
      <FloatingActions />
    </div>
  );
}
