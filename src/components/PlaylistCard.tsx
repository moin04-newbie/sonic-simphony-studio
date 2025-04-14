
import React from 'react';
import { Play } from 'lucide-react';
import { Playlist, songs } from '../data/mockData';
import { useMusic } from '../context/MusicContext';

interface PlaylistCardProps {
  playlist: Playlist;
}

const PlaylistCard: React.FC<PlaylistCardProps> = ({ playlist }) => {
  const { selectPlaylist, playSong } = useMusic();
  
  const handlePlaylistClick = () => {
    selectPlaylist(playlist.id);
    
    // Play the first song from the playlist
    if (playlist.songs.length > 0) {
      // Find the song object using the ID from the playlist
      const firstSongId = playlist.songs[0];
      const songToPlay = songs.find(song => song.id === firstSongId);
      if (songToPlay) {
        playSong(songToPlay);
      }
    }
  };
  
  return (
    <div 
      className="relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md group cursor-pointer hover:shadow-lg transition-all duration-300 flex flex-col"
      onClick={handlePlaylistClick}
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={playlist.coverImage} 
          alt={playlist.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300" />
        <button 
          className="absolute bottom-3 right-3 w-10 h-10 rounded-full bg-coral flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg transform translate-y-4 group-hover:translate-y-0"
          onClick={(e) => {
            e.stopPropagation();
            if (playlist.songs.length > 0) {
              // Find the song object using the ID from the playlist
              const firstSongId = playlist.songs[0];
              const songToPlay = songs.find(song => song.id === firstSongId);
              if (songToPlay) {
                playSong(songToPlay);
              }
            }
          }}
        >
          <Play size={18} fill="white" className="text-white" />
        </button>
      </div>
      <div className="p-3">
        <h3 className="font-medium text-lg">{playlist.title}</h3>
        <p className="text-sm opacity-70">{playlist.description}</p>
      </div>
    </div>
  );
};

export default PlaylistCard;
