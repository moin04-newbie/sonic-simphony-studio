
import React from 'react';
import { Play, Pause } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { mostPlayedTrack } from '../data/mockData';

const MostPlayedTrack: React.FC = () => {
  const { currentSong, isPlaying, playSong, togglePlay } = useMusic();
  
  const isMostPlayedPlaying = 
    isPlaying && currentSong?.id === mostPlayedTrack.id;

  const handlePlayClick = () => {
    if (currentSong?.id === mostPlayedTrack.id) {
      togglePlay();
    } else {
      playSong(mostPlayedTrack);
    }
  };

  return (
    <div className="w-full bg-gradient-to-r from-coral to-teal rounded-xl p-5 text-white flex flex-col md:flex-row items-center md:items-start gap-6 mt-6">
      <div className="relative rounded-xl overflow-hidden w-36 h-36 md:w-44 md:h-44 shadow-xl">
        <img 
          src={mostPlayedTrack.image} 
          alt={mostPlayedTrack.title}
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      
      <div className="flex flex-col flex-grow">
        <div className="mb-2">
          <div className="inline-block px-3 py-1 bg-black/30 rounded-full text-xs mb-3">
            Most Played Track This Week
          </div>
          <h2 className="text-2xl md:text-3xl font-bold">{mostPlayedTrack.title}</h2>
          <p className="text-sm md:text-base opacity-80">
            {mostPlayedTrack.artist} • {mostPlayedTrack.album} • {mostPlayedTrack.year}
          </p>
        </div>
        
        <div className="mt-auto flex items-center gap-4">
          <button 
            onClick={handlePlayClick}
            className="w-12 h-12 rounded-full bg-white flex items-center justify-center shadow-lg"
          >
            {isMostPlayedPlaying ? (
              <Pause size={20} className="text-coral" />
            ) : (
              <Play size={20} className="text-coral ml-1" />
            )}
          </button>
          
          <div className="text-xs opacity-80">
            {mostPlayedTrack.genre} • {mostPlayedTrack.duration}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MostPlayedTrack;
