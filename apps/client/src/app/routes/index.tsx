import type { RouteObject } from 'react-router-dom';
import { usersRoutes } from '@features/users/routes';
import { formBuilderRoutes } from '@features/form-builder/routes';
import { integrationsRoutes } from '@features/integrations/routes';

// Aggregate all feature routes
export const routes: RouteObject[] = [
  ...usersRoutes,
  ...formBuilderRoutes,
  ...integrationsRoutes,
  // Add more feature routes here as they're developed
];


