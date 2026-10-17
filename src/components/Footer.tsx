'use client';

import React from 'react';
import { Mail, ArrowUp, MessageCircle } from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

export default function Footer() {
  const { language } = useApp();
  const t = TRANSLATIONS[language];
  const footerData = t.footer;
  const contactData = t.contactChannels;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative mt-24 border-t-3 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 bg-[#FFFDE8] dark:bg-[#360B08] py-14 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand & Personal Quote */}
        <div className="text-center md:text-left space-y-2">
          <div className="text-[#470E0B] dark:text-[#FFFDB6] font-black text-xl tracking-tight flex items-center justify-center md:justify-start gap-2.5">
            <span>Amyrath CHAKRAN Folabi</span>
            <span className="inline-flex items-center gap-1.5 text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/20 text-[#470E0B] dark:text-[#FFFDB6]">
              {/* Micro-pinch of cyan status dot */}
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span>{footerData.candidateBadge}</span>
            </span>
          </div>
          <p className="text-[#470E0B]/80 dark:text-[#FFFDB6]/80 max-w-xl text-xs sm:text-sm font-semibold leading-relaxed italic">
            {footerData.quote}
          </p>
        </div>

        {/* Links & Socials (Email, LinkedIn, WhatsApp + Scroll-to-top) */}
        <div className="flex items-center gap-3">
          {/* Email Personnel */}
          <a
            href={`mailto:${contactData.personalEmail}?cc=${contactData.academicEmail}`}
            aria-label="Email"
            title={`${contactData.personalEmail} / ${contactData.academicEmail}`}
            className="p-3 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] hover:border-[#FF8B71] hover:text-[#FF8B71] transition-all soft-card-shadow"
          >
            <Mail className="w-4 h-4" />
          </a>

          {/* LinkedIn */}
          <a
            href={contactData.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            title="LinkedIn"
            className="p-3 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] hover:border-[#FF8B71] hover:text-[#FF8B71] transition-all soft-card-shadow"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M5.07 18.5h2.79v-8.37H5.07v8.37z" />
            </svg>
          </a>

          {/* WhatsApp */}
          <a
            href={contactData.whatsAppUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            title="WhatsApp"
            className="p-3 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] hover:border-emerald-500 hover:text-emerald-500 transition-all soft-card-shadow"
          >
            <MessageCircle className="w-4 h-4" />
          </a>

          {/* Scroll to Top */}
          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll to top"
            title="Top"
            className="p-3 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 transition-all soft-card-shadow ml-2 cursor-pointer"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>

      <div className="mt-10 pt-6 border-t border-[#470E0B]/10 dark:border-[#FFFDB6]/10 text-center text-xs font-medium text-[#470E0B]/70 dark:text-[#FFFDB6]/70">
        <span>{footerData.footnote}</span>
      </div>
    </footer>
  );
}
