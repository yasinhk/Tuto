'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Dribbble, Sparkles } from 'lucide-react';
import { USER_INFO } from '@/data/portfolioData';

export const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.215, 0.61, 0.355, 1] },
    },
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden">
      {/* Background Ambient Glows */}
      <div className="glow-spot-blue -top-20 -left-20 opacity-60" />
      <div className="glow-spot-emerald bottom-0 right-0 opacity-40" />

      {/* Grid Overlay Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#18181b0a_1px,transparent_1px),linear-gradient(to_bottom,#18181b0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Status Badge */}
          <motion.div variants={itemVariants} className="mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900/80 border border-emerald-500/30 text-emerald-400 text-xs sm:text-sm font-medium backdrop-blur-md shadow-[0_0_15px_rgba(16,185,129,0.15)]">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>{USER_INFO.status}</span>
            </div>
          </motion.div>

          {/* Hero Name & Title */}
          <motion.div variants={itemVariants} className="mb-4">
            <h2 className="text-zinc-400 text-lg sm:text-2xl font-medium tracking-wide uppercase">
              Merhaba, Ben <span className="text-white font-semibold">{USER_INFO.name}</span>
            </h2>
          </motion.div>

          <motion.div variants={itemVariants} className="max-w-4xl mb-6">
            <h1 className="font-heading font-extrabold text-4xl sm:text-6xl md:text-7xl text-white tracking-tight leading-[1.1]">
              Yaratıcı Fikirleri <br className="hidden sm:inline" />
              <span className="text-accent-gradient">Dijital Deneyimlere</span> Dönüştürüyorum
            </h1>
          </motion.div>

          {/* Bio Description */}
          <motion.div variants={itemVariants} className="max-w-2xl mb-10">
            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed">
              {USER_INFO.bio}
            </p>
          </motion.div>

          {/* Call to Actions */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center justify-center gap-4 mb-14">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_25px_rgba(59,130,246,0.4)] hover:shadow-[0_0_35px_rgba(59,130,246,0.7)] hover:-translate-y-1"
            >
              <span>Projeleri Keşfet</span>
              <ArrowRight className="w-5 h-5" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-base font-semibold text-zinc-300 hover:text-white bg-zinc-900 hover:bg-zinc-800 border border-white/10 transition-all duration-300 hover:-translate-y-1"
            >
              <span>İletişime Geç</span>
            </a>

            <a
              href="mailto:hakan.yasin@example.com?subject=CV%20Talebi"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-full text-sm font-medium text-zinc-400 hover:text-white bg-zinc-950/60 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <Download className="w-4 h-4 text-emerald-400" />
              <span>CV İndir</span>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-16">
            <a
              href={USER_INFO.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href={USER_INFO.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href={USER_INFO.socials.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="Twitter Profile"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href={USER_INFO.socials.dribbble}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-zinc-900 border border-white/10 text-zinc-400 hover:text-white hover:border-blue-500/50 hover:bg-blue-500/10 transition-all"
              aria-label="Dribbble Profile"
            >
              <Dribbble className="w-5 h-5" />
            </a>
          </motion.div>

          {/* Stats Bar */}
          <motion.div
            variants={itemVariants}
            className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl glass-panel border border-white/10"
          >
            {USER_INFO.stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center p-3">
                <span className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight text-accent-gradient">
                  {stat.value}
                </span>
                <span className="text-xs sm:text-sm text-zinc-400 mt-1 font-medium">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
