'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Copy, Check, MapPin, MessageSquare, Sparkles, Github, Linkedin, Twitter } from 'lucide-react';
import { USER_INFO } from '@/data/portfolioData';

export const ContactSection: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard) {
        await navigator.clipboard.writeText(USER_INFO.email);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = USER_INFO.email;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback if permission is denied
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    const timer = setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 1200);
    return () => clearTimeout(timer);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="glow-spot-blue top-0 left-1/2 -translate-x-1/2 opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>İletişim & Proje Teklifleri</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight mb-6">
            Birlikte Harika Şeyler <br />
            <span className="text-accent-gradient">İnşa Edelim</span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg">
            Yeni bir proje, iş birliği veya sadece tanışmak için aşağıdaki formu doldurabilir veya e-posta gönderebilirsiniz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Contact Information & Copy Email (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-bold text-2xl text-white">
                İletişim Bilgileri
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Geliştirmek istediğiniz fikirleriniz için 24 saat içerisinde geri dönüş sağlıyorum.
              </p>

              {/* Copy Email Box */}
              <div className="p-4 rounded-2xl bg-zinc-950 border border-white/10 flex items-center justify-between gap-3 group">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="flex flex-col truncate">
                    <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">E-posta Adresi</span>
                    <span className="text-sm font-semibold text-white truncate">{USER_INFO.email}</span>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-2 rounded-xl bg-zinc-900 hover:bg-blue-600 text-zinc-300 hover:text-white border border-white/10 text-xs font-semibold flex items-center gap-1.5 transition-all shrink-0"
                  aria-label="E-posta Kopyala"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 text-emerald-400" />
                      <span>Kopyalandı</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      <span>Kopyala</span>
                    </>
                  )}
                </button>
              </div>

              {/* Location Box */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-zinc-950/60 border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-emerald-600/20 text-emerald-400 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-[11px] text-zinc-500 uppercase tracking-wider font-medium">Konum</span>
                  <span className="text-sm font-semibold text-white">{USER_INFO.location}</span>
                </div>
              </div>

              {/* Social Accounts */}
              <div className="pt-6 border-t border-white/10">
                <span className="text-xs text-zinc-400 uppercase tracking-wider font-semibold block mb-4">
                  Sosyal Ağlar
                </span>
                <div className="flex items-center gap-3">
                  <a
                    href={USER_INFO.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-blue-500/50 flex items-center justify-center gap-2 transition-all"
                  >
                    <Github className="w-4 h-4" />
                    <span className="text-xs font-semibold">GitHub</span>
                  </a>
                  <a
                    href={USER_INFO.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-zinc-900 border border-white/10 text-zinc-300 hover:text-white hover:border-blue-500/50 flex items-center justify-center gap-2 transition-all"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span className="text-xs font-semibold">LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Interactive Form (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 relative"
          >
            <h3 className="font-heading font-bold text-2xl text-white mb-6">
              Mesaj Gönderin
            </h3>

            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-8 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h4 className="font-heading font-bold text-2xl text-white">
                  Mesajınız Başarıyla İletildi!
                </h4>
                <p className="text-zinc-300 text-sm">
                  Geri bildiriminiz için teşekkürler. En kısa sürede sizinle iletişime geçeceğim.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      Adınız Soyadınız *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ahmet Yılmaz"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                      E-posta Adresiniz *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ahmet@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Konu
                  </label>
                  <input
                    type="text"
                    placeholder="Web Sitesi / Mobil Uygulama Geliştirme"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-semibold uppercase tracking-wider text-zinc-400">
                    Mesajınız *
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Projeniz hakkında kısa bir bilgi verebilirsiniz..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-zinc-950 border border-white/10 text-white placeholder-zinc-600 focus:outline-none focus:border-blue-500 transition-colors text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl text-base font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-all duration-300 shadow-[0_0_20px_rgba(59,130,246,0.4)] disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <span>Gönderiliyor...</span>
                  ) : (
                    <>
                      <span>Mesajı Gönder</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
