'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Video, ExternalLink, Play } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

export default function VideoProjects() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const project1 = t.videos.project1;
  const project2 = t.videos.project2;

  return (
    <section 
      id="videos" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/3 left-10 w-72 h-72 rounded-full bg-[#FF8B71]/10 blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 right-10 w-72 h-72 rounded-full bg-[#FFFDB6]/20 dark:bg-[#420D09]/30 blur-3xl pointer-events-none" />

      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] text-xs font-bold font-mono soft-card-shadow">
          <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
          <Video className="w-4 h-4 text-[#FF8B71]" />
          <span>{t.videos.kicker}</span>
        </div>

        <h2 className="text-3xl sm:text-5xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight">
          {t.videos.title}
        </h2>

        <p className="text-base sm:text-lg text-[#470E0B]/75 dark:text-[#FFFDB6]/75 font-medium">
          {t.videos.description}
        </p>
      </div>

      {/* Grid of the 2 Floating Windows (Fluid Levitation + Anti-Shake GPU Transform) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
        
        {/* FENÊTRE FLOTTANTE 1 : Court-métrage Historique par IA (Facebook) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-[2.5rem] bg-[#FFFDE8] dark:bg-[#360B08] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#FF8B71] transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]"
        >
          {/* Window Header Bar */}
          <div className="bg-[#FFFDB6] dark:bg-[#250705] px-6 py-3.5 border-b-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF8B71]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFFDB6] border border-[#470E0B]/20" />
              {/* Micro-salt pinch of cyan */}
              <span className="w-3.5 h-3.5 rounded-full bg-cyan-400" />
              <span className="ml-2 text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70">
                {project1.number} · {project1.organization}
              </span>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-[#470E0B]/10 dark:bg-[#FFFDB6]/10 text-[#470E0B] dark:text-[#FFFDB6] text-[10px] font-black uppercase tracking-wider">
              {project1.tag}
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            {/* Visual Preview Banner with Real Film Thumbnail Image & Play Overlay */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 shadow-inner flex flex-col items-center justify-center text-center p-6 group-hover:shadow-lg transition-shadow">
              
              {/* Authentic Period Film Cover Photo */}
              <img
                src={project1.thumbnailUrl}
                alt={project1.title}
                className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              />

              {/* Cinematic Vignette Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-black/30 pointer-events-none" />

              <div className="relative z-10 space-y-3">
                <a
                  href={project1.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-16 h-16 rounded-full bg-[#FF8B71] text-[#470E0B] flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all mx-auto cursor-pointer border-3 border-white/80"
                  title={project1.button}
                >
                  <Play className="w-7 h-7 fill-current ml-1" />
                </a>
                <div className="text-xs font-mono text-[#FFFDB6] font-bold uppercase tracking-wider drop-shadow-md">
                  {project1.organization}
                </div>
              </div>

              <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-[11px] font-mono text-white/90 drop-shadow">
                <span>{language === 'en' ? 'Precolonial Historical Cinema' : 'Récit Historique Précolonial'}</span>
                <span className="bg-black/70 px-2.5 py-0.5 rounded-full border border-white/20">
                  {language === 'en' ? 'Ultra HD' : 'Format Ultra HD'}
                </span>
              </div>
            </div>

            {/* Info & Content */}
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#470E0B] dark:text-[#FFFDB6] leading-tight">
                  {project1.title}
                </h3>
                <p className="text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 mt-1">
                  {project1.category} · {project1.organization}
                </p>
              </div>

              {/* Exact Role Prominent Box */}
              <div className="p-3.5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#FF8B71]/40 space-y-1">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#FF8B71] block">
                  {t.videos.exactRoleLabel}
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#470E0B] dark:text-[#FFFDB6] leading-snug">
                  {project1.role}
                </p>
              </div>

              <p className="text-sm text-[#470E0B]/75 dark:text-[#FFFDB6]/75 leading-relaxed font-medium">
                {project1.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project1.badges.map((b, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 sm:p-8 pt-0">
            <a
              href={project1.facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1877F2] text-white hover:bg-[#166fe5] font-bold text-sm transition-all soft-card-shadow hover:scale-105 active:scale-95"
            >
              <span>{project1.button}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* FENÊTRE FLOTTANTE 2 : "À tous les hommes" (YouTube) */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5.6,
            delay: 0.6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="rounded-[2.5rem] bg-[#FFFDE8] dark:bg-[#360B08] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow overflow-hidden flex flex-col justify-between group transition-all duration-300 hover:border-[#FF8B71] transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]"
        >
          {/* Window Header Bar */}
          <div className="bg-[#FFFDB6] dark:bg-[#250705] px-6 py-3.5 border-b-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF8B71]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FFFDB6] border border-[#470E0B]/20" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#470E0B] dark:bg-[#FFFDB6]" />
              <span className="ml-2 text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70">
                {project2.number} · {project2.organization}
              </span>
            </div>
            <span className="px-3 py-0.5 rounded-full bg-[#470E0B]/10 dark:bg-[#FFFDB6]/10 text-[#470E0B] dark:text-[#FFFDB6] text-[10px] font-black uppercase tracking-wider">
              {project2.tag}
            </span>
          </div>

          <div className="p-6 sm:p-8 space-y-5">
            {/* Embedded Responsive YouTube Player */}
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden bg-black/20 border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 shadow-inner">
              <iframe
                className="w-full h-full object-cover"
                src={`https://www.youtube-nocookie.com/embed/${project2.youtubeId}?rel=0&modestbranding=1`}
                title={project2.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>

            {/* Info & Content */}
            <div className="space-y-3">
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-[#470E0B] dark:text-[#FFFDB6] leading-tight">
                  {project2.title}
                </h3>
                <p className="text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 mt-1">
                  {project2.category} · {project2.organization}
                </p>
              </div>

              {/* Exact Role Prominent Box */}
              <div className="p-3.5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#FF8B71]/40 space-y-1">
                <span className="text-[10px] font-mono font-extrabold uppercase tracking-wider text-[#FF8B71] block">
                  {t.videos.exactRoleLabel}
                </span>
                <p className="text-xs sm:text-sm font-bold text-[#470E0B] dark:text-[#FFFDB6] leading-snug">
                  {project2.role}
                </p>
              </div>

              <p className="text-sm text-[#470E0B]/75 dark:text-[#FFFDB6]/75 leading-relaxed font-medium">
                {project2.description}
              </p>

              {/* Badges */}
              <div className="flex flex-wrap gap-1.5 pt-1">
                {project2.badges.map((b, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full text-xs font-bold bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6]"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Footer */}
          <div className="p-6 sm:p-8 pt-0">
            <a
              href={project2.youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#CC0000] text-white hover:bg-[#b30000] font-bold text-sm transition-all soft-card-shadow hover:scale-105 active:scale-95"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>{project2.button}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
