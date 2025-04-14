
import React from 'react';
import { MusicProvider } from '../context/MusicContext';
import Sidebar from '../components/Sidebar';
import { useMusic } from '../context/MusicContext';
import MiniPlayer from '../components/MiniPlayer';

const ProfileContent: React.FC = () => {
  return (
    <div className="w-full p-6">
      <div className="max-w-4xl mx-auto">
        <section className="bg-white/20 backdrop-blur-sm rounded-xl p-6 mb-8">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden bg-gradient-to-br from-coral to-teal flex items-center justify-center">
              <span className="text-4xl font-bold text-white">U</span>
            </div>
            
            <div className="text-center sm:text-left">
              <h1 className="text-3xl font-bold mb-2">User Profile</h1>
              <p className="text-lg opacity-70 mb-4">music.lover@example.com</p>
              
              <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
                <span className="px-4 py-1 bg-coral/20 rounded-full text-sm">Premium Member</span>
                <span className="px-4 py-1 bg-teal/20 rounded-full text-sm">Since 2023</span>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Your Stats</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center">
              <span className="text-3xl font-bold text-coral">127</span>
              <span className="text-sm opacity-70">Playlists Created</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center">
              <span className="text-3xl font-bold text-teal">843</span>
              <span className="text-sm opacity-70">Songs Played</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 flex flex-col items-center">
              <span className="text-3xl font-bold text-yellow">52</span>
              <span className="text-sm opacity-70">Hours Listened</span>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">Top Genres</h2>
          <div className="space-y-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Lo-fi</span>
                <span className="text-sm opacity-70">43%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-coral h-2 rounded-full" style={{ width: '43%' }}></div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Pop</span>
                <span className="text-sm opacity-70">27%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-teal h-2 rounded-full" style={{ width: '27%' }}></div>
              </div>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium">Jazz</span>
                <span className="text-sm opacity-70">15%</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                <div className="bg-yellow h-2 rounded-full" style={{ width: '15%' }}></div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold mb-4">Account Settings</h2>
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
            <div className="space-y-6">
              <button className="w-full py-3 bg-coral text-white rounded-lg hover:bg-coral/80 transition-colors">
                Edit Profile
              </button>
              <button className="w-full py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Manage Subscription
              </button>
              <button className="w-full py-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                Privacy Settings
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

const ProfilePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
      <div className="flex h-screen overflow-hidden">
        <Sidebar />
        
        <div className="ml-16 md:ml-20 flex-1 flex flex-col h-full overflow-hidden">
          <div className="flex flex-1 overflow-hidden">
            <div className="flex-1 overflow-y-auto">
              <ProfileContent />
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

export default ProfilePage;
