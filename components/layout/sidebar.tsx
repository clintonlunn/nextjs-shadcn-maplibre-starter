'use client';
import React, { useState } from 'react';
import { DashboardNav } from '@/components/dashboard-nav';
import { navItems } from '@/constants/data';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { useSidebar } from '@/hooks/useSidebar';

type SidebarProps = {
  className?: string;
};

const Info = () => <div>Info Content</div>;
const Layers = () => <div>Layers Content</div>;
const Legend = () => <div>Legend Content</div>;

const sidebarContent = {
  info: Info,
  layers: Layers,
  legend: Legend,
  // Add more components as needed
};

export default function Sidebar({ className }: SidebarProps) {
  const { isMinimized, toggle } = useSidebar();
  const [status, setStatus] = useState(true);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleToggle = () => {
    setStatus(true);
    toggle();
    setTimeout(() => setStatus(false), 500);
  };

  const handleNavClick = (content: string) => {
    setSelectedContent(content);
  };
  const sidebarContent: { [key: string]: React.ComponentType } = {
    info: Info,
    layers: Layers,
    legend: Legend,
    // Add more components as needed
  };
  const SelectedComponent = selectedContent ? sidebarContent[selectedContent] : null;

  return (
    <nav
      className={cn(
        `relative hidden h-screen flex-none border-r pt-20 md:block`,
        status && 'duration-500',
        !isMinimized ? 'w-72' : 'w-[72px]',
        className
      )}
    >
      <ChevronLeft
        className={cn(
          'z-50 absolute -right-3 top-20 cursor-pointer rounded-full border bg-background text-3xl text-foreground',
          isMinimized && 'rotate-180'
        )}
        onClick={handleToggle}
      />
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <div className="mt-3 space-y-1">
            {!selectedContent ? (<DashboardNav items={navItems} onNavClick={handleNavClick} />)
              : (
                <>
                  <button
                    className="flex items-center gap-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setSelectedContent(null)}
                  >
                    <ChevronLeft className="ml-3 size-5" />
                    <span className="mr-2">Back to Menu</span>
                  </button>
                </>
              )
            }
          </div>
        </div>
        <div className="px-3 py-2">
          {!isMinimized && SelectedComponent && <SelectedComponent />}
        </div>
      </div>
    </nav>
  );
}
