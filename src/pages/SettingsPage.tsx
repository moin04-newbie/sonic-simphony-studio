
import React from 'react';
import { MusicProvider } from '../context/MusicContext';
import Sidebar from '../components/Sidebar';
import { useMusic } from '../context/MusicContext';
import MiniPlayer from '../components/MiniPlayer';
import { Volume2, Award, Shield, Bell, Languages, Download } from 'lucide-react';

const SettingsContent: React.FC = () => {
  return (
    <div className="w-full p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        
        <section className="mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-xl font-semibold">Account</h2>
            </div>
            
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Award className="text-coral" size={20} />
                <span>Subscription</span>
              </div>
              <div>
                <span className="bg-coral/20 text-coral px-3 py-1 rounded-full text-sm">Premium</span>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Shield className="text-teal" size={20} />
                <span>Privacy</span>
              </div>
              <button className="text-sm text-coral">Manage</button>
            </div>
            
            <div className="flex justify-between items-center p-4">
              <div className="flex items-center gap-3">
                <Bell className="text-yellow" size={20} />
                <span>Notifications</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" defaultChecked className="sr-only peer" />
                <div className="w-11 h-6 bg-white/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
              </label>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-xl font-semibold">Preferences</h2>
            </div>
            
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Languages className="text-cyan" size={20} />
                <span>Language</span>
              </div>
              <select className="bg-white/10 py-1 px-3 rounded-full text-sm appearance-none pr-8 relative cursor-pointer">
                <option>English</option>
                <option>Spanish</option>
                <option>French</option>
                <option>German</option>
              </select>
            </div>
            
            <div className="p-4">
              <div className="flex items-center gap-3 mb-2">
                <Volume2 className="text-coral" size={20} />
                <span>Audio Quality</span>
              </div>
              <div className="mt-2">
                <input
                  type="range"
                  min="1"
                  max="3"
                  defaultValue="3"
                  className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-coral"
                />
                <div className="flex justify-between text-xs opacity-70 mt-1">
                  <span>Normal</span>
                  <span>High</span>
                  <span>Ultra</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <section className="mb-8">
          <div className="bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden">
            <div className="p-4 border-b border-white/10">
              <h2 className="text-xl font-semibold">Downloads</h2>
            </div>
            
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <div className="flex items-center gap-3">
                <Download className="text-teal" size={20} />
                <span>Offline Mode</span>
              </div>
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-11 h-6 bg-white/20 rounded-full peer peer-checked:after:translate-x-full after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-coral"></div>
              </label>
            </div>
            
            <div className="p-4">
              <div className="flex items-center justify-between">
                <span>Storage Used</span>
                <span className="text-sm">1.2 GB / 3 GB</span>
              </div>
              <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden mt-2">
                <div className="bg-coral h-2 rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>
          </div>
        </section>
        
        <section>
          <div className="flex justify-between">
            <button className="text-coral hover:underline">Log Out</button>
            <button className="text-gray-500 hover:text-gray-700">Delete Account</button>
          </div>
          <p className="mt-6 text-center text-sm opacity-50">Music App v1.0.0</p>
        </section>
      </div>
    </div>
  );
};

const SettingsPage: React.FC = () => {
  return (
    <MusicProvider>
      <div className="min-h-screen bg-gradient-to-br from-white to-gray-100">
        <div className="flex h-screen overflow-hidden">
          <Sidebar />
          
          <div className="ml-16 md:ml-20 flex-1 flex flex-col h-full overflow-hidden">
            <div className="flex flex-1 overflow-hidden">
              <div className="flex-1 overflow-y-auto">
                <SettingsContent />
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

export default SettingsPage;
