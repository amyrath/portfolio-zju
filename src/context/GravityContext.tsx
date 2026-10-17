'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

interface GravityContextType {
  isGravityOn: boolean;
  toggleGravity: () => void;
  setGravity: (val: boolean) => void;
  gForceLabel: string;
  soundEnabled: boolean;
  toggleSound: () => void;
  playSound: (type?: 'toggle' | 'hover' | 'click' | 'gravity') => void;
}

const GravityContext = createContext<GravityContextType | undefined>(undefined);

export function GravityProvider({ children }: { children: React.ReactNode }) {
  // Default: Gravity is OFF (Zero-G mode)
  const [isGravityOn, setIsGravityOn] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(false);

  // Web Audio synthesizer for sleek sci-fi micro-interactions
  const playSound = useCallback((type: 'toggle' | 'hover' | 'click' | 'gravity' = 'click') => {
    if (!soundEnabled || typeof window === 'undefined') return;

    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.connect(gain);
      gain.connect(ctx.destination);

      const now = ctx.currentTime;

      if (type === 'gravity') {
        if (!isGravityOn) {
          // Turning gravity ON: pitch drops (snapping to ground)
          osc.frequency.setValueAtTime(480, now);
          osc.frequency.exponentialRampToValueAtTime(140, now + 0.28);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.28);
          osc.start(now);
          osc.stop(now + 0.29);
        } else {
          // Turning gravity OFF: pitch rises (ascending to zero-g)
          osc.frequency.setValueAtTime(180, now);
          osc.frequency.exponentialRampToValueAtTime(640, now + 0.32);
          gain.gain.setValueAtTime(0.08, now);
          gain.gain.exponentialRampToValueAtTime(0.001, now + 0.32);
          osc.start(now);
          osc.stop(now + 0.33);
        }
      } else if (type === 'hover') {
        osc.frequency.setValueAtTime(800, now);
        gain.gain.setValueAtTime(0.02, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
        osc.start(now);
        osc.stop(now + 0.05);
      } else {
        osc.frequency.setValueAtTime(520, now);
        gain.gain.setValueAtTime(0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08);
        osc.start(now);
        osc.stop(now + 0.08);
      }
    } catch {
      // Audio context might be restricted before user gesture
    }
  }, [soundEnabled, isGravityOn]);

  const toggleGravity = () => {
    setIsGravityOn(prev => !prev);
    playSound('gravity');
  };

  const setGravity = (val: boolean) => {
    setIsGravityOn(val);
    playSound('gravity');
  };

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  return (
    <GravityContext.Provider
      value={{
        isGravityOn,
        toggleGravity,
        setGravity,
        gForceLabel: isGravityOn ? '1.00 G (Earth Grid)' : '0.00 G (Zero-G)',
        soundEnabled,
        toggleSound,
        playSound,
      }}
    >
      {children}
    </GravityContext.Provider>
  );
}

export function useGravity() {
  const context = useContext(GravityContext);
  if (!context) {
    throw new Error('useGravity must be used within a GravityProvider');
  }
  return context;
}
