'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  BookOpen, 
  Video, 
  HeartHandshake, 
  ExternalLink, 
  Activity, 
  Mail,
  MessageCircle,
  FileText,
  Download
} from 'lucide-react';
import { useApp } from '@/context/AppContext';
import { TRANSLATIONS } from '@/data/translations';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
  time: string;
}

export default function InteractiveTerminal() {
  const { language, openCvModal } = useApp();
  const t = TRANSLATIONS[language];
  const terminalData = t.terminal;
  const contactData = t.contactChannels;

  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([]);
  const terminalLogsRef = useRef<HTMLDivElement | null>(null);

  const handleCommand = useCallback((cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const now = new Date().toLocaleTimeString(language === 'en' ? 'en-US' : 'fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    if (trimmed === 'clear' || trimmed === 'effacer' || trimmed === 'cls' || trimmed === 'nettoyer') {
      setHistory([]);
      setInputVal('');
      return;
    }

    let resultNode: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
      case 'aide':
      case 'commandes':
      case '?':
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] leading-relaxed">
            <p className="text-[#FF8B71] font-bold text-base">
              {terminalData.availableCmdsHeading}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs sm:text-sm">
              {terminalData.availableCmdsList.map((item, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-[#FF8B71] font-bold">{item.cmd}</span> : {item.desc}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'cv':
      case 'resume':
      case 'curriculum':
      case 'parcours':
        // Trigger in-app modal
        openCvModal();
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] leading-relaxed bg-[#350B08] p-5 rounded-2xl border border-white/15">
            <p className="text-[#FF8B71] font-bold text-base flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#FF8B71]" />
              {terminalData.cvTitle}
            </p>
            <div className="space-y-2 text-xs sm:text-sm">
              {terminalData.cvPillars.map((p, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="font-bold text-[#FF8B71]">{p.label} : </span>
                  <span className="text-white font-medium">{p.text}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={openCvModal}
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-[#FF8B71] hover:text-white underline font-bold transition-colors cursor-pointer"
              >
                <span>{language === 'en' ? '[ Open Interactive CV Viewer ↗ ]' : '[ Ouvrir le visualiseur du CV ↗ ]'}</span>
              </button>
              <a
                href="/cv-amyrath-chakran.pdf"
                download="CV_Amyrath_CHAKRAN.pdf"
                className="inline-flex items-center gap-1 text-xs text-[#FFFDB6]/70 hover:text-white transition-colors cursor-pointer"
              >
                <span>({language === 'en' ? 'Direct PDF Download' : 'Télécharger le PDF'})</span>
                <Download className="w-3 h-3 text-[#FF8B71]" />
              </a>
            </div>
          </div>
        );
        break;

      case 'hobbies':
      case 'passions':
      case 'interets':
      case 'loisirs':
      case 'sport':
      case 'sports':
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] leading-relaxed">
            <p className="text-[#FF8B71] font-bold text-base flex items-center gap-2">
              <Activity className="w-4 h-4 text-[#FF8B71]" />
              {terminalData.hobbiesTitle}
            </p>
            <div className="space-y-2.5">
              {terminalData.hobbiesList.map((item, idx) => (
                <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/10">
                  <p className="font-bold text-white text-sm">
                    {item.title}
                  </p>
                  <p className="text-xs text-[#FFFDB6]/80 mt-1">
                    {item.desc}
                  </p>
                  {item.linkText && item.linkHref && (
                    <div className="pt-2">
                      <a
                        href={item.linkHref}
                        className="inline-flex items-center gap-1.5 text-xs text-[#FF8B71] hover:underline font-bold"
                      >
                        <span>{item.linkText}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        );
        break;

      case 'videos':
      case 'projets':
      case 'projet':
      case 'projects':
      case 'realisations':
      case 'films':
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] leading-relaxed">
            <p className="text-[#FF8B71] font-bold text-base flex items-center gap-2">
              <Video className="w-4 h-4 text-[#FF8B71]" />
              {terminalData.videosTitle}
            </p>
            <div className="space-y-3">
              {/* Project 1 - Facebook */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-white text-sm">
                    {t.videos.project1.number} : {t.videos.project1.title}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#FFFDB6] bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                    {t.videos.project1.organization}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#FF8B71]">
                  {t.videos.exactRoleLabel} {t.videos.project1.role}
                </p>
                <p className="text-xs text-[#FFFDB6]/80">
                  {t.videos.project1.description}
                </p>
                <div className="pt-1.5">
                  <a
                    href={t.videos.project1.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8B71] hover:text-white hover:underline"
                  >
                    <span>{t.videos.project1.button}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

              {/* Project 2 - YouTube */}
              <div className="p-3.5 rounded-xl bg-white/5 border border-white/15 space-y-1.5">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <span className="font-bold text-white text-sm">
                    {t.videos.project2.number} : {t.videos.project2.title}
                  </span>
                  <span className="text-[10px] font-mono font-bold text-[#FFFDB6] bg-white/10 px-2 py-0.5 rounded-full border border-white/10">
                    {t.videos.project2.organization}
                  </span>
                </div>
                <p className="text-xs font-bold text-[#FF8B71]">
                  {t.videos.exactRoleLabel} {t.videos.project2.role}
                </p>
                <p className="text-xs text-[#FFFDB6]/80">
                  {t.videos.project2.description}
                </p>
                <div className="pt-1.5">
                  <a
                    href={t.videos.project2.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF8B71] hover:text-white hover:underline"
                  >
                    <span>{t.videos.project2.button}</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
        break;

      case 'study-plan':
      case 'studyplan':
      case 'recherche':
      case 'proposal':
      case 'zju':
      case 'civiclens':
      case 'plan':
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] bg-[#350B08] p-5 rounded-2xl border border-white/15 leading-relaxed">
            <p className="text-[#FFFDB6] font-black text-base flex items-center gap-2">
              <BookOpen className="w-5 h-5 text-[#FF8B71]" />
              {t.studyPlan.officialTitle}
            </p>
            <p className="text-xs text-[#FFFDB6]/80 font-mono font-bold">
              {t.studyPlan.program}
            </p>
            <p className="text-white font-medium text-xs sm:text-sm">
              <strong className="text-[#FF8B71]">{t.studyPlan.themeLabel} :</strong> {t.studyPlan.theme}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs">
              {t.studyPlan.axes.map((ax) => (
                <div key={ax.number} className="p-2.5 rounded bg-white/5 border border-white/10">
                  <span className="font-bold text-[#FF8B71]">{ax.number}.</span> {ax.title}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#FFFDB6]/70 pt-2 border-t border-white/10">
              {t.studyPlan.university}
            </p>
          </div>
        );
        break;

      case 'afrikedutech':
      case 'engagement':
      case 'formation':
      case 'robotique':
      case 'tech-trainer':
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] leading-relaxed bg-[#350B08] p-5 rounded-2xl border border-white/15">
            <p className="text-[#FFFDB6] font-bold text-base flex items-center gap-2">
              <HeartHandshake className="w-4 h-4 text-[#FF8B71]" />
              {terminalData.afrikedutechTitle}
            </p>
            <p className="text-xs font-mono text-[#FFFDB6]/70">
              {t.afrikedutech.organization}
            </p>
            <p className="text-xs text-[#FF8B71] font-bold">
              {terminalData.afrikedutechRoleLabel} {t.afrikedutech.role}
            </p>
            <p className="text-xs text-white/90">
              {t.afrikedutech.description}
            </p>
            <div className="space-y-1.5 pt-1">
              {t.afrikedutech.actions.map((act, idx) => (
                <div key={idx} className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-xs">
                  <span className="font-bold text-[#FF8B71]">• {act.title} : </span>
                  <span className="text-[#FFFDB6]/90">{act.description}</span>
                </div>
              ))}
            </div>
            <div className="pt-2 border-t border-white/10">
              <a
                href="#engagement"
                className="inline-flex items-center gap-1.5 text-xs text-[#FF8B71] hover:underline font-bold"
              >
                <span>{terminalData.exploreEngagementBtn}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        );
        break;

      case 'contact':
      case 'coordonnees':
      case 'email':
      case 'mail':
        resultNode = (
          <div className="space-y-3 text-sm text-[#FFFDB6] leading-relaxed bg-[#350B08] p-5 rounded-2xl border border-white/15">
            <p className="text-[#FF8B71] font-bold text-base flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#FF8B71]" />
              {terminalData.contactTitle}
            </p>
            
            <div className="space-y-2.5 text-xs sm:text-sm">
              {/* Email 1: Personnel */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs text-[#FFFDB6]/80 font-mono">
                  <span>1. {contactData.personalEmailLabel} :</span>
                </div>
                <a
                  href={`mailto:${contactData.personalEmail}`}
                  className="text-white hover:text-[#FF8B71] underline font-bold font-mono block text-xs sm:text-sm"
                >
                  {contactData.personalEmail}
                </a>
              </div>

              {/* Email 2: Académique */}
              <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 space-y-1">
                <div className="flex items-center justify-between text-xs text-[#FFFDB6]/80 font-mono">
                  <span>2. {contactData.academicEmailLabel} :</span>
                </div>
                <a
                  href={`mailto:${contactData.academicEmail}`}
                  className="text-white hover:text-[#FF8B71] underline font-bold font-mono block text-xs sm:text-sm"
                >
                  {contactData.academicEmail}
                </a>
              </div>

              <p className="text-[11px] font-mono text-[#FFFDB6]/70 italic pt-1">
                « {contactData.emailNote} »
              </p>

              {/* LinkedIn & WhatsApp */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1">
                <div className="flex items-center gap-2">
                  <span className="text-[#FFFDB6]/70 font-mono">3. LinkedIn :</span>
                  <a
                    href={contactData.linkedInUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#FF8B71] underline font-bold inline-flex items-center gap-1"
                  >
                    <span>{contactData.linkedIn}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-[#FFFDB6]/70 font-mono">4. WhatsApp :</span>
                  <a
                    href={contactData.whatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-emerald-400 underline font-bold inline-flex items-center gap-1"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{contactData.whatsApp}</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            <p className="text-xs text-[#FFFDB6]/70 pt-2 border-t border-white/10 font-mono">
              {language === 'en' 
                ? "Candidate for the Master's Degree in Communication and Media · Zhejiang University"
                : "Candidature : Master en Communication & Médias · Université de Zhejiang"}
            </p>
          </div>
        );
        break;

      default:
        resultNode = (
          <div className="text-[#FF8B71] text-sm font-medium">
            {terminalData.unknownCmd} ({language === 'en' ? 'typed' : 'saisi'} : &quot;{trimmed}&quot;).{' '}
            <span 
              className="underline cursor-pointer font-bold text-white hover:text-[#FF8B71]" 
              onClick={() => handleCommand(language === 'en' ? 'help' : 'aide')}
            >
              {language === 'en' ? 'help' : 'aide'}
            </span>
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: cmdStr, output: resultNode, time: now }]);
    setInputVal('');

    // Smooth scroll ONLY the internal terminal container, NOT the window viewport
    setTimeout(() => {
      if (terminalLogsRef.current) {
        terminalLogsRef.current.scrollTop = terminalLogsRef.current.scrollHeight;
      }
    }, 40);
  }, [language, t, terminalData, contactData, openCvModal]);

  // Sync initial welcome message when language changes WITHOUT scrolling the page
  useEffect(() => {
    const now = new Date().toLocaleTimeString(language === 'en' ? 'en-US' : 'fr-FR', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    setHistory([
      {
        command: language === 'en' ? 'welcome' : 'bienvenue',
        time: now,
        output: (
          <div className="space-y-2 text-[#FFFDB6] leading-relaxed">
            <p className="text-[#FF8B71] font-black text-base sm:text-lg">
              {terminalData.welcomeTitle}
            </p>
            <p className="text-sm text-slate-100">
              {terminalData.welcomeMsg}
            </p>
          </div>
        ),
      },
    ]);
  }, [language, terminalData.welcomeTitle, terminalData.welcomeMsg]);

  return (
    <section id="terminal" className="relative py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto scroll-mt-24">
      
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFFDE8] dark:bg-[#360B08] border-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/20 text-[#470E0B] dark:text-[#FFFDB6] text-xs font-bold font-mono soft-card-shadow mb-3 transition-colors">
          <Terminal className="w-4 h-4 text-[#470E0B] dark:text-[#FFFDB6]" />
          <span>{terminalData.kicker}</span>
        </div>
        <h3 className="text-3xl sm:text-5xl font-black text-[#470E0B] dark:text-[#FFFDB6] tracking-tight">
          {terminalData.title}
        </h3>
        <p className="text-sm sm:text-base text-[#470E0B]/80 dark:text-[#FFFDB6]/80 font-semibold mt-2">
          {terminalData.description}
        </p>
      </div>

      {/* Enlarged Terminal Window with Floating Levitation & Anti-shake */}
      <motion.div 
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        className="rounded-[2.5rem] bg-[#470E0B] dark:bg-[#250705] border-4 border-[#470E0B] dark:border-[#FFFDB6]/20 soft-card-shadow overflow-hidden font-mono shadow-2xl transform-gpu [backface-visibility:hidden] [transform:translateZ(0)]"
      >
        
        {/* Terminal Title Bar */}
        <div className="bg-[#350B08] dark:bg-[#1C0504] px-6 py-4 flex items-center justify-between border-b border-white/10">
          <div className="flex items-center gap-3">
            <div className="w-3.5 h-3.5 rounded-full bg-[#FF8B71]" />
            <div className="w-3.5 h-3.5 rounded-full bg-[#FFFDB6]" />
            {/* Pinch of cyan as a tiny 3rd status dot */}
            <div className="w-3.5 h-3.5 rounded-full bg-cyan-400" />
            <span className="ml-3 text-sm font-bold text-[#FFFDB6]/90 hidden sm:inline">
              {terminalData.userPrompt}
            </span>
          </div>

          <span className="text-xs font-mono text-[#FFFDB6]/60 font-semibold">
            {terminalData.interactiveMode}
          </span>
        </div>

        {/* Quick Action Buttons Bar with active language command names */}
        <div className="bg-[#3D0C09] dark:bg-[#220605] px-6 py-3 flex flex-wrap items-center gap-2 border-b border-white/5">
          <span className="text-[#FFFDB6]/60 text-xs font-bold uppercase tracking-wider mr-1">
            {terminalData.shortcutsLabel}
          </span>
          {terminalData.shortcutsList.map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-[#FF8B71] hover:text-[#470E0B] text-[#FFFDB6] font-bold transition-all text-xs cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Terminal Logs & Output (Internal Scroll Container only) */}
        <div 
          ref={terminalLogsRef}
          className="p-6 sm:p-8 space-y-5 h-[420px] overflow-y-auto text-sm sm:text-base text-[#FFFDB6] leading-relaxed"
        >
          {history.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div className="flex items-center gap-2.5 text-xs sm:text-sm font-bold">
                {/* Pinch of cyan on prompt symbol */}
                <span className="text-cyan-400">&gt;</span>
                <span className="text-[#FF8B71]">~</span>
                <span className="text-white">{item.command}</span>
                <span className="text-xs text-[#FFFDB6]/40 ml-auto">{item.time}</span>
              </div>
              <div className="pl-5 border-l-2 border-white/15">{item.output}</div>
            </div>
          ))}
        </div>

        {/* Terminal Input Line */}
        <div className="bg-[#350B08] dark:bg-[#1C0504] px-6 py-4 flex items-center gap-3 border-t border-white/10">
          <span className="text-cyan-400 font-black text-base">&gt;</span>
          <span className="text-[#FF8B71] font-bold text-base">~</span>
          <input
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && inputVal.trim()) {
                handleCommand(inputVal);
              }
            }}
            placeholder={language === 'en' ? 'Type hobbies, videos, study-plan, contact, help...' : 'Tapez passions, projets, recherche, contact, aide...'}
            className="flex-1 bg-transparent text-[#FFFDB6] focus:outline-none placeholder:text-[#FFFDB6]/35 text-sm sm:text-base font-mono"
            autoComplete="off"
            spellCheck="false"
          />
        </div>

      </motion.div>

    </section>
  );
}
