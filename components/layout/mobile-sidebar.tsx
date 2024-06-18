'use client';
import { DashboardNav } from '@/components/dashboard-nav';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { navItems } from '@/constants/data';
import { MenuIcon, ChevronLeft } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> { }

const Info = () => <div>Info Content</div>;
const Layers = () => <div>Layers Content</div>;
const Legend = () => <div>Legend Content</div>;

const sidebarContent: { [key: string]: React.ComponentType } = {
  info: Info,
  layers: Layers,
  legend: Legend,
  // Add more components as needed
};

export function MobileSidebar({ className }: SidebarProps) {
  const [open, setOpen] = useState(false);
  const [selectedContent, setSelectedContent] = useState<string | null>(null);

  const handleNavClick = (content: string) => {
    setSelectedContent(content);
  };

  const SelectedComponent = selectedContent ? sidebarContent[selectedContent] : null;

  return (
    <>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <MenuIcon />
        </SheetTrigger>
        <SheetContent side="left" className="!px-0">
          <div className="space-y-4 py-4">
            <div className="px-3 py-2">
              {selectedContent ? (
                <>
                  <button
                    className="flex items-center gap-2 py-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground"
                    onClick={() => setSelectedContent(null)}
                  >
                    <ChevronLeft className="ml-3 size-5" />
                    <span className="mr-2">Back to Menu</span>
                  </button>
                  {SelectedComponent && <SelectedComponent />}
                </>
              ) : (
                <>
                  <h2 className="mb-2 px-4 text-lg font-semibold tracking-tight">
                    Overview
                  </h2>
                  <div className="space-y-1">
                    <DashboardNav
                      items={navItems}
                      isMobileNav={true}
                      setOpen={setOpen}
                      onNavClick={handleNavClick}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
