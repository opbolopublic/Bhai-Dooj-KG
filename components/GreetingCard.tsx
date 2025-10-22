import React from 'react';
import { SparkleIcon } from './SparkleIcon';

interface GreetingCardProps {
  onNext: () => void;
}

export const GreetingCard: React.FC<GreetingCardProps> = ({ onNext }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md flex-grow animate-[fadeInUp_0.5s_ease-out]">
      <main className="flex flex-col items-center w-full flex-grow">
        <header className="mt-8 opacity-0 animate-[fadeInUp_0.6s_ease-out_forwards]">
          <p className="text-gray-500 tracking-[0.2em] text-sm">FOR MY LOVELY</p>
          <div className="flex items-center justify-center gap-3 mt-1">
            <h1 className="text-4xl sm:text-5xl text-[#E98FA9] font-playfair tracking-[0.15em]">SISTER</h1>
            <SparkleIcon className="w-6 h-6 sm:w-8 sm:h-8 text-[#E98FA9]" />
          </div>
        </header>

        <section className="relative mt-40 mb-6 opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
          <h2 className="font-dancing text-8xl sm:text-9xl text-[#F9D4E0] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[95%] w-full">Happy</h2>
          <div className="relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[100%] bg-[#FCE8ED] px-4 py-2 rounded-lg shadow-md -rotate-6 text-gray-700 leading-tight">
              <p className="font-semibold">Bhai</p>
              <p className="font-semibold">Dooj</p>
            </div>
            <h3 className="text-5xl sm:text-6xl font-extrabold tracking-tighter text-gray-800 mt-4">DEAR SIS</h3>
          </div>
        </section>

        <p className="mt-16 text-gray-600 max-w-xs sm:max-w-sm leading-relaxed opacity-0 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
          You've always been my biggest supporter, my secret keeper, and my forever partner-in-crime 👋.
          On this <span className="font-semibold text-[#E98FA9]">Bhai Dooj</span>, I just want you to know how lucky I am to have you as my sister.
        </p>

        <div className="flex items-center gap-4 my-8 opacity-0 animate-[fadeInUp_0.6s_0.6s_ease-out_forwards]">
          <SparkleIcon className="w-5 h-5 text-[#E98FA9]" />
          <SparkleIcon className="w-5 h-5 text-[#E98FA9]" />
          <SparkleIcon className="w-5 h-5 text-[#E98FA9]" />
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-4 w-full max-w-[280px] sm:max-w-xs opacity-0 animate-[fadeInUp_0.6s_0.8s_ease-out_forwards]">
          <img
            src="BhaiDoojV1/img/image1.png"
            alt="Brother and Sister Doodle"
            className="rounded-lg w-full h-auto"
          />
        </div>
      </main>

      <footer className="w-full max-w-md mt-12 mb-6 opacity-0 animate-[fadeInUp_0.6s_1s_ease-out_forwards]">
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
