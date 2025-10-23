import React, { useState } from 'react';
import { ChevronLeftIcon } from './ChevronLeftIcon';
import { ChevronRightIcon } from './ChevronRightIcon';

interface MemoriesProps {
  onBack: () => void;
  onNext: () => void;
}

const memoriesData = [
  {
    src: 'https://cdn.discordapp.com/attachments/809802832014344202/1430614805932277871/cbe16f21c5265efed975e88ce53ff3ea.jpg?ex=68fa6b5d&is=68f919dd&hm=b087acf404f69c5f4373789e47a01fb30ee9ac41c57f210426bff7eb05ba5bb1&',
    caption: 'My Partner in Crime 😊',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/809802832014344202/1430614806225883186/de94c96a8328ca0313c4225ba1f4e0ed.jpg?ex=68fa6b5d&is=68f919dd&hm=821f7dc2eb32dfa2d2617cfce2081d874b8a6f512809f6d8105c6b1a16867af5&',
    caption: 'Always stealing my food! 🍟',
  },
  {
    src: 'https://cdn.discordapp.com/attachments/809802832014344202/1430614806788046988/d6ea845ff9775d6bf19458328f4c39ed.jpg?ex=68fa6b5d&is=68f919dd&hm=7028e0b90c789876a6aa1b7261f68dc6b23b81efb6bdb8f632bc75ecfc88998f&',
    caption: 'Best nap buddy 😴',
  },
];


export const Memories: React.FC<MemoriesProps> = ({ onBack, onNext }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? memoriesData.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === memoriesData.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="flex flex-col items-center w-full max-w-md flex-grow justify-center animate-[fadeInUp_0.5s_ease-out]">
      <main className="w-full bg-white rounded-2xl shadow-lg p-5 sm:p-6 text-center opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
        <header className="opacity-0 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
          <h1 className="text-4xl text-[#E98FA9] font-playfair">
            Our Precious Memories <span className="inline-block text-3xl">📸</span>
          </h1>
        </header>

        <section className="mt-4 text-sm font-semibold text-gray-700 border-y border-gray-200 py-2 flex justify-between items-center px-2 opacity-0 animate-[fadeInUp_0.6s_0.6s_ease-out_forwards]">
          <div>FROM: Bhai 👋</div>
          <div>TO: My Lovely Sister 💖</div>
        </section>

        <section className="mt-4 relative opacity-0 animate-[fadeInUp_0.6s_0.8s_ease-out_forwards]">
          <div className="relative aspect-[4/3] bg-pink-100 rounded-lg shadow-inner overflow-hidden">
            <img 
              src={memoriesData[currentIndex].src} 
              alt="Memory" 
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out"
              key={currentIndex}
            />
            <div className="absolute bottom-0 left-0 right-0 p-2 bg-black/30 text-white text-sm font-semibold backdrop-blur-sm">
              {memoriesData[currentIndex].caption}
            </div>
          </div>
          <button onClick={goToPrevious} className="absolute top-1/2 left-2 -translate-y-1/2 bg-white/70 rounded-full p-1.5 text-gray-700 hover:bg-white transition-all shadow-md">
            <ChevronLeftIcon className="w-5 h-5" />
          </button>
          <button onClick={goToNext} className="absolute top-1/2 right-2 -translate-y-1/2 bg-white/70 rounded-full p-1.5 text-gray-700 hover:bg-white transition-all shadow-md">
            <ChevronRightIcon className="w-5 h-5" />
          </button>
        </section>

        <section className="mt-4 p-3 bg-gray-50 rounded-lg text-sm text-gray-700 opacity-0 animate-[fadeInUp_0.6s_1s_ease-out_forwards]">
           <div className="flex justify-between items-end w-full">
            <div className="text-left">
              <p><span className="font-bold">DATE:</span> Bhai Dooj</p>
              <p><span className="font-bold">VALID FOR:</span> Forever 💫</p>
            </div>
             <p className="font-dancing text-lg text-[#E98FA9]">
                With love, your brother 💖
              </p>
           </div>
        </section>
      </main>

      <footer className="w-full max-w-md flex justify-between items-center mt-12 mb-6 opacity-0 animate-[fadeInUp_0.6s_1.2s_ease-out_forwards]">
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
