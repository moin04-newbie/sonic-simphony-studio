
import React from 'react';
import { playlists, songs, Song, genreColors } from '../data/mockData';
import { useMusic } from '../context/MusicContext';
import PlaylistCard from './PlaylistCard';
import MostPlayedTrack from './MostPlayedTrack';

const MainContent: React.FC = () => {
  const { selectedGenre } = useMusic();
  
  // Filter songs based on the selected genre
  const filteredSongs = selectedGenre === 'All' 
    ? songs 
    : songs.filter(song => song.genre === selectedGenre);

  // Get background color based on the selected genre
  const genreBackgroundColor = genreColors[selectedGenre] || genreColors['All'];

  return (
    <div 
      className="w-full p-6 transition-all duration-500"
      style={{ 
        background: `linear-gradient(to bottom, ${genreBackgroundColor}40, transparent 70%)` 
      }}
    >
      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {playlists.map(playlist => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </section>
      
      <section>
        <MostPlayedTrack />
      </section>
      
      <section className="mt-8">
        <h2 className="text-2xl font-bold mb-4">
          {selectedGenre === 'All' ? 'All Songs' : `${selectedGenre} Songs`}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredSongs.map(song => (
            <SongCard key={song.id} song={song} />
          ))}
        </div>
      </section>
    </div>
  );
};

interface SongCardProps {
  song: Song;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { playSong, currentSong, isPlaying, togglePlay } = useMusic();
  
  const isCurrentSong = currentSong?.id === song.id;
  
  const handlePlay = () => {
    if (isCurrentSong) {
      togglePlay();
    } else {
      playSong(song);
    }
  };
  
  return (
    <div className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 group">
      <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
        <img 
          src={song.image} 
          alt={song.title} 
          className="w-full h-full object-cover" 
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?q=80&w=300&auto=format&fit=crop";
          }}
        />
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="font-medium truncate">{song.title}</h3>
        <p className="text-xs opacity-70 truncate">{song.artist}</p>
      </div>
      <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <button
          onClick={handlePlay}
          className="w-8 h-8 rounded-full bg-coral flex items-center justify-center"
        >
          {isCurrentSong && isPlaying ? (
            <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="5 3 19 12 5 21 5 3"></polygon>
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default MainContent;
