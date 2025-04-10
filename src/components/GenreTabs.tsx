
import React from 'react';
import { useMusic } from '../context/MusicContext';
import { cn } from '../lib/utils';
import { genres } from '../data/mockData';

const GenreTabs: React.FC = () => {
  const { selectedGenre, selectGenre } = useMusic();

  return (
    <div className="w-full overflow-x-auto pb-2 flex pl-20">
      <div className="flex space-x-2 px-4">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => selectGenre(genre)}
            className={cn(
              "px-5 py-2 rounded-full whitespace-nowrap transition-all duration-300",
              selectedGenre === genre
                ? "bg-coral text-white shadow-lg font-medium"
                : "bg-white/10 backdrop-blur-md hover:bg-white/20"
            )}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreTabs;
