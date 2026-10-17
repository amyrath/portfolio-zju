import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import VideoProjects from '@/components/VideoProjects';
import EngagementAfrikeductek from '@/components/EngagementAfrikeductek';
import StudyPlanZJU from '@/components/StudyPlanZJU';
import InteractiveTerminal from '@/components/InteractiveTerminal';
import Footer from '@/components/Footer';
import CvModal from '@/components/CvModal';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFFDB6] text-[#470E0B] dark:bg-[#250705] dark:text-[#FFFDB6] transition-colors duration-300">
      
      {/* Navigation Pill Bar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10 flex flex-col space-y-6">
        {/* Hero Section with Interactive Full Name & Floating Photo Frame */}
        <Hero />

        {/* 2 Floating Video Windows */}
        <VideoProjects />

        {/* Impact & Field Engagement: Afrikedutech */}
        <EngagementAfrikeductek />

        {/* Study Plan: CivicLens */}
        <StudyPlanZJU />

        {/* Accessible Creative Terminal */}
        <InteractiveTerminal />
      </main>

      {/* Creative Footer */}
      <Footer />

      {/* In-App Interactive CV Viewer Modal */}
      <CvModal />
      
    </div>
  );
}
