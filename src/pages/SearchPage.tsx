
import React, { useState } from 'react';
import { MusicProvider } from '../context/MusicContext';
import Sidebar from '../components/Sidebar';
import { useMusic } from '../context/MusicContext';
import MiniPlayer from '../components/MiniPlayer';
import { songs, Song } from '../data/mockData';
import { Search } from 'lucide-react';

const SearchContent: React.FC = () => {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Song[]>([]);
  const [recentSearches] = useState(['lo-fi beats', 'jazz classics', 'summer hits', 'workout playlist']);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (query.trim()) {
      // Filter songs based on query (title, artist, genre)
      const results = songs.filter(song => 
        song.title.toLowerCase().includes(query.toLowerCase()) || 
        song.artist.toLowerCase().includes(query.toLowerCase()) ||
        song.genre.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  };
  
  const { playSong } = useMusic();
  
  return (
    <div className="w-full p-6">
      <div className="max-w-5xl mx-auto">
        <section className="mb-8">
          <form onSubmit={handleSearch} className="relative">
            <input
              type="text"
              placeholder="Search songs, artists, or genres..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full h-14 bg-white/10 backdrop-blur-sm rounded-xl pl-14 pr-4 outline-none focus:ring-2 focus:ring-coral transition-all duration-300"
            />
            <button 
              type="submit" 
              className="absolute left-4 top-1/2 -translate-y-1/2"
            >
              <Search size={24} className="text-coral" />
            </button>
          </form>
        </section>
        
        {searchResults.length > 0 ? (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {searchResults.map(song => (
                <div 
                  key={song.id}
                  onClick={() => playSong(song)}
                  className="flex items-center p-3 rounded-xl bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-colors duration-300 cursor-pointer group"
                >
                  <div className="w-12 h-12 rounded-md overflow-hidden mr-3">
                    <img src={song.image} alt={song.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium truncate">{song.title}</h3>
                    <p className="text-xs opacity-70 truncate">{song.artist}</p>
                  </div>
                  <div className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button
                      className="w-8 h-8 rounded-full bg-coral flex items-center justify-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="5 3 19 12 5 21 5 3"></polygon>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ) : query ? (
          <div className="text-center py-16">
            <p className="text-xl mb-2">No results found for "{query}"</p>
            <p className="text-sm opacity-70">Try a different search term</p>
          </div>
        ) : (
          <>
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Recent Searches</h2>
              <div className="flex flex-wrap gap-2">
                {recentSearches.map((term, index) => (
                  <button
                    key={index}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm hover:bg-white/20 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>
            </section>
            
            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">Browse Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {['Lo-fi', 'Pop', 'Rock', 'Hip Hop', 'Jazz', 'Electronic', 'Bollywood', '90s Love'].map((genre, index) => (
                  <div
                    key={index}
                    onClick={() => setQuery(genre)}
                    style={{ 
                      background: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.6)), url(${songs.find(s => s.genre.includes(genre))?.image || 'https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17'})` 
                    }}
                    className="aspect-square rounded-xl overflow-hidden bg-center bg-cover flex items-end cursor-pointer hover:scale-[1.02] transition-transform"
                  >
                    <div className="w-full p-4">
                      <h3 className="text-xl font-bold text-white">{genre}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

const SearchPage: React.FC = () => {
  const { isDarkMode } = useMusic();
  
  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="flex dark:bg-gray-900 h-screen overflow-hidden">
        <Sidebar />
        
        <div className="ml-16 md:ml-20 flex-1 flex flex-col h-full overflow-hidden">
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <SearchContent />
            </div>
          </div>
        </div>
        
        <div className="lg:hidden">
          <MiniPlayer />
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
