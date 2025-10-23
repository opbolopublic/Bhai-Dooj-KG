import React, { useState, useRef, useEffect } from 'react';
import { PlayIcon } from './PlayIcon';
import { PauseIcon } from './PauseIcon';
import { NextIcon } from './NextIcon';
import { PreviousIcon } from './PreviousIcon';

interface MusicPlayerProps {
  onBack: () => void;
  onNext: () => void;
}

const playlist = [
    { title: 'ishq wala love', src: '/music/music.mp3', image: 'https://cdn.discordapp.com/attachments/809802832014344202/1430740316176122018/Screenshot_2025_1023_073955.jpg?ex=68fae041&is=68f98ec1&hm=6cb69814c56e0b818a77886f8de7bf5fdb3121e48af019e2b4673e15d979dea7&' },
    { title: 'Raataan lamiyan', src: 'music/music2.mp3', image: 'https://cdn.discordapp.com/attachments/809802832014344202/1430740316574711859/Screenshot_20251023_073940.jpg?ex=68fae041&is=68f98ec1&hm=8090b8592bd65cc598c73e2923099d1585dc80237a9af7f2cb1448a11244627d&' },
    { title: 'Luv letter', src: 'music/music3.mp3', image: 'https://cdn.discordapp.com/attachments/809802832014344202/1430740317010923651/Screenshot_20251023_073936.jpg?ex=68fae041&is=68f98ec1&hm=5475f1a5380f636d4f8bcbfb50b9426f4ee28ecdf0ea22e81511ba337a690605&' },
];

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ onBack, onNext }) => {
    const [currentSongIndex, setCurrentSongIndex] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    const audioRef = useRef<HTMLAudioElement>(null);

    const currentSong = playlist[currentSongIndex];

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const setAudioData = () => {
            setDuration(audio.duration);
            setCurrentTime(audio.currentTime);
        }

        const setAudioTime = () => setCurrentTime(audio.currentTime);

        audio.addEventListener('loadeddata', setAudioData);
        audio.addEventListener('timeupdate', setAudioTime);

        if (isPlaying) {
            audio.play().catch(e => console.error("Error playing audio:", e));
        } else {
            audio.pause();
        }

        return () => {
            audio.removeEventListener('loadeddata', setAudioData);
            audio.removeEventListener('timeupdate', setAudioTime);
        }
    }, [isPlaying, currentSongIndex]);

    const togglePlayPause = () => {
        setIsPlaying(!isPlaying);
    };
    
    const handleNextSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex + 1) % playlist.length);
        setIsPlaying(true);
    };

    const handlePrevSong = () => {
        setCurrentSongIndex((prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length);
        setIsPlaying(true);
    };
    
    const handleProgressChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current) {
            audioRef.current.currentTime = Number(e.target.value);
            setCurrentTime(Number(e.target.value));
        }
    };
    
    const formatTime = (time: number) => {
        if (isNaN(time)) return '0:00';
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    return (
        <div className="flex flex-col items-center w-full max-w-md flex-grow justify-center animate-[fadeInUp_0.5s_ease-out]">
            <audio ref={audioRef} src={currentSong.src} onEnded={handleNextSong} preload="metadata"></audio>
            <main className="w-full bg-white rounded-2xl shadow-lg p-6 sm:p-8 text-center opacity-0 animate-[fadeInUp_0.6s_0.2s_ease-out_forwards]">
                <header className="opacity-0 animate-[fadeInUp_0.6s_0.4s_ease-out_forwards]">
                    <h1 className="text-3xl sm:text-4xl text-[#E98FA9] font-playfair">
                        A Few Songs For You <span className="inline-block text-3xl">💕</span>
                    </h1>
                </header>

                <div className="my-6 bg-white rounded-2xl shadow-lg p-3 inline-block opacity-0 animate-[fadeInUp_0.6s_0.6s_ease-out_forwards]">
                    <img
                        src={currentSong.image}
                        alt="Song artwork"
                        className="rounded-lg w-40 h-40 object-cover"
                    />
                </div>

                <div className="w-full max-w-xs mx-auto bg-gray-50 rounded-2xl p-4 shadow-inner opacity-0 animate-[fadeInUp_0.6s_0.8s_ease-out_forwards]">
                    <p className="text-xs text-gray-400 tracking-widest">NOW PLAYING ♪</p>
                    <p className="text-2xl font-playfair text-gray-800 mt-1">{currentSong.title}</p>
                    
                    <div className="mt-4">
                        <input
                            type="range"
                            min="0"
                            max={duration}
                            value={currentTime}
                            onChange={handleProgressChange}
                            className="w-full h-1.5 bg-pink-100 rounded-lg appearance-none cursor-pointer"
                            style={{'--thumb-color': '#E98FA9'} as React.CSSProperties}
                        />
                         <style>{`
                            input[type=range]::-webkit-slider-thumb {
                                -webkit-appearance: none;
                                appearance: none;
                                width: 16px;
                                height: 16px;
                                background: #E98FA9;
                                border-radius: 50%;
                                cursor: pointer;
                                margin-top: -6px;
                            }
                            input[type=range]::-moz-range-thumb {
                                width: 16px;
                                height: 16px;
                                background: #E98FA9;
                                border-radius: 50%;
                                cursor: pointer;
                            }
                        `}</style>
                        <div className="flex justify-between text-xs text-gray-500 mt-1.5">
                            <span>{formatTime(currentTime)}</span>
                            <span>{formatTime(duration)}</span>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-6 mt-4">
                        <button onClick={handlePrevSong} className="text-gray-500 hover:text-[#E98FA9] transition-colors">
                            <PreviousIcon className="w-8 h-8"/>
                        </button>
                        <button onClick={togglePlayPause} className="w-16 h-16 bg-[#FCE8ED] rounded-full flex items-center justify-center text-[#E98FA9] shadow-lg hover:bg-[#F9D4E0] transition-colors">
                            {isPlaying ? <PauseIcon className="w-8 h-8"/> : <PlayIcon className="w-8 h-8"/>}
                        </button>
                         <button onClick={handleNextSong} className="text-gray-500 hover:text-[#E98FA9] transition-colors">
                            <NextIcon className="w-8 h-8"/>
                        </button>
                    </div>
                </div>

            </main>
            <footer className="w-full max-w-md flex justify-between items-center mt-12 mb-6 opacity-0 animate-[fadeInUp_0.6s_1s_ease-out_forwards]">
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
