
import React, { createContext, useState, ReactNode, useContext, useRef, useEffect } from 'react';
import { Song, songs, genres, playlists, mostPlayedTrack } from '../data/mockData';

interface MusicContextType {
  currentSong: Song | null;
  isPlaying: boolean;
  selectedGenre: string;
  currentPlaylist: string | null;
  progress: number;
  volume: number;
  lyrics: string[];
  currentLyricIndex: number;
  playSong: (song: Song) => void;
  pauseSong: () => void;
  togglePlay: () => void;
  setProgress: (value: number) => void;
  setVolume: (value: number) => void;
  selectGenre: (genre: string) => void;
  selectPlaylist: (playlistId: string | null) => void;
  nextSong: () => void;
  previousSong: () => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentSong, setCurrentSong] = useState<Song | null>(mostPlayedTrack);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [selectedGenre, setSelectedGenre] = useState<string>("All");
  const [currentPlaylist, setCurrentPlaylist] = useState<string | null>(null);
  const [progress, setProgress] = useState<number>(0);
  const [volume, setVolume] = useState<number>(80);
  const [currentLyricIndex, setCurrentLyricIndex] = useState<number>(0);
  
  // Audio player reference
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  // Initialize audio element
  useEffect(() => {
    audioRef.current = new Audio();
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);
  
  // Handle volume changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume]);
  
  // Handle song changes
  useEffect(() => {
    if (currentSong && audioRef.current) {
      // Check if the song has an audio property
      if (currentSong.audio) {
        audioRef.current.src = currentSong.audio;
        if (isPlaying) {
          audioRef.current.play().catch(error => {
            console.error("Error playing audio:", error);
            setIsPlaying(false);
          });
        }
      } else {
        // If no audio URL is available, just update the UI state
        console.warn(`No audio URL available for song: ${currentSong.title}`);
      }
    }
  }, [currentSong]);
  
  // Handle play/pause state changes
  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play().catch(error => {
          console.error("Error playing audio:", error);
          setIsPlaying(false);
        });
      } else {
        audioRef.current.pause();
      }
    }
  }, [isPlaying]);

  // Mock lyrics display - would be time-based in a real app
  React.useEffect(() => {
    if (isPlaying && currentSong) {
      const interval = setInterval(() => {
        setCurrentLyricIndex((prev) => {
          const next = prev + 1;
          if (next >= currentSong.lyrics.length) return 0;
          return next;
        });
        
        // Update progress for visual effect
        setProgress((prev) => {
          const next = prev + 1;
          if (next >= 100) return 0;
          return next;
        });
      }, 2000);
      
      return () => clearInterval(interval);
    }
  }, [isPlaying, currentSong]);

  const playSong = (song: Song) => {
    setCurrentSong(song);
    setIsPlaying(true);
    setProgress(0);
    setCurrentLyricIndex(0);
  };

  const pauseSong = () => {
    setIsPlaying(false);
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const selectGenre = (genre: string) => {
    setSelectedGenre(genre);
  };

  const selectPlaylist = (playlistId: string | null) => {
    setCurrentPlaylist(playlistId);
  };

  const nextSong = () => {
    // Simplified logic to move to next song
    const allSongs = songs;
    const currentIndex = allSongs.findIndex(s => s.id === currentSong?.id);
    const nextIndex = (currentIndex + 1) % allSongs.length;
    playSong(allSongs[nextIndex]);
  };

  const previousSong = () => {
    // Simplified logic to move to previous song
    const allSongs = songs;
    const currentIndex = allSongs.findIndex(s => s.id === currentSong?.id);
    const prevIndex = (currentIndex - 1 + allSongs.length) % allSongs.length;
    playSong(allSongs[prevIndex]);
  };

  const value = {
    currentSong,
    isPlaying,
    selectedGenre,
    currentPlaylist,
    progress,
    volume,
    lyrics: currentSong?.lyrics || [],
    currentLyricIndex,
    playSong,
    pauseSong,
    togglePlay,
    setProgress,
    setVolume,
    selectGenre,
    selectPlaylist,
    nextSong,
    previousSong
  };

  return (
    <MusicContext.Provider value={value}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};
