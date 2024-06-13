import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'CRUD',
  },
  {
    displayName: 'BD Empleados',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    navCap: 'Servicios Web',
  },
  {
    displayName: 'Clima',
    iconName: 'rosette',
    route: '/ui-components/badge',
  },
  {
    displayName: 'ZIP',
    iconName: 'poker-chip',
    route: '/ui-components/chips',
  },
  {
    displayName: 'Películas',
    iconName: 'list',
    route: '/ui-components/lists',
  },
  {
    navCap: 'Auth',
  },
  {
    displayName: 'Login',
    iconName: 'lock',
    route: '/authentication/login',
  },
  {
    displayName: 'Register',
    iconName: 'user-plus',
    route: '/authentication/register',
  },
  {
    navCap: 'Extra',
  },
  {
    displayName: 'Icons',
    iconName: 'mood-smile',
    route: '/extra/icons',
  },
  {
    displayName: 'Sample Page',
    iconName: 'aperture',
    route: '/extra/sample-page',
  },
];
