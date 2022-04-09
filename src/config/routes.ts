import {
  Home as HomeIcon
} from '@mui/icons-material';

import { Main } from '../pages/Main';

import { Route } from '../types/Route';

const routes: Array<Route> = [
  {
    key: 'router-main',
    title: 'Analyze',
    description: 'Home',
    component: Main,
    path: '/',
    isEnabled: true,
    icon: HomeIcon,
    appendDivider: true,
  }
];

export default routes;
