
import React from 'react';
import { Home, Search, Library, Settings, User } from 'lucide-react';
import { useMusic } from '../context/MusicContext';
import { cn } from '../lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Sidebar: React.FC = () => {
  const location = useLocation();

  return (
    <div className="h-full w-16 md:w-20 bg-sidebar fixed left-0 top-0 bottom-0 flex flex-col items-center py-6 text-sidebar-foreground z-10">
      <div className="mb-10">
        <div className="w-10 h-10 rounded-full flex items-center justify-center bg-coral">
          <span className="font-bold text-lg text-white">M</span>
        </div>
      </div>
      
      <nav className="flex-1 flex flex-col items-center space-y-8">
        <SidebarIcon 
          icon={<Home size={24} />} 
          label="Home" 
          to="/"
          active={location.pathname === '/'} 
        />
        <SidebarIcon 
          icon={<Search size={24} />} 
          label="Search" 
          to="/search"
          active={location.pathname === '/search'} 
        />
        <SidebarIcon 
          icon={<Library size={24} />} 
          label="Library" 
          to="/library"
          active={location.pathname === '/library'} 
        />
        <SidebarIcon 
          icon={<User size={24} />} 
          label="Profile" 
          to="/profile"
          active={location.pathname === '/profile'} 
        />
        <SidebarIcon 
          icon={<Settings size={24} />} 
          label="Settings" 
          to="/settings"
          active={location.pathname === '/settings'} 
        />
      </nav>
    </div>
  );
};

interface SidebarIconProps {
  icon: React.ReactNode;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarIcon: React.FC<SidebarIconProps> = ({ icon, label, to, active = false }) => {
  return (
    <div className="flex flex-col items-center">
      <Link 
        to={to}
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
      </Link>
      <span className="text-xs mt-1 opacity-70">{label}</span>
    </div>
  );
};

export default Sidebar;
