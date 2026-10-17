'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Video, 
  HeartHandshake, 
  GraduationCap, 
  Terminal, 
  Mail, 
  Copy, 
  Check, 
  ExternalLink, 
  X, 
  Menu,
  RotateCw,
  Sun,
  Moon,
  MessageSquare,
  FileText,
  Download
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';
import Logo from '@/components/Logo';

export default function Navbar() {
  const { language, setLanguage, toggleTheme, isDark, openCvModal } = useApp();
  const t = TRANSLATIONS[language];
  const contactData = t.contactChannels;

  const [mobileOpen, setMobileOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [copiedPersonal, setCopiedPersonal] = useState(false);
  const [copiedAcademic, setCopiedAcademic] = useState(false);

  const handleCopyPersonal = () => {
    navigator.clipboard.writeText(contactData.personalEmail);
    setCopiedPersonal(true);
    setTimeout(() => setCopiedPersonal(false), 2000);
  };

  const handleCopyAcademic = () => {
    navigator.clipboard.writeText(contactData.academicEmail);
    setCopiedAcademic(true);
    setTimeout(() => setCopiedAcademic(false), 2000);
  };

  const handleNameClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('toggle-photo-flip'));
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const navLinks = [
    { href: '#videos', label: t.navbar.links.videos, icon: Video },
    { href: '#engagement', label: t.navbar.links.engagement, icon: HeartHandshake },
    { href: '#study-plan', label: t.navbar.links.studyPlan, icon: GraduationCap },
    { href: '#terminal', label: t.navbar.links.terminal, icon: Terminal },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 px-2 sm:px-6 lg:px-8 pt-3 sm:pt-4">
        <nav className="max-w-6xl mx-auto bg-[#FFFDE8]/95 dark:bg-[#360B08]/95 backdrop-blur-md rounded-full px-3 sm:px-5 py-2 border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow flex items-center justify-between gap-2 flex-nowrap transition-all duration-300">
          
          {/* Brand with Minimalist Camera Iris & Sleek Name */}
          <button 
            type="button"
            onClick={handleNameClick}
            className="flex items-center text-left cursor-pointer focus:outline-none shrink min-w-0"
            title={t.hero.nameBadgePrompt}
          >
            <Logo showText={true} />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-1.5 shrink-0">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-2.5 lg:px-3 py-1.5 rounded-full text-xs font-bold text-[#470E0B]/75 dark:text-[#FFFDB6]/75 hover:text-[#470E0B] dark:hover:text-[#FFFDB6] hover:bg-[#FFFDB6] dark:hover:bg-[#420D09] transition-colors flex items-center gap-1.5 whitespace-nowrap"
              >
                <item.icon className="w-3.5 h-3.5 text-[#470E0B]/60 dark:text-[#FFFDB6]/60" />
                <span>{item.label}</span>
              </a>
            ))}
          </div>

          {/* Controls: Language Switch [ EN | FR ], Theme Toggle, CV Preview, Contact Button */}
          <div className="flex items-center gap-1.5 sm:gap-2 shrink-0">
            
            {/* Language Selector: [ EN | FR ] */}
            <div className="inline-flex items-center p-0.5 sm:p-1 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/20 text-xs font-mono font-bold shrink-0">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setLanguage('en');
                }}
                className={`px-2 sm:px-2.5 py-0.5 rounded-full transition-all cursor-pointer text-[11px] sm:text-xs ${
                  language === 'en'
                    ? 'bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] shadow-sm font-black'
                    : 'text-[#470E0B]/70 dark:text-[#FFFDB6]/70 hover:text-[#470E0B] dark:hover:text-[#FFFDB6]'
                }`}
                title="English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  setLanguage('fr');
                }}
                className={`px-2 sm:px-2.5 py-0.5 rounded-full transition-all cursor-pointer text-[11px] sm:text-xs ${
                  language === 'fr'
                    ? 'bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] shadow-sm font-black'
                    : 'text-[#470E0B]/70 dark:text-[#FFFDB6]/70 hover:text-[#470E0B] dark:hover:text-[#FFFDB6]'
                }`}
                title="Français"
              >
                FR
              </button>
            </div>

            {/* Dark Mode (Day / Night) Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              className="p-1.5 sm:p-2 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/20 text-[#470E0B] dark:text-[#FFFDB6] hover:text-[#FF8B71] transition-all cursor-pointer shrink-0"
              title={t.navbar.themeToggleTitle}
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#FFFDB6]" /> : <Moon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#470E0B]" />}
            </button>

            {/* CV / Resume Interactive In-App Modal Trigger */}
            <button
              type="button"
              onClick={openCvModal}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/20 dark:border-[#FFFDB6]/20 text-[#470E0B] dark:text-[#FFFDB6] hover:border-[#FF8B71] hover:text-[#FF8B71] text-xs font-bold font-mono transition-all soft-card-shadow hover:scale-105 cursor-pointer shrink-0"
              title={language === 'en' ? 'Open Curriculum Vitae' : 'Consulter le Curriculum Vitae'}
            >
              <FileText className="w-3.5 h-3.5 text-[#FF8B71]" />
              <span>{t.navbar.cvBtn}</span>
            </button>

            {/* Contact Modal Trigger */}
            <button
              type="button"
              onClick={() => setContactModalOpen(true)}
              className="inline-flex items-center gap-1 sm:gap-1.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 text-xs font-bold transition-all soft-card-shadow hover:scale-105 cursor-pointer shrink-0"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF8B71]" />
              <span>{t.navbar.contactBtn}</span>
            </button>

            {/* Mobile Menu Toggle (md:hidden) */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-1.5 sm:p-2 rounded-full hover:bg-[#FFFDB6] dark:hover:bg-[#420D09] text-[#470E0B] dark:text-[#FFFDB6] cursor-pointer shrink-0"
              aria-label="Menu"
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </nav>

        {/* Mobile Drawer */}
        {mobileOpen && (
          <div className="md:hidden mt-2 max-w-sm mx-auto bg-[#FFFDE8] dark:bg-[#360B08] rounded-3xl p-4 border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 soft-card-shadow space-y-2 animate-in fade-in slide-in-from-top-2">
            {navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2.5 px-3 py-2 text-sm font-bold text-[#470E0B] dark:text-[#FFFDB6] hover:bg-[#FFFDB6] dark:hover:bg-[#420D09] rounded-xl"
              >
                <item.icon className="w-4 h-4 text-[#470E0B]/60 dark:text-[#FFFDB6]/60" />
                {item.label}
              </a>
            ))}
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                openCvModal();
              }}
              className="w-full text-center py-2.5 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer transition-all hover:border-[#FF8B71] hover:text-[#FF8B71]"
            >
              <FileText className="w-3.5 h-3.5 text-[#FF8B71]" />
              <span>{t.navbar.cvBtn} (PDF)</span>
            </button>
            <button
              type="button"
              onClick={() => {
                setMobileOpen(false);
                setContactModalOpen(true);
              }}
              className="w-full text-center py-2.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] font-bold text-xs flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-3.5 h-3.5 text-[#FF8B71]" />
              <span>{t.navbar.contactBtn} Amyrath</span>
            </button>
          </div>
        )}
      </header>

      {/* Multi-Channel Contact Modal with Both Emails & WhatsApp & LinkedIn */}
      <AnimatePresence>
        {contactModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative w-full max-w-lg bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] rounded-[2.5rem] border-3 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 soft-card-shadow p-6 sm:p-8 space-y-5"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setContactModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] hover:bg-[#FF8B71] hover:text-white transition-colors cursor-pointer"
                aria-label={t.contactModal.close}
              >
                <X className="w-4 h-4" />
              </button>

              <div className="space-y-1">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/20 text-[11px] font-mono font-bold">
                  {/* Micro-pinch of cyan status dot */}
                  <span className="w-2 h-2 rounded-full bg-cyan-400" />
                  <span>{t.contactModal.kicker}</span>
                </div>
                <h3 className="text-2xl font-black text-[#470E0B] dark:text-[#FFFDB6]">
                  {t.contactModal.title}
                </h3>
                <p className="text-xs text-[#470E0B]/75 dark:text-[#FFFDB6]/75 font-medium leading-relaxed">
                  {t.contactModal.subtitle}
                </p>
              </div>

              {/* Canal 1: Email personnel */}
              <div className="p-4 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#470E0B]/80 dark:text-[#FFFDB6]/80">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#FF8B71]" />
                    {contactData.personalEmailLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#470E0B] dark:text-[#FFFDB6] select-all truncate">
                    {contactData.personalEmail}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyPersonal}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 text-xs font-bold transition-all shrink-0 cursor-pointer"
                  >
                    {copiedPersonal ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedPersonal ? contactData.emailCopied : contactData.copyEmail}</span>
                  </button>
                </div>
              </div>

              {/* Canal 2: Email académique */}
              <div className="p-4 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 space-y-2">
                <div className="flex items-center justify-between text-xs font-bold text-[#470E0B]/80 dark:text-[#FFFDB6]/80">
                  <span className="flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-[#470E0B] dark:text-[#FFFDB6]" />
                    {contactData.academicEmailLabel}
                  </span>
                </div>
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs sm:text-sm font-mono font-bold text-[#470E0B] dark:text-[#FFFDB6] select-all truncate">
                    {contactData.academicEmail}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyAcademic}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 text-xs font-bold transition-all shrink-0 cursor-pointer"
                  >
                    {copiedAcademic ? <Check className="w-3 h-3 text-emerald-500" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedAcademic ? contactData.emailCopied : contactData.copyEmail}</span>
                  </button>
                </div>
              </div>

              {/* Précision officielle pour les correspondances */}
              <p className="text-[11px] font-mono text-[#470E0B]/75 dark:text-[#FFFDB6]/75 italic text-center px-2">
                « {contactData.emailNote} »
              </p>

              {/* Canaux Sociaux: LinkedIn & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                {/* LinkedIn */}
                <a
                  href={contactData.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 hover:border-[#FF8B71] flex items-center justify-between gap-2 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#470E0B] dark:text-[#FFFDB6]">
                    <svg className="w-4 h-4 fill-[#0A66C2] shrink-0" viewBox="0 0 24 24">
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.64 1.64 0 1 0 0-3.28 1.64 1.64 0 0 0 0 3.28M5.07 18.5h2.79v-8.37H5.07v8.37z" />
                    </svg>
                    <span>LinkedIn</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#470E0B]/60 dark:text-[#FFFDB6]/60 group-hover:text-[#FF8B71]" />
                </a>

                {/* WhatsApp */}
                <a
                  href={contactData.whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-2xl bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 hover:border-emerald-500 flex items-center justify-between gap-2 transition-colors group"
                >
                  <div className="flex items-center gap-2 text-xs font-bold text-[#470E0B] dark:text-[#FFFDB6]">
                    <MessageSquare className="w-4 h-4 text-[#25D366] shrink-0" />
                    <span>WhatsApp</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 text-[#470E0B]/60 dark:text-[#FFFDB6]/60 group-hover:text-emerald-500" />
                </a>
              </div>

              <div className="pt-2 text-center">
                <button
                  type="button"
                  onClick={() => setContactModalOpen(false)}
                  className="text-xs font-bold text-[#470E0B]/70 dark:text-[#FFFDB6]/70 hover:text-[#470E0B] dark:hover:text-[#FFFDB6] underline cursor-pointer"
                >
                  {t.contactModal.close}
                </button>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
