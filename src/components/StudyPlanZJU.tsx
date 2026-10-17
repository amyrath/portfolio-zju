'use client';

import React from 'react';
import { 
  GraduationCap, 
  Compass, 
  Volume2, 
  Share2, 
  BarChart3, 
  Building2, 
  CheckCircle2, 
  Languages 
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

export default function StudyPlanZJU() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const data = t.studyPlan;

  const icons = [Compass, Volume2, Share2, BarChart3];

  return (
    <section 
      id="study-plan" 
      className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Background Soft Atmosphere Glow */}
      <div className="absolute top-10 right-10 w-96 h-96 rounded-full bg-[#FFFDB6]/30 dark:bg-[#420D09]/30 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-[#FF8B71]/10 blur-3xl pointer-events-none" />

      {/* Main Study Plan Container Card */}
      <div className="p-8 sm:p-12 md:p-14 rounded-[3rem] bg-[#FFFDE8] dark:bg-[#360B08] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow relative overflow-hidden transition-colors duration-300">
        
        {/* Header Tag with a subtle micro-pinch of cyan status dot */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] text-xs font-black font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <GraduationCap className="w-4 h-4 text-[#470E0B] dark:text-[#FFFDB6]" />
            <span>{data.tag}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 font-mono">
            <Building2 className="w-4 h-4 text-[#FF8B71]" />
            <span>{data.university}</span>
          </div>
        </div>

        {/* Section Title & Official Research Project Name */}
        <div className="max-w-4xl mb-12 space-y-4">
          <div className="text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 uppercase tracking-wider">
            {data.officialTitleLabel}
          </div>

          <div className="p-6 sm:p-7 rounded-3xl bg-[#FFFDB6] dark:bg-[#250705] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 transition-colors">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight leading-tight">
              {data.officialTitle}
            </h2>
            <p className="text-xs sm:text-sm font-bold text-[#FF8B71] font-mono mt-2">
              {data.program}
            </p>
          </div>

          {/* Linguistic Diversity Core Subject Callout */}
          <div className="p-4 sm:p-5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-start gap-3.5 transition-colors">
            <div className="p-2.5 rounded-xl bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] shrink-0 mt-0.5 border border-[#470E0B]/10 dark:border-[#FFFDB6]/10">
              <Languages className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <span className="text-[11px] font-mono font-bold text-[#FF8B71] uppercase tracking-wider block">
                {data.themeLabel}
              </span>
              <p className="text-sm font-bold text-[#470E0B] dark:text-[#FFFDB6] leading-relaxed">
                {data.theme}
              </p>
            </div>
          </div>
        </div>

        {/* Two-Column Problem & Approach Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-14">
          
          {/* The Problem / Le Constat */}
          <div className="p-7 rounded-3xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 space-y-3 transition-colors">
            <div className="text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8B71]" />
              {data.problemLabel}
            </div>
            <h3 className="text-xl font-black text-[#470E0B] dark:text-[#FFFDB6]">
              {data.problemTitle}
            </h3>
            <p className="text-sm text-[#470E0B]/85 dark:text-[#FFFDB6]/85 leading-relaxed font-medium">
              {data.problemDesc}
            </p>
          </div>

          {/* The Approach / La Démarche */}
          <div className="p-7 rounded-3xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#FF8B71]/40 space-y-3 transition-colors">
            <div className="text-xs font-mono font-bold text-[#470E0B]/80 dark:text-[#FFFDB6]/80 uppercase tracking-wider flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF8B71]" />
              {data.approachLabel}
            </div>
            <h3 className="text-xl font-black text-[#470E0B] dark:text-[#FFFDB6]">
              {data.approachTitle}
            </h3>
            <p className="text-sm text-[#470E0B]/85 dark:text-[#FFFDB6]/85 leading-relaxed font-medium">
              {data.approachDesc}
            </p>
          </div>

        </div>

        {/* The 4 Research Axes Grid */}
        <div>
          <div className="text-center md:text-left mb-6">
            <h3 className="text-xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight">
              {data.axesHeading}
            </h3>
            <p className="text-xs text-[#470E0B]/70 dark:text-[#FFFDB6]/70 font-semibold mt-1">
              {data.axesSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.axes.map((axis, idx) => {
              const IconComp = icons[idx] || Compass;

              return (
                <div
                  key={axis.number}
                  className="p-6 rounded-3xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow flex flex-col justify-between hover:border-[#FF8B71] transition-colors"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="w-10 h-10 rounded-2xl bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] font-black text-sm flex items-center justify-center shadow-md">
                        {axis.number}
                      </span>
                      <IconComp className="w-5 h-5 text-[#470E0B]/70 dark:text-[#FFFDB6]/70" />
                    </div>

                    <h4 className="text-base font-black text-[#470E0B] dark:text-[#FFFDB6] leading-snug">
                      {axis.title}
                    </h4>

                    <p className="text-xs text-[#470E0B]/85 dark:text-[#FFFDB6]/85 leading-relaxed font-medium">
                      {axis.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#470E0B]/10 dark:border-[#FFFDB6]/10 flex items-center gap-1.5 text-[11px] font-bold text-[#470E0B]/60 dark:text-[#FFFDB6]/60 font-mono">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span>{language === 'en' ? `Research Axis ${axis.number}` : `Axe de Recherche ${axis.number}`}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
