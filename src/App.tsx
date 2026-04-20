/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { StarMap } from './components/StarMap';
import { LevelView } from './components/LevelView';
import { Level } from './types';
import { LEVELS } from './constants';
import { Globe } from 'lucide-react';
import { cn } from './lib/utils';

export default function App() {
  const [currentLevelId, setCurrentLevelId] = useState<string | null>(null);
  // 讀取進度：一開始先去 localStorage 找有沒有舊紀錄
  const [completedLevels, setCompletedLevels] = useState<string[]>(() => {
    const saved = localStorage.getItem('galaxy_completed');
    return saved ? JSON.parse(saved) : [];
  });

  // 儲存進度：只要 completedLevels 有變化，就自動存進手機裡
  useEffect(() => {
    localStorage.setItem('galaxy_completed', JSON.stringify(completedLevels));
  }, [completedLevels]);
  const [showFinalModal, setShowFinalModal] = useState(false);

  const currentLevel = LEVELS.find((l) => l.id === currentLevelId);
  const isAllCompleted = completedLevels.length === LEVELS.length;

  // 處理 URL Hash 路由：重整網頁時能停留在原本關卡
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (hash && LEVELS.some(l => l.id === hash)) {
        setCurrentLevelId(hash);
      } else {
        setCurrentLevelId(null);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    handleHashChange(); // 初次載入執行一次

    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNodeClick = (levelId: string) => {
    if (completedLevels.includes(levelId)) return;
    window.location.hash = levelId;
  };

  const handleBack = () => {
    window.location.hash = '';
  };

  const handleComplete = (levelId: string) => {
    if (!completedLevels.includes(levelId)) {
      const nextCompleted = [...completedLevels, levelId];
      setCompletedLevels(nextCompleted);

      if (nextCompleted.length === LEVELS.length) {
        setShowFinalModal(true);
      }
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-surface font-sans selection:bg-primary/30">
      {/* Dynamic Background */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-[#05070A]" />
        <div className="absolute top-1/4 -right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 -left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px]" />
      </div>

      <AnimatePresence mode="wait">
        {!currentLevelId ? (
          <motion.div
            key="map"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen w-full"
          >
            {/* Top Bar for Map */}
            <header className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-transparent backdrop-blur-xl shadow-[0_8px_32px_rgba(0,0,0,0.4)] border-b border-white/5">
              <div className="flex items-center gap-3">
                <Globe className="w-6 h-6 text-primary" />
                <h1 className="text-xl md:text-2xl font-bold tracking-widest text-primary drop-shadow-[0_0_8px_rgba(34,211,238,0.8)] font-display uppercase">
                  銀河不可思議之旅
                </h1>
              </div>
              {isAllCompleted && (
                <button 
                  onClick={() => setShowFinalModal(true)}
                  className="px-4 py-2 bg-primary/20 border border-primary text-primary font-bold rounded-lg text-sm shadow-[0_0_10px_rgba(34,211,238,0.3)] animate-pulse"
                >
                  顯示兌換碼
                </button>
              )}
            </header>

            <StarMap onNodeClick={handleNodeClick} completedLevels={completedLevels} />
          </motion.div>
        ) : (
          <motion.div
            key="level"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="min-h-screen w-full bg-surface relative z-50"
          >
            {currentLevel && (
              <LevelView 
                level={currentLevel} 
                onBack={handleBack} 
                onComplete={() => handleComplete(currentLevel.id)} 
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Festive Completion Modal */}
      <AnimatePresence>
        {showFinalModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-[#05070A]/90 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              className="relative max-w-lg w-full bg-surface-container border border-primary/30 p-10 rounded-3xl shadow-[0_0_100px_rgba(34,211,238,0.2)] text-center overflow-hidden"
            >
              <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.1)_0%,transparent_70%)]" />
              
              <div className="flex justify-center mb-6">
                <div className="p-4 rounded-full bg-primary/10 border border-primary/20 cosmic-glow">
                  <Globe className="w-12 h-12 text-primary animate-bounce fill-primary/20" />
                </div>
              </div>

              <h2 className="text-3xl font-display font-bold text-primary mb-4 uppercase tracking-tighter drop-shadow-[0_0_15px_rgba(34,211,238,0.6)]">
                任務圓滿達成！
              </h2>

              <p className="text-lg text-white mb-8 font-sans leading-relaxed">
                恭喜您完成所有的太空探索任務！<br />
                請向服務台出示此畫面，以兌換精美小禮物。
              </p>

              <div className="flex flex-col gap-3">
                <div className="bg-primary/5 border border-primary/20 py-4 px-6 rounded-2xl inline-block mx-auto animate-pulse">
                    <span className="text-primary font-display text-sm tracking-[0.2em] font-bold block mb-1 opacity-60">兌換代碼</span>
                    <span className="text-white font-mono text-xl font-bold tracking-widest">GALAXY-HERO-2026</span>
                </div>
                
                <button 
                  onClick={() => setShowFinalModal(false)}
                  className="mt-6 w-full py-4 bg-primary text-surface font-display font-bold rounded-xl active:scale-[0.98] transition-transform shadow-[0_4px_20px_rgba(34,211,238,0.3)] hover:brightness-110"
                >
                  關閉畫面
                </button>
                <button 
                  onClick={() => {
                    if (confirm('確定要清除所有進度並重新開始嗎？')) {
                      setCompletedLevels([]);
                      setShowFinalModal(false);
                    }
                  }}
                  className="mt-2 w-full py-3 text-white/50 text-sm hover:text-white transition-colors"
                >
                  清除紀錄並重新開始
                </button>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-secondary/10 blur-3xl rounded-full" />
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-primary/10 blur-3xl rounded-full" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
