import React from 'react';
import { createBrowserRouter, redirect, RouteObject, RouterProvider } from 'react-router-dom';
import { TCustomRoute, TLoaderReturn } from '../types';
import { RoutesList } from '../types/routes.type';
import { privateRoutes } from './private.routes';
import { publicRoutes } from './public.routes';

const getPrivateRoute = (privateRouteList: TCustomRoute['private']): RouteObject[] => {
  if (privateRouteList && privateRouteList.length > 0) {
    return privateRouteList.map((item) => ({
      ...item,
      errorElement: <h1>Invalid Route</h1>,
      loader: (): TLoaderReturn => {
        const authToken = localStorage.getItem('token');
        if (!authToken) return redirect('/reactbasekit/login');
        return null;
      }
    })) as RouteObject[]; // Cast mapped items to RouteObject[]
  }
  return [] as RouteObject[];
};

const getPublicRoute = (publicRouteList: TCustomRoute['public']): RouteObject[] => {
  if (publicRouteList && publicRouteList.length > 0) {
    return publicRouteList.map((item) => ({
      ...item,
      errorElement: <h1>Invalid Route</h1>,
      loader: (): TLoaderReturn => {
        const authToken = localStorage.getItem('token');
        if (authToken && authToken !== '') return redirect('/reactbasekit');
        return null;
      }
    })) as RouteObject[];
  }
  return [] as RouteObject[];
};

const getRoutes = (): RouteObject[] => {
  let routes: RouteObject[] = [];
  if (RoutesList) {
    if (RoutesList.private) {
      routes = [...routes, ...getPrivateRoute(privateRoutes)];
    }
    if (RoutesList.public) {
      routes = [...routes, ...getPublicRoute(publicRoutes)];
    }
  }
  return routes;
};

export const CustomRoute = (): React.ReactElement => {
  const router = createBrowserRouter(getRoutes());
  return <RouterProvider router={router} />;
};
