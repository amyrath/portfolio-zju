'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HeartHandshake, 
  Award, 
  CheckCircle2, 
  X, 
  ExternalLink,
  Laptop,
  Globe,
  Cpu,
  FileCheck
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

export default function EngagementAfrikeductek() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const data = t.afrikedutech;

  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section 
      id="engagement" 
      className="relative py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24"
    >
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/3 w-80 h-80 rounded-full bg-[#FF8B71]/10 blur-3xl pointer-events-none" />

      {/* Main Engagement Card */}
      <div className="p-8 sm:p-12 md:p-14 rounded-[3rem] bg-[#FFFDE8] dark:bg-[#360B08] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow relative overflow-hidden transition-colors duration-300">
        
        {/* Header Tag with a discreet pinch of cyan status dot */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] text-xs font-black font-mono">
            <span className="w-2 h-2 rounded-full bg-cyan-400 shrink-0" />
            <HeartHandshake className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span>{data.tag}</span>
          </div>

          <div className="flex items-center gap-2 text-xs font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 font-mono">
            <Award className="w-4 h-4 text-[#FF8B71]" />
            <span>{data.badgeText}</span>
          </div>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <h2 className="text-3xl sm:text-4xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight leading-tight mb-2">
                {data.title}
              </h2>
              <p className="text-sm sm:text-base font-bold text-[#FF8B71] font-mono">
                {language === 'en' ? 'Role :' : 'Rôle :'} {data.role}
              </p>
              <p className="text-xs font-semibold text-[#470E0B]/60 dark:text-[#FFFDB6]/60 font-mono mt-0.5">
                {data.organization}
              </p>
            </div>

            <p className="text-base text-[#470E0B]/85 dark:text-[#FFFDB6]/85 leading-relaxed font-medium">
              {data.description}
            </p>

            {/* Actions Reelles Grid */}
            <div className="space-y-3 pt-2">
              <span className="text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 uppercase tracking-wider block">
                {data.actionsHeading}
              </span>
              {data.actions.map((action, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/10 dark:border-[#FFFDB6]/10 transition-colors"
                >
                  <div className="w-6 h-6 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm font-semibold text-[#470E0B]/90 dark:text-[#FFFDB6]/90 leading-snug">
                    {action}
                  </span>
                </div>
              ))}
            </div>

            {/* Interactive Certificate Trigger Button */}
            <div className="pt-4 flex flex-wrap gap-4 items-center">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 font-bold text-sm transition-all soft-card-shadow hover:scale-105 active:scale-95 cursor-pointer"
              >
                <Award className="w-4 h-4 text-[#FF8B71]" />
                <span>{data.button}</span>
              </button>

              <span className="text-xs font-mono font-bold text-[#470E0B]/60 dark:text-[#FFFDB6]/60">
                {language === 'en' ? 'Official volunteer certificate' : 'Attestation officielle d’engagement bénévole'}
              </span>
            </div>
          </div>

          {/* Right: Visual Certificate Snapshot Box */}
          <div className="lg:col-span-5 flex justify-center">
            <div 
              onClick={() => setModalOpen(true)}
              className="w-full max-w-sm p-6 rounded-[2.5rem] bg-[#FFFDB6] dark:bg-[#250705] border-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow hover:border-[#FF8B71] transition-all cursor-pointer group hover:-translate-y-1"
            >
              <div className="p-6 rounded-2xl bg-[#FFFDE8] dark:bg-[#360B08] border-2 border-[#470E0B]/10 dark:border-[#FFFDB6]/10 space-y-4 text-center">
                <div className="w-14 h-14 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center justify-center mx-auto shadow-md group-hover:scale-110 transition-transform">
                  <FileCheck className="w-7 h-7 text-[#FF8B71]" />
                </div>
                
                <div className="space-y-1">
                  <span className="text-[10px] font-mono font-bold text-[#470E0B]/60 dark:text-[#FFFDB6]/60 uppercase tracking-widest block">
                    {language === 'en' ? 'Official Attestation' : 'Attestation Officielle'}
                  </span>
                  <h4 className="text-base font-black text-[#470E0B] dark:text-[#FFFDB6]">
                    {data.modal.certTitle}
                  </h4>
                  <p className="text-xs text-[#470E0B]/75 dark:text-[#FFFDB6]/75 font-semibold">
                    AFRIKEDUTECH · {language === 'en' ? 'Digital Inclusion' : 'Inclusion Numérique'}
                  </p>
                </div>

                <div className="pt-2 border-t border-[#470E0B]/10 dark:border-[#FFFDB6]/10 text-xs font-bold text-[#FF8B71] flex items-center justify-center gap-1 group-hover:underline">
                  <span>{data.button}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>

      {/* Interactive Certificate Modal */}
      <AnimatePresence>
        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] rounded-[2.5rem] border-4 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 soft-card-shadow p-6 sm:p-8 overflow-hidden transition-colors"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 transition-opacity cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Modal Body: Official Certificate Layout */}
              <div className="border-3 border-dashed border-[#470E0B]/20 dark:border-[#FFFDB6]/20 p-6 sm:p-8 rounded-3xl space-y-5 bg-[#FFFDB6]/50 dark:bg-[#250705]/50">
                <div className="flex items-center justify-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border-2 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 flex items-center justify-center shadow-md shrink-0">
                    <Award className="w-6 h-6 text-[#FF8B71]" />
                  </div>
                  <div className="text-left">
                    <span className="text-[10px] font-mono font-bold text-[#470E0B]/60 dark:text-[#FFFDB6]/60 uppercase tracking-widest block">
                      {data.modal.orgHeader}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#470E0B] dark:text-[#FFFDB6]">
                      {data.modal.certTitle}
                    </h3>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-white dark:bg-[#220605] border border-[#470E0B]/10 dark:border-[#FFFDB6]/10 space-y-2 text-center">
                  <p className="text-xs font-mono font-semibold text-[#470E0B]/70 dark:text-[#FFFDB6]/70">
                    {data.modal.awardedTo}
                  </p>
                  <p className="text-xl font-black text-[#470E0B] dark:text-[#FFFDB6]">
                    Amyrath CHAKRAN Folabi
                  </p>
                  <p className="text-xs font-mono font-bold text-[#FF8B71]">
                    {data.modal.recipientRole}
                  </p>
                </div>

                <div className="space-y-2 text-xs sm:text-sm text-[#470E0B]/85 dark:text-[#FFFDB6]/85 font-medium leading-relaxed">
                  <p className="font-bold text-[#470E0B] dark:text-[#FFFDB6]">
                    {data.modal.workshopIntro}
                  </p>
                  <ul className="space-y-1.5 pl-2">
                    <li className="flex items-center gap-2">
                      <Laptop className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span>{language === 'en' ? 'Introduction to computer tools and web information retrieval.' : 'Initiation aux outils informatiques et à la recherche documentaire sur le web.'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Globe className="w-3.5 h-3.5 text-blue-500 shrink-0" />
                      <span>{language === 'en' ? 'Discovery of e-services (public services and administrative online procedures).' : 'Découverte des e-services (services publics et démarches administratives en ligne).'}</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#FF8B71] shrink-0" />
                      <span>{language === 'en' ? 'Practical introduction to Artificial Intelligence tools and educational robotics.' : 'Introduction pratique aux outils d’Intelligence Artificielle et robotique éducative.'}</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t border-[#470E0B]/10 dark:border-[#FFFDB6]/10 flex flex-wrap items-center justify-between gap-2 text-xs font-mono font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70">
                  <span>{language === 'en' ? 'Issuing Organization: AFRIKEDUTECH' : 'Entité émettrice : AFRIKEDUTECH'}</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {data.modal.verificationTag}
                  </span>
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setModalOpen(false)}
                  className="px-6 py-2.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] font-bold text-xs hover:opacity-90 transition-opacity cursor-pointer"
                >
                  {data.modal.closeBtn}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </section>
  );
}
