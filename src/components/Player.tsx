
import React, { useRef, useEffect } from 'react';
import { Play, Pause, SkipForward, SkipBack, Volume2 } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { cn } from '../lib/utils';

const Player: React.FC = () => {
  const { 
    currentSong, 
    isPlaying, 
    togglePlay, 
    progress, 
    volume,
    setVolume,
    nextSong, 
    previousSong,
    lyrics,
    currentLyricIndex
  } = useMusic();
  
  const vinylRef = useRef<HTMLDivElement>(null);
  
  // Rotate vinyl when playing
  useEffect(() => {
    if (vinylRef.current) {
      if (isPlaying) {
        vinylRef.current.style.animationPlayState = 'running';
      } else {
        vinylRef.current.style.animationPlayState = 'paused';
      }
    }
  }, [isPlaying]);

  // Generate random heights for waveform visualization
  const waveformBars = Array.from({ length: 20 }, (_, i) => {
    // Make the bars in the middle taller for a more realistic waveform
    const middle = 10;
    const distance = Math.abs(i - middle);
    const maxHeight = 24;
    const minHeight = 4;
    let height;
    
    if (isPlaying) {
      // When playing, make it more random
      height = Math.max(minHeight, maxHeight - (Math.random() * distance * 3));
    } else {
      // When paused, make a nice curve
      height = Math.max(minHeight, maxHeight - (distance * 2));
    }
    
    // If this part has been played, make it the primary color
    const isPlayed = (i / 20) * 100 <= progress;
    
    return {
      height: `${height}px`,
      isPlayed
    };
  });

  if (!currentSong) return null;

  return (
    <div className="w-full max-w-xs flex flex-col p-4">
      {/* Vinyl Player */}
      <div className="w-full flex justify-center mb-6">
        <div 
          ref={vinylRef}
          className="vinyl-record animate-spin-slow w-48 h-48 relative"
          style={{ animationPlayState: isPlaying ? 'running' : 'paused' }}
        >
          <img 
            src={currentSong.image}
            alt={currentSong.title}
            className="w-1/2 h-1/2 absolute top-1/4 left-1/4 rounded-full object-cover"
          />
        </div>
      </div>
      
      {/* Song Info */}
      <div className="text-center mb-4">
        <h3 className="text-lg font-semibold truncate">{currentSong.title}</h3>
        <p className="text-sm opacity-70 truncate">{currentSong.artist}</p>
      </div>
      
      {/* Lyrics Display */}
      <div className="h-32 overflow-hidden relative mb-6 rounded-xl">
        <div className="absolute inset-0 overflow-y-auto overflow-x-hidden px-2 py-2">
          {lyrics.map((line, index) => (
            <p 
              key={index}
              className={cn(
                "py-1 transition-all duration-300",
                index === currentLyricIndex 
                  ? "text-coral font-medium animate-pulse-glow" 
                  : "opacity-50"
              )}
            >
              {line}
            </p>
          ))}
        </div>
      </div>
      
      {/* Controls */}
      <div className="flex items-center justify-between mb-4">
        <button 
          onClick={previousSong}
          className="w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100"
        >
          <SkipBack size={20} />
        </button>
        
        <button 
          onClick={togglePlay}
          className="w-12 h-12 rounded-full bg-coral flex items-center justify-center"
        >
          {isPlaying ? (
            <Pause size={20} fill="white" className="text-white" />
          ) : (
            <Play size={20} fill="white" className="text-white ml-1" />
          )}
        </button>
        
        <button 
          onClick={nextSong}
          className="w-8 h-8 flex items-center justify-center opacity-70 hover:opacity-100"
        >
          <SkipForward size={20} />
        </button>
      </div>
      
      {/* Waveform Progress */}
      <div className="w-full h-8 flex items-center justify-center">
        {waveformBars.map((bar, index) => (
          <div
            key={index}
            className={cn(
              "waveform-bar mx-0.5 w-1 transition-all duration-100",
              bar.isPlayed ? "bg-coral" : "bg-gray-400"
            )}
            style={{ height: bar.height }}
          ></div>
        ))}
      </div>
      
      {/* Volume Control */}
      <div className="flex items-center mt-4 space-x-2">
        <Volume2 size={16} className="opacity-70" />
        <input
          type="range"
          min="0"
          max="100"
          value={volume}
          onChange={(e) => setVolume(parseInt(e.target.value))}
          className="w-full accent-coral h-1"
        />
      </div>
    </div>
  );
};

export default Player;
