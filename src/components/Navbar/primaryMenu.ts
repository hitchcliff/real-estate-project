export const PrimaryMenu: Menu[] = [
  {
    menu: 'Home',
    link: '/',
  },
  {
    menu: 'About',
    link: '/about',
  },
  {
    menu: 'Contact',
    link: '/contact',
  },
  {
    menu: 'Sale',
    link: '/sale',
  },
  {
    menu: 'Rent',
    link: '/rent',
  },
  {
    menu: 'Sold',
    link: '/sold',
  },
];

export interface Menu {
  menu: string;
  link: string;
}
