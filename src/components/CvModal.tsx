'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, FileText, ExternalLink } from 'lucide-react';
import { useApp } from '@/context/AppContext';

export default function CvModal() {
  const { isCvModalOpen, setIsCvModalOpen, language } = useApp();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isCvModalOpen) {
        setIsCvModalOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isCvModalOpen, setIsCvModalOpen]);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (isCvModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isCvModalOpen]);

  return (
    <AnimatePresence>
      {isCvModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/65 backdrop-blur-md transition-all"
          onClick={() => setIsCvModalOpen(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-4xl h-[90vh] bg-[#FFFDE8] dark:bg-[#360B08] text-[#470E0B] dark:text-[#FFFDB6] rounded-3xl border-3 border-[#470E0B]/20 dark:border-[#FFFDB6]/20 soft-card-shadow flex flex-col overflow-hidden shadow-2xl transition-colors"
          >
            {/* Modal Header & Toolbar */}
            <div className="px-5 py-3.5 bg-[#FFFDB6] dark:bg-[#250705] border-b-2 border-[#470E0B]/15 dark:border-[#FFFDB6]/15 flex items-center justify-between gap-3 shrink-0">
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] flex items-center justify-center shrink-0 shadow-sm">
                  <FileText className="w-4 h-4 text-[#FF8B71]" />
                </div>
                <div className="min-w-0">
                  <span className="text-[10px] font-mono font-bold text-[#FF8B71] uppercase tracking-wider block">
                    {language === 'en' ? 'DOCUMENT VIEWER' : 'VISUALISEUR DE DOCUMENT'}
                  </span>
                  <h3 className="text-sm sm:text-base font-black truncate">
                    Curriculum Vitae · Amyrath CHAKRAN Folabi
                  </h3>
                </div>
              </div>

              {/* Action Buttons: Direct Download + External Tab + Close */}
              <div className="flex items-center gap-2 shrink-0">
                <a
                  href="/cv-amyrath-chakran.pdf"
                  download="CV_Amyrath_CHAKRAN.pdf"
                  className="inline-flex items-center gap-1.5 px-3 sm:px-4 py-1.5 rounded-full bg-[#470E0B] text-[#FFFDB6] dark:bg-[#FFFDB6] dark:text-[#470E0B] hover:opacity-90 text-xs font-bold font-mono transition-all soft-card-shadow cursor-pointer"
                  title="Download PDF"
                >
                  <Download className="w-3.5 h-3.5 text-[#FF8B71]" />
                  <span className="hidden sm:inline">Download PDF</span>
                  <span className="sm:hidden">PDF</span>
                </a>

                <a
                  href="/cv-amyrath-chakran.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 sm:p-2 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] hover:bg-[#FF8B71] hover:text-white transition-colors cursor-pointer"
                  title={language === 'en' ? 'Open in new tab' : 'Ouvrir dans un nouvel onglet'}
                >
                  <ExternalLink className="w-4 h-4" />
                </a>

                <button
                  type="button"
                  onClick={() => setIsCvModalOpen(false)}
                  className="p-1.5 sm:p-2 rounded-full bg-[#FFFDB6] dark:bg-[#250705] border border-[#470E0B]/15 dark:border-[#FFFDB6]/15 text-[#470E0B] dark:text-[#FFFDB6] hover:bg-[#FF8B71] hover:text-white transition-colors cursor-pointer"
                  aria-label="Close"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Modal Body: Embedded PDF Document with Clean Border & No Native Toolbar */}
            <div className="flex-1 w-full p-2 sm:p-3 bg-black/5 dark:bg-black/40">
              <iframe
                src="/cv-amyrath-chakran.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                className="w-full h-full border-0 rounded-2xl bg-[#FFFDE8]"
                title="Curriculum Vitae"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
