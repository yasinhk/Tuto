'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { USER_INFO, SKILL_CATEGORIES } from '@/data/portfolioData';
import { User, Code2, Award, Download, CheckCircle, Sparkles, Terminal } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const [downloadSuccess, setDownloadSuccess] = useState(false);

  React.useEffect(() => {
    let timer: NodeJS.Timeout;
    if (downloadSuccess) {
      timer = setTimeout(() => setDownloadSuccess(false), 4000);
    }
    return () => clearTimeout(timer);
  }, [downloadSuccess]);

  const handleCvDownload = () => {
    // Generate and download sample CV document
    const element = document.createElement('a');
    const file = new Blob([
      `HAKAN YASIN - CURRICULUM VITAE\n` +
      `Title: ${USER_INFO.title}\n` +
      `Location: ${USER_INFO.location}\n` +
      `Email: ${USER_INFO.email}\n` +
      `Bio: ${USER_INFO.bio}\n\n` +
      `SKILLS:\n` +
      SKILL_CATEGORIES.map(c => `- ${c.name}: ${c.skills.map(s => `${s.name} (${s.level}%)`).join(', ')}`).join('\n')
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = `Hakan_Yasin_CV.txt`;
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);

    setDownloadSuccess(true);
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="glow-spot-emerald bottom-10 left-0 opacity-20" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <User className="w-3.5 h-3.5" />
            <span>Hakkımda & Deneyim</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-6">
            Kod, Tasarım ve <span className="text-accent-gradient">Tutku</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Kullanıcı odaklı arayüzler ve ölçeklenebilir altyapılar inşa ederek dijital dünyaya değer katıyorum.
          </p>
        </div>

        {/* Top Grid: Bio & Skills */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          {/* Bio & Details (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 glass-panel p-8 rounded-3xl border border-white/10 relative"
          >
            <div className="w-14 h-14 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center mb-6 text-blue-400">
              <Terminal className="w-7 h-7" />
            </div>

            <h3 className="font-heading font-bold text-2xl text-white mb-4">
              Merhaba, Ben {USER_INFO.name} 👋
            </h3>

            <p className="text-zinc-300 text-base leading-relaxed mb-6">
              {USER_INFO.bio}
            </p>

            <p className="text-zinc-400 text-sm leading-relaxed mb-8">
              Ön yüz geliştirme süreçlerinde estetik, okunabilirlik ve performansı ön planda tutarken; arka yüz mimarilerinde güvenlik ve modüler yapıyı benimsiyorum.
            </p>

            {/* Quick Key-Values */}
            <div className="space-y-3 pt-6 border-t border-white/10 text-sm mb-8">
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Konum:</span>
                <span className="text-white font-medium">{USER_INFO.location}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">E-posta:</span>
                <span className="text-blue-400 font-medium">{USER_INFO.email}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-400">Çalışma Şekli:</span>
                <span className="text-emerald-400 font-medium">Remote / Hibrit</span>
              </div>
            </div>

            {/* CV Download CTA */}
            <div className="relative">
              <button
                onClick={handleCvDownload}
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-zinc-800 hover:bg-zinc-700 text-white font-semibold text-sm border border-white/10 transition-all shadow-lg hover:border-emerald-500/50"
              >
                <Download className="w-4 h-4 text-emerald-400" />
                <span>Özgeçmişi İndir (PDF)</span>
              </button>

              {/* Toast Feedback */}
              {downloadSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="mt-3 p-3 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 text-xs flex items-center justify-center gap-2"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-400" />
                  <span>CV indirme talebi alındı! İndirme başladı.</span>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Skills Breakdown (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-8"
          >
            {SKILL_CATEGORIES.map((category) => (
              <div
                key={category.name}
                className="bg-zinc-900/60 p-6 sm:p-8 rounded-3xl border border-white/10 backdrop-blur-md"
              >
                <h4 className="font-heading font-bold text-xl text-white mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-blue-400" />
                  <span>{category.name}</span>
                </h4>

                <div className="space-y-5">
                  {category.skills.map((skill, skillIdx) => (
                    <div key={skill.name} className="space-y-2">
                      <div className="flex justify-between items-center text-sm font-medium">
                        <span className="text-zinc-200">{skill.name}</span>
                        <span className="text-blue-400 font-mono text-xs">{skill.level}%</span>
                      </div>
                      <div className="w-full h-2 rounded-full bg-zinc-800 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut', delay: skillIdx * 0.1 }}
                          className="h-full rounded-full bg-gradient-to-r from-blue-600 via-blue-400 to-emerald-400"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
