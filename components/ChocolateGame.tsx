import React, { useState } from 'react';
import { CrossIcon } from './CrossIcon';

interface ChocolateGameProps {
  onBack: () => void;
  onNext: () => void;
}

interface GridItemProps {
  children?: React.ReactNode;
  delay: string;
  onClick?: () => void;
  isClickable?: boolean;
}

const GridItem: React.FC<GridItemProps> = ({ children, delay, onClick, isClickable }) => (
  <div
    style={{ animationDelay: delay }}
    className={`aspect-square bg-white border-2 border-[#F9D4E0] rounded-2xl flex items-center justify-center opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] transition-colors ${isClickable ? 'cursor-pointer hover:bg-pink-50' : ''}`}
    onClick={onClick}
  >
    <div className="opacity-0 animate-[fadeInUp_0.4s_0.2s_ease-out_forwards]">
      {children}
    </div>
  </div>
);


export const ChocolateGame: React.FC<ChocolateGameProps> = ({ onBack, onNext }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);

  const handleUnlock = () => {
    if (!isUnlocked) {
      setIsUnlocked(true);
    }
  };

  const gridContent = [
    <span className="text-4xl">🍫</span>,
    <CrossIcon className="w-8 h-8 text-[#E98FA9]" />,
    <CrossIcon className="w-8 h-8 text-[#E98FA9]" />,
    <CrossIcon className="w-8 h-8 text-[#E98FA9]" />,
    null, // Placeholder for the interactive middle item
    <CrossIcon className="w-8 h-8 text-[#E98FA9]" />,
    <CrossIcon className="w-8 h-8 text-[#E98FA9]" />,
    <CrossIcon className="w-8 h-8 text-[#E98FA9]" />,
    <span className="text-4xl">🍫</span>,
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-md flex-grow animate-[fadeInUp_0.5s_ease-out]">
      <main className="flex flex-col items-center w-full flex-grow justify-center">
        <header className="opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards] mb-8">
          <h2 className="text-3xl sm:text-4xl text-[#E98FA9] font-playfair text-center">
            Fill in the blanks to get a chocolate <span className="inline-block translate-y-1">🍫</span>
          </h2>
        </header>

        <div className="relative w-full max-w-xs">
           <div className={`w-full bg-white/50 backdrop-blur-sm p-4 sm:p-5 rounded-2xl shadow-lg transition-all duration-500 ${isUnlocked ? 'shadow-[0_0_25px_rgba(233,143,169,0.7)]' : ''}`}>
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              {gridContent.map((content, index) => (
                <GridItem
                  key={index}
                  delay={`${0.2 + index * 0.05}s`}
                  onClick={index === 4 ? handleUnlock : undefined}
                  isClickable={index === 4 && !isUnlocked}
                >
                  {index === 4 ? (isUnlocked ? <span className="text-4xl">🍫</span> : null) : content}
                </GridItem>
              ))}
            </div>
          </div>
          
          {isUnlocked && (
            <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-2xl flex items-center justify-center p-4 opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
              <p className="text-3xl font-playfair font-bold text-[#E98FA9] text-center leading-tight">
                You successfully<br />unlocked a chocolate<br />treat, yay
              </p>
            </div>
          )}
        </div>

      </main>

      <footer className="w-full max-w-md flex justify-between items-center mt-12 mb-6 opacity-0 animate-[fadeInUp_0.6s_0.8s_ease-out_forwards]">
        <button
          onClick={onBack}
          className="bg-white text-gray-700 font-semibold py-3 px-10 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          ← Back
        </button>
        <button
          onClick={onNext}
          className="bg-[#FCE8ED] text-gray-700 font-semibold py-3 px-10 rounded-full text-lg shadow-lg hover:bg-[#F9D4E0] transition-colors duration-300 animate-pulse-btn"
        >
          Next →
        </button>
      </footer>
    </div>
  );
};