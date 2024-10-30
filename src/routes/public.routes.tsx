import Login from '../components/login/login';
import { TRouteType } from '../types';

export const publicRoutes: TRouteType[] = [{ path: '/login', element: <Login /> }];
