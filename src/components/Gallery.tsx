'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS, Project } from '@/data/portfolioData';
import { LightboxModal } from '@/components/LightboxModal';
import { Maximize2, ExternalLink, Sparkles } from 'lucide-react';
import Image from 'next/image';

const CATEGORIES = ['Tümü', 'Web', 'Mobil', 'UI/UX', 'Donanım / 3D'] as const;

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tümü');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeCategory === 'Tümü') return true;
    return project.category === activeCategory;
  });

  return (
    <section id="gallery" className="py-24 relative overflow-hidden bg-zinc-950/50">
      {/* Background Ambient Glow */}
      <div className="glow-spot-blue top-1/3 right-0 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Portföy Galerisi</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-6">
            Seçkin Projeler & <span className="text-accent-gradient">Çalışmalar</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            En son geliştirdiğim web platformları, mobil uygulamalar, UI/UX konseptleri ve 3D ürün tasarımlarından oluşan galeri.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-14">
          {CATEGORIES.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? 'text-white shadow-[0_0_20px_rgba(59,130,246,0.4)]'
                    : 'text-zinc-400 hover:text-zinc-200 bg-zinc-900/80 border border-white/5 hover:border-white/15'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeCategoryBg"
                    className="absolute inset-0 bg-blue-600 rounded-full z-0"
                    transition={{ type: 'spring', duration: 0.5 }}
                  />
                )}
                <span className="relative z-10">{category}</span>
              </button>
            );
          })}
        </div>

        {/* Masonry / Responsive Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-zinc-900 border border-white/10 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl hover:border-blue-500/40 transition-all duration-500"
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Container with 105% Scale on Hover */}
                <div className="relative aspect-[4/3] w-full bg-zinc-950 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-105 group-hover:brightness-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />

                  {/* Dark overlay that recedes on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

                  {/* Top Category Badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1 rounded-full bg-zinc-950/80 border border-white/10 text-zinc-300 text-xs font-medium backdrop-blur-md">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Icon Indicator */}
                  <div className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-blue-600/80 border border-blue-400/40 text-white flex items-center justify-center opacity-0 scale-75 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300 shadow-lg">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>

                {/* Card Info Content */}
                <div className="p-6 relative z-10 bg-zinc-900/90 backdrop-blur-sm flex flex-col justify-between">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 text-sm line-clamp-2 leading-relaxed mb-4">
                      {project.shortDesc}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-white/5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-zinc-950 text-zinc-400 text-[11px] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-0.5 rounded-md bg-zinc-950 text-zinc-500 text-[11px]">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <LightboxModal
        project={selectedProject}
        projects={filteredProjects}
        onClose={() => setSelectedProject(null)}
        onSelectProject={(p) => setSelectedProject(p)}
      />
    </section>
  );
};
