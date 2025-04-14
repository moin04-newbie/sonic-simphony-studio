
import React, { useState } from 'react';
import { MusicProvider } from '../context/MusicContext';
import Sidebar from '../components/Sidebar';
import { useMusic } from '../context/MusicContext';
import MiniPlayer from '../components/MiniPlayer';
import { playlists, songs, Song } from '../data/mockData';
import { PlusCircle, List, Grid, Heart, Clock } from 'lucide-react';

const LibraryContent: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'playlists' | 'favorites' | 'recent'>('playlists');
  
  const { playSong } = useMusic();
  
  return (
    <div className="w-full p-6">
      <div className="max-w-6xl mx-auto">
        <section className="mb-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
            <h1 className="text-3xl font-bold">Your Library</h1>
            
            <div className="flex gap-3">
              <button className="px-4 py-2 bg-coral text-white rounded-lg flex items-center gap-2 hover:bg-coral/80 transition-colors">
                <PlusCircle size={18} />
                <span>New Playlist</span>
              </button>
              <div className="flex bg-white/10 backdrop-blur-md rounded-lg overflow-hidden">
                <button 
                  onClick={() => setViewMode('grid')} 
                  className={`p-2 ${viewMode === 'grid' ? 'bg-coral text-white' : 'hover:bg-white/5'}`}
                >
                  <Grid size={20} />
                </button>
                <button 
                  onClick={() => setViewMode('list')} 
                  className={`p-2 ${viewMode === 'list' ? 'bg-coral text-white' : 'hover:bg-white/5'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex border-b border-white/10 mb-6">
            <button
              onClick={() => setActiveTab('playlists')}
              className={`px-4 py-3 font-medium ${activeTab === 'playlists' ? 'text-coral border-b-2 border-coral' : 'text-white/70 hover:text-white'}`}
            >
              Playlists
            </button>
            <button
              onClick={() => setActiveTab('favorites')}
              className={`px-4 py-3 font-medium ${activeTab === 'favorites' ? 'text-coral border-b-2 border-coral' : 'text-white/70 hover:text-white'}`}
            >
              Favorites
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-4 py-3 font-medium ${activeTab === 'recent' ? 'text-coral border-b-2 border-coral' : 'text-white/70 hover:text-white'}`}
            >
              Recently Played
            </button>
          </div>
          
          {activeTab === 'playlists' && (
            viewMode === 'grid' ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                {playlists.map(playlist => (
                  <div 
                    key={playlist.id} 
                    className="flex flex-col rounded-xl bg-white/5 backdrop-blur-sm overflow-hidden hover:bg-white/10 transition-colors"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={playlist.coverImage} 
                        alt={playlist.title} 
                        className="w-full h-full object-cover transition-transform hover:scale-110 duration-700"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-3">
                      <h3 className="font-medium">{playlist.title}</h3>
                      <p className="text-xs opacity-70">{playlist.songs.length} songs</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
                {playlists.map((playlist, index) => (
                  <div 
                    key={playlist.id} 
                    className={`flex items-center p-4 hover:bg-white/5 transition-colors ${index !== playlists.length - 1 ? 'border-b border-white/10' : ''}`}
                  >
                    <div className="w-12 h-12 rounded overflow-hidden mr-4">
                      <img 
                        src={playlist.coverImage} 
                        alt={playlist.title} 
                        className="w-full h-full object-cover" 
                        loading="lazy"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium">{playlist.title}</h3>
                      <p className="text-xs opacity-70">{playlist.description}</p>
                    </div>
                    <div className="text-sm opacity-70">{playlist.songs.length} songs</div>
                  </div>
                ))}
              </div>
            )
          )}
          
          {activeTab === 'favorites' && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              {songs.slice(0, 5).map((song, index) => (
                <div 
                  key={song.id}
                  onClick={() => playSong(song)}
                  className={`flex items-center p-4 hover:bg-white/5 transition-colors cursor-pointer ${index !== 4 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="w-8 text-center mr-4 opacity-70">{index + 1}</div>
                  <div className="w-12 h-12 rounded overflow-hidden mr-4">
                    <img 
                      src={song.image} 
                      alt={song.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{song.title}</h3>
                    <p className="text-xs opacity-70">{song.artist}</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <button className="text-coral">
                      <Heart size={18} fill="#FF7043" />
                    </button>
                    <div className="text-sm opacity-70">{song.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
          
          {activeTab === 'recent' && (
            <div className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden">
              {songs.slice(3, 8).map((song, index) => (
                <div 
                  key={song.id}
                  onClick={() => playSong(song)}
                  className={`flex items-center p-4 hover:bg-white/5 transition-colors cursor-pointer ${index !== 4 ? 'border-b border-white/10' : ''}`}
                >
                  <div className="w-8 text-center mr-4 opacity-70 flex items-center justify-center">
                    <Clock size={16} />
                  </div>
                  <div className="w-12 h-12 rounded overflow-hidden mr-4">
                    <img 
                      src={song.image} 
                      alt={song.title} 
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium">{song.title}</h3>
                    <p className="text-xs opacity-70">{song.artist}</p>
                  </div>
                  <div className="flex items-center">
                    <div className="text-sm opacity-70">{song.duration}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

const LibraryPage: React.FC = () => {
  return (
    <MusicProvider>
      <div className="min-h-screen bg-gradient-to-br from-[#F5F7FA] to-[#E4EBF5]">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          
          <div className="ml-16 md:ml-20 flex-1 flex flex-col h-full overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto">
                <LibraryContent />
              </div>
            </div>
          </div>
          
          <div className="lg:hidden">
            <MiniPlayer />
          </div>
        </div>
      </div>
    </MusicProvider>
  );
};

export default LibraryPage;
