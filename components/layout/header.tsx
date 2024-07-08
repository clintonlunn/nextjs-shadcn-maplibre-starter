"use client"

import ThemeToggle from '@/components/layout/ThemeToggle/theme-toggle';
import { cn } from '@/lib/utils';
import { MobileSidebar } from './mobile-sidebar';
// import { UserNav } from './user-nav';
import Link from 'next/link';
import Image from 'next/image';

const imageLoader = ({ src, width, quality }: { src: string; width: number; quality?: number }) => {
  return `${src}`
}

export default function Header() {
  return (
    <div className="supports-backdrop-blur:bg-background/60 fixed left-0 right-0 top-0 z-20 border-b bg-background/95 backdrop-blur">
      <nav className="flex h-14 items-center justify-between px-4">
        <div className="hidden lg:block">
          <Link
            href={'https://geology.utah.gov/'}
            target="_blank"
          >
            <Image
              loader={imageLoader}
              src="https://geology.utah.gov/apps/assets/ugs-logo-full.png"
              alt="UGS Logo"
              width={733}
              height={838}
              quality={100}
              sizes="6vw"
              style={{
                width: '100%',
                height: 'auto',
              }}
              className="cursor-pointer"
            />
          </Link>
        </div>
        <div className={cn('block lg:!hidden')}>
          <MobileSidebar />
        </div>

        <div className="flex items-center gap-2">
          {/* <UserNav /> */}
          <ThemeToggle />
        </div>
      </nav>
    </div>
  );
}
