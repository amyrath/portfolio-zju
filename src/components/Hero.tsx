'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video, GraduationCap, ArrowRight, RotateCw, HeartHandshake, Film, FileText } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

export default function Hero() {
  const { language, openCvModal } = useApp();
  const t = TRANSLATIONS[language];

  const [imgErrorFront, setImgErrorFront] = useState(false);
  const [imgErrorBack, setImgErrorBack] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  // Listen for global photo flip event triggered from anywhere (e.g. clicking name in Navbar)
  useEffect(() => {
    const handleFlipEvent = () => {
      setIsFlipped((prev) => !prev);
    };
    window.addEventListener('toggle-photo-flip', handleFlipEvent);
    return () => {
      window.removeEventListener('toggle-photo-flip', handleFlipEvent);
    };
  }, []);

  const handleToggleFlip = () => {
    setIsFlipped((prev) => !prev);
  };

  return (
    <section className="relative min-h-[92vh] pt-36 sm:pt-42 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col justify-center items-center overflow-hidden">
      
      {/* Warm Ambient Floating Blobs Background */}
      <div className="absolute top-16 left-8 w-44 h-44 rounded-full bg-[#FF8B71]/15 blur-2xl pointer-events-none" />
      <div className="absolute top-40 right-10 w-56 h-56 rounded-full bg-[#FFFDB6]/40 dark:bg-[#420D09]/40 blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-48 h-48 rounded-full bg-[#FF8B71]/10 blur-2xl pointer-events-none" />

      {/* Official Academic Program Kicker with a tiny discreet cyan status dot */}
      <motion.div 
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] text-xs font-bold font-mono soft-card-shadow mb-8 text-center max-w-3xl"
      >
        <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" title="Active Candidate" />
        <GraduationCap className="w-4 h-4 text-[#470E0B] dark:text-[#FFFDB6] shrink-0" />
        <span className="leading-snug">{t.hero.programBadge}</span>
      </motion.div>

      {/* Main Grid: Interactive Bouncing Title & 3D Flippable Photo Frame */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        {/* Left Column: Interactive Title & Intro */}
        <div className="lg:col-span-7 text-center lg:text-left space-y-6">
          
          {/* Interactive Full Name Badge (Triggers 3D Flip of Photo on Click) */}
          <div className="flex justify-center lg:justify-start">
            <button
              type="button"
              onClick={handleToggleFlip}
              className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-2xl bg-[#FFFDE8] dark:bg-[#360B08] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 hover:border-[#FF8B71] soft-card-shadow transition-all duration-300 cursor-pointer"
              title={t.hero.nameBadgePrompt}
            >
              <div className="w-7 h-7 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] font-bold text-xs flex items-center justify-center group-hover:scale-110 transition-transform">
                <RotateCw className={`w-3.5 h-3.5 transition-transform duration-500 ${isFlipped ? 'rotate-180 text-[#FF8B71]' : ''}`} />
              </div>
              <span className="text-sm sm:text-base font-black text-[#470E0B] dark:text-[#FFFDB6] group-hover:text-[#FF8B71] transition-colors">
                Amyrath CHAKRAN Folabi
              </span>
              <span className="text-[11px] font-mono text-[#470E0B]/70 dark:text-[#FFFDB6]/70 font-semibold bg-[#FFFDB6] dark:bg-[#250705] px-2 py-0.5 rounded-full border border-[#470E0B]/15 dark:border-[#FFFDB6]/15">
                {isFlipped ? t.hero.nameBadgeActive : t.hero.nameBadgePrompt}
              </span>
            </button>
          </div>

          {/* Dynamic Interactive Bouncing Title */}
          {/* PURPLE RULE: ONLY the word "Visual" receives #8B5CF6! */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight leading-[1.06] flex flex-wrap justify-center lg:justify-start gap-x-3.5 gap-y-1">
            {t.hero.titleWords.map((item, idx) => {
              // Accent rule: "Technologist" is Peach #FF8B71, "Visual" is the ONLY Purple #8B5CF6
              let wordColor = undefined;
              let customStyle: React.CSSProperties = {};
              if (item.text === 'Technologist') wordColor = '#FF8B71';
              if (item.isAccent) wordColor = '#8B5CF6';
              if (wordColor) customStyle.color = wordColor;

              return (
                <motion.span
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.08,
                    type: 'spring',
                    stiffness: 140,
                  }}
                  whileHover={{ scale: 1.09, rotate: idx % 2 === 0 ? 3 : -3 }}
                  style={customStyle}
                  className="inline-block cursor-default select-none transition-transform"
                >
                  {item.text}
                </motion.span>
              );
            })}
          </h1>

          {/* Catchphrase */}
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="text-lg sm:text-xl font-semibold text-[#470E0B] dark:text-[#FFFDB6] leading-relaxed max-w-2xl mx-auto lg:mx-0"
          >
            {t.hero.subtitle}
          </motion.p>

          <p className="text-sm sm:text-base text-[#470E0B]/75 dark:text-[#FFFDB6]/75 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0">
            {t.hero.intro}
          </p>

          {/* Direct CTA Buttons */}
          <div className="pt-2 flex flex-wrap justify-center lg:justify-start items-center gap-3.5">
            <a
              href="#videos"
              className="px-6 py-3.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 font-bold text-sm transition-all soft-card-shadow flex items-center gap-2.5 hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Video className="w-4 h-4 text-[#FF8B71]" />
              <span>{t.hero.ctaVideos}</span>
            </a>

            <a
              href="#study-plan"
              className="px-6 py-3.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] hover:bg-[#FFFDB6] dark:hover:bg-[#420D09] font-bold text-sm transition-all border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow flex items-center gap-2 hover:scale-105 cursor-pointer"
            >
              <GraduationCap className="w-4 h-4 text-[#470E0B] dark:text-[#FFFDB6]" />
              <span>{t.hero.ctaStudyPlan}</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            {/* Open Full Resume (PDF) in Interactive In-App Modal */}
            <button
              type="button"
              onClick={openCvModal}
              className="px-6 py-3.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] hover:bg-[#FFFDB6] dark:hover:bg-[#420D09] hover:border-[#FF8B71] font-bold text-sm transition-all border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow flex items-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
              title={language === 'en' ? 'View Curriculum Vitae (PDF)' : 'Consulter le CV (PDF)'}
            >
              <FileText className="w-4 h-4 text-[#FF8B71]" />
              <span>{t.hero.ctaCv}</span>
            </button>
          </div>

          {/* Clean Focus Badges */}
          <div className="pt-3 flex flex-wrap justify-center lg:justify-start gap-2 text-xs font-bold text-[#470E0B] dark:text-[#FFFDB6]">
            <span className="px-3.5 py-1.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center gap-1.5 shadow-sm">
              <Film className="w-3.5 h-3.5 text-[#FF8B71]" />
              {t.hero.badges.artDirection}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center gap-1.5 shadow-sm">
              <Video className="w-3.5 h-3.5 text-[#470E0B] dark:text-[#FFFDB6]" />
              {t.hero.badges.impactFilm}
            </span>
            <span className="px-3.5 py-1.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center gap-1.5 shadow-sm">
              <HeartHandshake className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              {t.hero.badges.afrikedutech}
            </span>
          </div>

        </div>

        {/* Right Column: Weightless Levitation (Framer Motion Y loop) + 3D Flippable Photo Frame */}
        <div className="lg:col-span-5 flex justify-center [perspective:1200px]">
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]"
          >
            <motion.div
              onClick={handleToggleFlip}
              animate={{ rotateY: isFlipped ? 180 : 0 }}
              transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[290px] sm:w-[340px] cursor-pointer [transform-style:preserve-3d]"
              title={t.hero.photo.frontHint}
            >
              {/* FRONT FACE OF PHOTO FRAME (Terracotta/Warm background portrait) */}
              <div 
                className={`w-full p-4 bg-[#FFFDE8] dark:bg-[#360B08] rounded-[2.5rem] border-3 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 soft-card-shadow [backface-visibility:hidden] [transform:translateZ(0)] transition-all duration-300 ${
                  !isFlipped ? 'hover:border-[#FF8B71]' : ''
                }`}
              >
                <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/10 dark:border-[#FFFDB6]/10">
                  <img
                    src={imgErrorFront ? '/me.svg' : '/amyrath_front.jpg'}
                    alt="Amyrath CHAKRAN Folabi"
                    onError={() => setImgErrorFront(true)}
                    className="w-full h-full object-cover object-[center_15%] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-4 px-2 py-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-[#470E0B] dark:text-[#FFFDB6] text-base leading-tight">
                      Amyrath CHAKRAN Folabi
                    </h3>
                    <p className="text-xs text-[#470E0B]/70 dark:text-[#FFFDB6]/70 font-semibold mt-0.5">
                      {t.hero.photo.frontRole}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] flex items-center justify-center font-bold text-xs shadow-inner">
                    <RotateCw className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

              {/* BACK FACE OF PHOTO FRAME (Beach photo with camera bag) */}
              <div 
                className="absolute inset-0 w-full p-4 bg-[#FFFDE8] dark:bg-[#360B08] rounded-[2.5rem] border-3 border-[#470E0B]/25 dark:border-[#FFFDB6]/25 hover:border-[#FF8B71] soft-card-shadow [transform:rotateY(180deg)_translateZ(0)] [backface-visibility:hidden]"
              >
                <div className="relative w-full aspect-[3/4] rounded-[2rem] overflow-hidden bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/10 dark:border-[#FFFDB6]/10">
                  <img
                    src={imgErrorBack ? '/me-back.svg' : '/amyrath_back.jpg'}
                    alt="Amyrath CHAKRAN Folabi - Direction & Cinematography"
                    onError={() => setImgErrorBack(true)}
                    className="w-full h-full object-cover object-[center_30%] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-4 px-2 py-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-black text-[#470E0B] dark:text-[#FFFDB6] text-base leading-tight">
                      {t.hero.photo.backTitle}
                    </h3>
                    <p className="text-xs text-[#FF8B71] font-bold mt-0.5 font-mono">
                      {t.hero.photo.backRole}
                    </p>
                  </div>
                  <div className="w-7 h-7 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] flex items-center justify-center font-bold text-xs shadow-inner">
                    <Film className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>

            </motion.div>
          </motion.div>
        </div>

      </div>

    </section>
  );
}
