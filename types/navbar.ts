export interface SubMenuItem {
    title: string;
    icon: any;
    href: string;
    description?: string;
  }

  export interface NavItem {
    title: string;
    icon: any;
    href?: string;
    onClick?: () => void;
    submenu?: SubMenuItem[];
  }