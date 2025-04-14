
import React from 'react';
import Sidebar from '../components/Sidebar';
import GenreTabs from '../components/GenreTabs';
import MainContent from '../components/MainContent';
import Player from '../components/Player';
import MiniPlayer from '../components/MiniPlayer';
import { MusicProvider } from '../context/MusicContext';

const MainLayout: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        
        <div className="ml-16 md:ml-20 flex-1 flex flex-col h-full overflow-hidden">
          {/* Top genre tabs */}
          <div className="sticky top-0 bg-black/80 backdrop-blur-md z-10 pt-4">
            <GenreTabs />
          </div>
          
          {/* Main content and player layout */}
          <div className="flex flex-1 overflow-hidden">
            {/* Main scrollable area */}
            <div className="flex-1 overflow-y-auto">
              <MainContent />
            </div>
            
            {/* Right player panel */}
            <div className="w-0 lg:w-72 xl:w-80 border-l border-white/20 flex-shrink-0 overflow-auto hidden lg:block">
              <div className="p-4 flex justify-center h-full">
                <Player />
              </div>
            </div>
          </div>
        </div>
        
        {/* Mini player - shown on small screens */}
        <div className="lg:hidden">
          <MiniPlayer />
        </div>
      </div>
    </div>
  );
};

const Index: React.FC = () => {
  // Wrap the MainLayout with MusicProvider here
  return (
    <MusicProvider>
      <MainLayout />
    </MusicProvider>
  );
};

export default Index;
