import React from 'react';
import { SparkleIcon } from './SparkleIcon';

interface ThankYouCardProps {
  onBack: () => void;
}

export const ThankYouCard: React.FC<ThankYouCardProps> = ({ onBack }) => {
  return (
    <div className="flex flex-col items-center w-full max-w-md flex-grow justify-center animate-[fadeInUp_0.5s_ease-out]">
      <main className="relative w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
        <header className="flex items-center justify-center gap-3 opacity-0 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
          <SparkleIcon className="w-4 h-4 text-gray-500" />
          <p className="text-gray-500 tracking-widest text-xs font-semibold">FROM YOUR BHAI, WITH LOVE</p>
          <SparkleIcon className="w-4 h-4 text-gray-500" />
        </header>

        <section className="mt-6">
          <h1 className="text-5xl text-[#E98FA9] font-playfair opacity-0 animate-[fadeInUp_0.6s_0.6s_ease-out_forwards]">
            Thank You
          </h1>
          <h2 className="text-2xl font-extrabold text-gray-800 mt-2 tracking-tight opacity-0 animate-[fadeInUp_0.6s_0.8s_ease-out_forwards]">
            FOR ALWAYS BEING THERE <span className="inline-block text-2xl">💖</span>
          </h2>
        </section>

        <section className="mt-6 text-gray-600 leading-relaxed opacity-0 animate-[fadeInUp_0.6s_1s_ease-out_forwards]">
          <p>
            You make every small thing brighter and happier. I'm lucky to have you — thanks for being the sweetest part of my days.
          </p>
        </section>
        
        <div className="relative mt-6 h-12 opacity-0 animate-[fadeInUp_0.6s_1.2s_ease-out_forwards]">
          <p className="font-dancing text-lg text-gray-500">
            made with <span className="text-[#E98FA9]">♥</span>, chocolates & sparkles — always yours
          </p>
           <img
            src="https://cdn.discordapp.com/attachments/809802832014344202/1430617927874252861/93caa2c0ced1cf2811ea071d813dccc9.jpg?ex=68fa6e45&is=68f91cc5&hm=48c9454e6437277c88e50850d8d83b9892c9375231e3ac92e399a23781082018&"
            alt="Cute character"
            className="absolute -bottom-4 right-0 w-20 h-auto"
          />
        </div>
      </main>

      <footer className="w-full max-w-md flex justify-start items-center mt-12 mb-6 opacity-0 animate-[fadeInUp_0.6s_1.4s_ease-out_forwards]">
        <button
          onClick={onBack}
          className="bg-white text-gray-700 font-semibold py-3 px-10 rounded-full text-lg shadow-lg hover:bg-gray-100 transition-colors duration-300"
        >
          ← Back
        </button>
      </footer>
    </div>
  );
};
