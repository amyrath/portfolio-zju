'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  Bot, 
  Laptop, 
  Cpu, 
  Sparkles, 
  Maximize2, 
  X,
  Camera
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

export default function EngagementAfrikeductek() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const data = t.afrikedutech;

  const [activePhoto, setActivePhoto] = useState<typeof data.photos[0] | null>(null);
  const [imgErrors, setImgErrors] = useState<Record<string, boolean>>({});

  const handleImageError = (id: string) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const actionIcons = [Bot, Laptop, Cpu];

  return (
    <section 
      id="engagement" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Background Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#FF8B71]/10 blur-3xl pointer-events-none" />

      {/* Main Engagement Container */}
      <div className="p-8 sm:p-12 md:p-14 rounded-[3rem] bg-[#FFFDE8] dark:bg-[#360B08] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow relative overflow-hidden transition-colors duration-300 space-y-12">
        
        {/* Header Tag with a discreet cyan status dot */}
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] text-xs font-black font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{data.tag}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 font-mono">
            <Sparkles className="w-4 h-4 text-[#FF8B71]" />
            <span>{data.badgeText}</span>
          </div>
        </div>

        {/* Narrative & Experience Overview */}
        <div className="space-y-6 max-w-4xl">
          <div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight leading-tight mb-3">
              {data.title}
            </h2>
            <div className="inline-block px-3.5 py-1 rounded-xl bg-[#FFFDB6] dark:bg-[#250705] border border-[#FF8B71]/40 text-[#FF8B71] text-xs sm:text-sm font-bold font-mono">
              {data.role}
            </div>
            <p className="text-xs font-mono text-[#470E0B]/60 dark:text-[#FFFDB6]/60 mt-2">
              {data.organization}
            </p>
          </div>

          <p className="text-base sm:text-lg text-[#470E0B]/85 dark:text-[#FFFDB6]/85 leading-relaxed font-medium">
            {data.description}
          </p>
        </div>

        {/* 3 Concrete Field Action Cards */}
        <div>
          <span className="text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 uppercase tracking-wider block mb-4">
            {data.actionsHeading}
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {data.actions.map((action, idx) => {
              const IconComp = actionIcons[idx] || Bot;
              return (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/10 dark:border-[#FFFDB6]/10 space-y-3 transition-all hover:border-[#FF8B71] hover:-translate-y-0.5"
                >
                  <div className="w-10 h-10 rounded-xl bg-[#FFFDE8] dark:bg-[#360B08] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center justify-center shrink-0">
                    <IconComp className="w-5 h-5 text-[#FF8B71]" />
                  </div>
                  <div>
                    <h3 className="text-sm font-black text-[#470E0B] dark:text-[#FFFDB6] leading-snug">
                      {action.title}
                    </h3>
                    <p className="text-xs text-[#470E0B]/80 dark:text-[#FFFDB6]/80 mt-1.5 leading-relaxed font-medium">
                      {action.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Personal Field Photos Gallery (3 Neutral Photo Slots) */}
        <div className="pt-4 border-t border-[#470E0B]/10 dark:border-[#FFFDB6]/10 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF8B71] uppercase tracking-wider">
                <Camera className="w-3.5 h-3.5" />
                <span>{data.galleryHeading}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-[#470E0B] dark:text-[#FFFDB6] mt-1">
                {data.galleryTitle}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-[#470E0B]/75 dark:text-[#FFFDB6]/75 font-medium max-w-lg">
              {data.gallerySubtitle}
            </p>
          </div>

          {/* 3-Photo Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.photos.map((item, idx) => {
              const hasError = imgErrors[item.id];
              const displaySrc = hasError ? `/photo-terrain-${idx + 1}.svg` : item.imageSrc;

              // Framing adjustments tailored to the content of each authentic photo
              const objectPos = idx === 1 ? 'object-[center_18%]' : idx === 2 ? 'object-[center_35%]' : 'object-[center_25%]';

              return (
                <div
                  key={item.id}
                  onClick={() => setActivePhoto(item)}
                  className="group relative rounded-3xl overflow-hidden bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow cursor-pointer transition-all duration-300 hover:border-[#FF8B71] hover:-translate-y-1"
                >
                  {/* Photo Frame with balanced aspect-[4/5] ratio */}
                  <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#FFFDE8] dark:bg-[#360B08]">
                    <img
                      src={displaySrc}
                      alt={item.alt}
                      onError={() => handleImageError(item.id)}
                      className={`w-full h-full object-cover ${objectPos} transition-transform duration-700 group-hover:scale-105`}
                      loading="lazy"
                    />

                    {/* Subtle Expand Indicator on Hover */}
                    <div className="absolute top-3.5 right-3.5 w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-sm">
                      <Maximize2 className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>

      {/* Lightbox Modal when clicking a gallery photo */}
      <AnimatePresence>
        {activePhoto && (
          <div 
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md"
            onClick={() => setActivePhoto(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl max-h-[92vh] bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] rounded-[2.5rem] border-3 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 soft-card-shadow overflow-hidden shadow-2xl flex flex-col"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActivePhoto(null)}
                className="absolute top-4 right-4 z-10 p-2.5 rounded-full bg-black/65 text-white hover:bg-black/85 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Full Image in Native Aspect Ratio */}
              <div className="relative flex-1 w-full bg-black/10 dark:bg-black/50 flex items-center justify-center p-3 sm:p-6 overflow-hidden">
                <img
                  src={imgErrors[activePhoto.id] ? `/${activePhoto.fileName.replace('.jpg', '.svg')}` : activePhoto.imageSrc}
                  alt={activePhoto.alt}
                  className="max-h-[72vh] w-auto max-w-full object-contain rounded-2xl"
                />
              </div>

              {/* Clean Footer Bar */}
              <div className="p-4 sm:p-5 flex items-center justify-between border-t border-[#470E0B]/10 dark:border-[#FFFDB6]/10 shrink-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-[#470E0B] dark:text-[#FFFDB6]">
                    AFRIKEDUTECH
                  </span>
                  <span className="text-xs text-[#470E0B]/60 dark:text-[#FFFDB6]/60">·</span>
                  <span className="text-xs text-[#FF8B71] font-semibold">
                    {language === 'en' ? 'Field Immersion' : 'Immersion sur le terrain'}
                  </span>
                </div>
                <p className="text-xs font-mono text-[#470E0B]/60 dark:text-[#FFFDB6]/60">
                  {language === 'en' ? 'Click outside to close' : 'Cliquer pour fermer'}
                </p>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
