import { Icons } from '@/components/icons';

// export interface NavItem {
//   title: string;
//   href?: string;
//   disabled?: boolean;
//   external?: boolean;
//   icon?: keyof typeof Icons;
//   label?: string;
//   description?: string;
// }

// { title: 'Info', icon: 'info', href: '/info', disabled: false },

export interface NavItem {
  title: string,
  icon: keyof typeof Icons,
  href: string,
  disabled: boolean
}

export interface NavItemWithChildren extends NavItem {
  items: NavItemWithChildren[];
}

export interface NavItemWithOptionalChildren extends NavItem {
  items?: NavItemWithChildren[];
}

export interface FooterItem {
  title: string;
  items: {
    title: string;
    href: string;
    external?: boolean;
  }[];
}

export type MainNavItem = NavItemWithOptionalChildren;

export type SidebarNavItem = NavItemWithChildren;
