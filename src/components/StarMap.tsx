import React from 'react';
import { motion } from 'motion/react';
import { MAP_NODES } from '../constants';
import { cn } from '../lib/utils';
import * as LucideIcons from 'lucide-react';

interface StarMapProps {
  onNodeClick: (levelId: string) => void;
  completedLevels: string[];
}

export const StarMap: React.FC<StarMapProps> = ({ onNodeClick, completedLevels }) => {
  return (
    <main 
      className="relative min-h-screen w-full overflow-hidden bg-cover bg-center z-0"
      style={{ 
        backgroundImage: `linear-gradient(rgba(5, 7, 10, 0.4), rgba(5, 7, 10, 0.4)), url(https://www.eso.org/public/archives/images/screen/eso1339e.jpg)`,
      }}
    >
      {/* 移除原本失效的備用層 */}

      {/* Nodes Layer */}
      <div className="absolute inset-0 z-10 p-10 flex items-center justify-center">
        <div className="relative w-full h-full max-w-2xl mx-auto">
          {MAP_NODES.map((node, index) => {
            // @ts-ignore
            const IconComponent = LucideIcons[node.icon.split('-').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('')] || LucideIcons.Circle;
            const isCompleted = completedLevels.includes(node.levelId);
            
            return (
              <motion.div
                key={node.id}
                className={cn(
                  "absolute group",
                  isCompleted ? "cursor-default opacity-60" : "cursor-pointer"
                )}
                style={{ top: node.top, left: node.left }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: isCompleted ? 0.6 : 1 }}
                transition={{ delay: index * 0.1, type: 'spring' }}
                onClick={() => !isCompleted && onNodeClick(node.levelId)}
              >
                <div className={cn(
                  "relative w-12 h-12 md:w-14 md:h-14 rounded-full border border-primary/40 bg-primary/10 flex items-center justify-center cosmic-glow transition-all duration-300",
                  !isCompleted && "group-hover:scale-110 group-hover:bg-primary/20 group-hover:border-primary",
                  node.levelId === 'galaxy-heart' && "w-16 h-16 md:w-20 md:h-20 border-2 border-primary bg-primary/20",
                  isCompleted && "border-emerald-500/50 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.3)]"
                )}>
                  {node.levelId === 'galaxy-heart' && !isCompleted && (
                    <div className="absolute inset-0 rounded-full animate-pulse bg-primary/20 blur-xl" />
                  )}
                  {isCompleted ? (
                    <LucideIcons.CheckCircle2 className="w-6 h-6 md:w-7 md:h-7 text-emerald-500 animate-in fade-in zoom-in" />
                  ) : (
                    <IconComponent className={cn(
                      "w-6 h-6 md:w-7 md:h-7 text-primary transition-all",
                      node.levelId === 'galaxy-heart' && "w-8 h-8 md:w-10 md:h-10"
                    )} />
                  )}
                </div>
                <span className={cn(
                  "absolute top-full left-1/2 -translate-x-1/2 mt-2 whitespace-nowrap font-display text-[10px] md:text-xs tracking-wider drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] font-medium text-primary/80 group-hover:text-primary transition-colors text-center max-w-[120px]",
                  node.levelId === 'galaxy-heart' && "font-bold text-xs uppercase",
                  isCompleted && "text-emerald-500/80"
                )}>
                  {node.label} {isCompleted && '(已探索)'}
                </span>
              </motion.div>
            );
          })}

          {/* Connection Lines (Static Placeholder or SVG Path) */}
          <svg className="absolute inset-0 -z-10 w-full h-full opacity-20 pointer-events-none" viewBox="0 0 100 100" preserveAspectRatio="none">
             <path d="M15,10 L35,25 L60,15 L75,22 L48,38 L10,55 L65,52 L80,68 L30,72 L50,82 L78,88" fill="none" stroke="#22D3EE" strokeDasharray="1,1" strokeWidth="0.2" />
          </svg>
        </div>
      </div>

      {/* Floating UI Overlays - Removed dark vignette for testing */}
    </main>
  );
};
