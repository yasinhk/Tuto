'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { EXPERIENCES } from '@/data/portfolioData';
import { Briefcase, Calendar, Building2 } from 'lucide-react';

export const Timeline: React.FC = () => {
  return (
    <section id="experience" className="py-20 relative overflow-hidden bg-zinc-950/60">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Kariyer Yolculuğu</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl text-white tracking-tight">
            Deneyim & <span className="text-accent-gradient">Geçmiş</span>
          </h2>
        </div>

        {/* Timeline Items Container */}
        <div className="relative border-l-2 border-zinc-800 ml-4 sm:ml-32 space-y-12">
          {EXPERIENCES.map((item, idx) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="relative pl-8 sm:pl-10 group"
            >
              {/* Glowing Node Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-zinc-950 border-2 border-blue-500 group-hover:border-emerald-400 group-hover:scale-125 transition-all duration-300 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />

              {/* Period Badge for Desktop Left Alignment */}
              <div className="sm:absolute sm:-left-36 sm:top-1 text-sm font-semibold text-blue-400 font-mono flex items-center gap-1.5 mb-2 sm:mb-0">
                <Calendar className="w-4 h-4 text-zinc-500" />
                <span>{item.period}</span>
              </div>

              {/* Experience Card */}
              <div className="bg-zinc-900/80 p-6 sm:p-8 rounded-2xl border border-white/10 group-hover:border-blue-500/30 transition-colors shadow-lg">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                  <h3 className="font-heading font-bold text-xl text-white group-hover:text-blue-400 transition-colors">
                    {item.role}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-xs font-medium text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    <Building2 className="w-3.5 h-3.5" />
                    {item.company}
                  </span>
                </div>

                <p className="text-zinc-300 text-sm leading-relaxed mb-5">
                  {item.description}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-lg bg-zinc-950 text-zinc-400 text-xs font-medium border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
