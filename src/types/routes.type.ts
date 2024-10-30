// src/types/routes.type.ts

import React from 'react';
import { privateRoutes } from '../routes/private.routes';
import { publicRoutes } from '../routes/public.routes';

// Type for individual routes (both private and public)
export type TRouteType = {
  path?: string;
  element: React.ReactNode;
  children?: TRouteType[]; // Array of nested routes
  index?: boolean; // Boolean for index route
};

// Type for the overall route configuration with private and public routes
export type TCustomRoute = {
  private?: TRouteType[];
  public?: TRouteType[];
};

// Type for the return value of the loader function
export type TLoaderReturn = Response | null;

export const RoutesList: TCustomRoute = {
  private: privateRoutes,
  public: publicRoutes
};
