'use client';

import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { USER_INFO } from '@/data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 py-12 bg-zinc-950 text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Brand */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <Sparkles className="w-4 h-4" />
          </div>
          <span className="font-heading font-bold text-white tracking-wide">
            {USER_INFO.name} <span className="text-blue-500">.</span>
          </span>
        </div>

        {/* Copyright & Info */}
        <div className="text-xs sm:text-sm text-center text-zinc-500 flex items-center gap-1">
          <span>© {new Date().getFullYear()} {USER_INFO.name}. Next.js 14 & Tailwind CSS ile geliştirildi.</span>
        </div>

        {/* Scroll Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-blue-500/50 hover:bg-blue-600 transition-all shadow-md"
          aria-label="Sayfanın Başına Dön"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </div>
    </footer>
  );
};
