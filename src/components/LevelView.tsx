import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Level, Question } from '../types';
import { cn } from '../lib/utils';
import { ArrowLeft, Rocket, BarChart3, HelpCircle, CheckCircle2, AlertCircle } from 'lucide-react';

interface LevelViewProps {
  level: Level;
  onBack: () => void;
  onComplete: () => void;
}

export const LevelView: React.FC<LevelViewProps> = ({ level, onBack, onComplete }) => {
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showErrors, setShowErrors] = useState<boolean>(false);
  const [completed, setCompleted] = useState<boolean>(false);

  const handleSelectOption = (questionId: string, optionId: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: optionId }));
    setShowErrors(false);
  };

  const handleSubmit = () => {
    const allAnswered = level.questions.every(q => answers[q.id]);
    if (!allAnswered) {
      alert("請完成所有題目後再送出！");
      return;
    }

    const allCorrect = level.questions.every(q => answers[q.id] === q.correctAnswer);
    
    if (allCorrect) {
      setCompleted(true);
      onComplete();
      onBack();
    } else {
      setShowErrors(true);
      const firstError = level.questions.find(q => answers[q.id] !== q.correctAnswer);
      if (firstError) {
        document.getElementById(`q-${firstError.id}`)?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  return (
    <div className="relative min-h-screen flex flex-col bg-surface overflow-x-hidden">
      {/* HUD Header */}
      <header className="fixed top-0 w-full z-[60] bg-[#05070A]/80 backdrop-blur-3xl flex items-center justify-between px-6 py-4 border-b border-primary/10 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        <div className="flex items-center justify-start w-32">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-primary/80 hover:text-primary transition-colors active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden md:inline font-display text-xs tracking-widest uppercase font-bold">Back</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <Rocket className="w-5 h-5 text-primary" />
          <h1 className="text-lg font-bold text-primary drop-shadow-[0_0_8px_rgba(34,211,238,0.6)] font-display tracking-[0.2em] uppercase">QUEST LOG</h1>
        </div>
        <div className="w-32 flex justify-end">
          {/* Spacer */}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-24 pb-40 px-6 max-w-2xl mx-auto w-full flex flex-col">
        {/* Intro Section */}
        <div className="mb-10 space-y-6 text-center">
          <div className="flex flex-col items-center gap-1 mb-2">
             {level.missionObjective && (
               <span className="text-primary-container font-display text-[10px] tracking-widest uppercase opacity-60">
                 {level.missionObjective}
               </span>
             )}
             <h2 className="text-3xl md:text-4xl font-bold font-display text-on-surface tracking-tight">
               {level.title}
             </h2>
             <div className="w-16 h-1 bg-primary/40 rounded-full mt-2" />
          </div>

          <div className="rounded-2xl overflow-hidden shadow-2xl border border-primary/20 aspect-video relative group">
            <img 
              alt={level.title} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
              src={level.heroImage} 
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-16">
          {level.questions.map((question, qIdx) => (
            <section key={question.id} id={`q-${question.id}`} className="space-y-8 scroll-mt-32">
              <div className="flex items-start gap-4 p-6 rounded-xl bg-surface-container/40 border border-primary/5 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                
                <div className="flex flex-col gap-4 relative z-10 w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center font-display font-bold text-xs text-primary">
                        {String(qIdx + 1).padStart(2, '0')}
                      </div>
                      {question.category && (
                        <span className="text-[10px] uppercase tracking-widest text-primary/60 font-display font-bold">
                          {question.category}
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <h3 className="text-lg md:text-xl font-display font-medium leading-relaxed text-on-surface">
                    {question.text}
                    {question.source && (
                      <span className="text-primary-container bg-primary-container/10 px-2 py-0.5 rounded text-sm ml-2 font-normal">
                        ({question.source})
                      </span>
                    )}
                  </h3>
                </div>
              </div>

              <div className="grid gap-3">
                {question.options.map((option) => {
                  const isSelected = answers[question.id] === option.id;
                  const isError = showErrors && isSelected && option.id !== question.correctAnswer;
                  
                  return (
                    <button
                      key={option.id}
                      onClick={() => handleSelectOption(question.id, option.id)}
                      className={cn(
                        "group w-full text-left p-4 rounded-xl transition-all duration-300 border border-primary/10 bg-surface-container/20 flex items-center gap-5",
                        "hover:bg-surface-container-high/40 hover:border-primary/30 active:scale-[0.99]",
                        isSelected && "border-primary bg-primary/10 shadow-[0_0_15px_rgba(34,211,238,0.1)]",
                        isError && "border-red-500/50 bg-red-500/5 shake"
                      )}
                    >
                      <div className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center font-display font-bold text-sm shrink-0 transition-colors uppercase",
                        "bg-surface-container-high text-primary/60 border border-primary/20",
                        isSelected && "bg-primary text-surface-container border-primary"
                      )}>
                        {option.id}
                      </div>
                      <span className={cn(
                        "text-base font-display transition-colors",
                        isSelected ? "text-on-surface font-semibold" : "text-on-surface-variant group-hover:text-on-surface"
                      )}>
                        {option.text}
                      </span>
                      {isSelected && !isError && (
                        <CheckCircle2 className="ml-auto w-5 h-5 text-primary opacity-60" />
                      )}
                      {isError && (
                        <AlertCircle className="ml-auto w-5 h-5 text-red-500" />
                      )}
                    </button>
                  );
                })}
              </div>

              {showErrors && answers[question.id] !== question.correctAnswer && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2 text-red-400 text-sm font-display"
                >
                  <AlertCircle className="w-4 h-4" />
                  第 {qIdx + 1} 題答案不正確，請重新思考。
                </motion.div>
              )}
            </section>
          ))}
        </div>
      </main>

      {/* Persistent Footer CTA */}
      <footer className="fixed bottom-0 left-0 w-full p-6 pb-8 bg-gradient-to-t from-surface via-surface/95 to-transparent z-[60]">
        <div className="max-w-2xl mx-auto">
          <button 
            onClick={handleSubmit}
            disabled={completed}
            className={cn(
              "w-full py-5 rounded-xl font-display font-bold text-lg tracking-[0.3em] uppercase flex items-center justify-center gap-3 transition-all active:scale-[0.98]",
              "shadow-[0_0_30px_rgba(34,211,238,0.2)] hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:brightness-110",
              completed ? "bg-emerald-500 text-white cursor-default" : "bg-primary text-surface font-bold"
            )}
          >
            {completed ? "驗證成功" : "送出"}
            {!completed && <Rocket className="w-5 h-5" />}
          </button>
        </div>
      </footer>
    </div>
  );
};
