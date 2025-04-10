
import React from 'react';
import { Home, Search, Library, Settings, Moon, Sun } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { cn } from '../lib/utils';

const Sidebar: React.FC = () => {
  const { isDarkMode, toggleDarkMode } = useMusic();

  return (
    <div className="h-full w-16 md:w-20 bg-sidebar fixed left-0 top-0 bottom-0 flex flex-col items-center py-6 text-sidebar-foreground z-10">
      <div className="mb-10">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-coral">
          <span className="font-bold text-lg text-white">M</span>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col items-center space-y-8">
        <SidebarIcon icon={<Home size={24} />} label="Home" active />
        <SidebarIcon icon={<Search size={24} />} label="Search" />
        <SidebarIcon icon={<Library size={24} />} label="Library" />
        <SidebarIcon icon={<Settings size={24} />} label="Settings" />
      </nav>
      
      <button
        onClick={toggleDarkMode}
        className="mt-auto mb-6 p-3 rounded-full hover:bg-sidebar-accent transition-colors duration-300"
        aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      >
        {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
      </button>
    </div>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, label, active = false }) => {
  return (
    <div className="flex flex-col items-center">
      <button 
        className={cn(
          "p-3 rounded-full transition-colors duration-300 relative",
          active ? "bg-coral text-white" : "hover:bg-sidebar-accent text-sidebar-foreground"
        )}
        aria-label={label}
      >
        {icon}
        {active && (
          <span className="absolute -right-1 top-1/2 -translate-y-1/2 w-1 h-8 bg-coral rounded-full" />
        )}
      </button>
      <span className="text-xs mt-1 opacity-70">{label}</span>
    </div>
  );
};

export default Sidebar;
