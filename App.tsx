import React, { useState } from 'react';
import { ParticleBackground } from './components/ParticleBackground';
import { GreetingCard } from './components/GreetingCard';
import { ChocolateGame } from './components/ChocolateGame';
import { Letter } from './components/Letter';
import { Memories } from './components/Memories';
import { MusicPlayer } from './components/MusicPlayer';
import { ThankYouCard } from './components/ThankYouCard';

const App: React.FC = () => {
  const [scene, setScene] = useState(0);

  const handleNext = () => setScene(prev => (prev < 5 ? prev + 1 : prev));
  const handleBack = () => setScene(prev => (prev > 0 ? prev - 1 : prev));

  return (
    <>
      <ParticleBackground />
      <div className="relative z-10 flex flex-col items-center min-h-screen text-center text-gray-800 p-4 sm:p-6 overflow-x-hidden">
        {scene === 0 && <GreetingCard onNext={handleNext} />}
        {scene === 1 && <ChocolateGame onBack={handleBack} onNext={handleNext} />}
        {scene === 2 && <Letter onBack={handleBack} onNext={handleNext} />}
        {scene === 3 && <Memories onBack={handleBack} onNext={handleNext} />}
        {scene === 4 && <MusicPlayer onBack={handleBack} onNext={handleNext} />}
        {scene === 5 && <ThankYouCard onBack={handleBack} />}
      </div>
    </>
  );
};

export default App;