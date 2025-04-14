
import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useMusic } from '../context/MusicContext';

const MiniPlayer: React.FC = () => {
  const { currentSong, isPlaying, togglePlay, progress } = useMusic();
  
  if (!currentSong) return null;
  
  return (
    <div className="fixed bottom-4 right-4 w-64 h-16 bg-white/10 backdrop-blur-xl rounded-full shadow-lg flex items-center px-2 border border-white/20 z-50">
      <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
        <img 
          src={currentSong.image} 
          alt={currentSong.title} 
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      <div className="flex-1 min-w-0 px-3">
        <h4 className="font-medium text-sm truncate">{currentSong.title}</h4>
        <p className="text-xs opacity-70 truncate">{currentSong.artist}</p>
        
        {/* Miniature waveform */}
        <div className="h-1 w-full rounded-full bg-white/20 mt-1 overflow-hidden">
          <div 
            className="h-full bg-coral rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
      
      <button 
        onClick={togglePlay}
        className="w-8 h-8 rounded-full bg-coral flex items-center justify-center flex-shrink-0"
      >
        {isPlaying ? (
          <Pause size={14} className="text-white" />
        ) : (
          <Play size={14} className="text-white ml-0.5" />
        )}
      </button>
    </div>
  );
};

export default MiniPlayer;
