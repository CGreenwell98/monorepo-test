import { FastifyInstance, FastifyPluginAsync } from 'fastify';
import type { User, ApiResponse } from '@monorepo/shared';
// runtime import from the shared package build (CJS) - provide a typed shape
const { logUser } = require('../../../../packages/shared/dist/cjs/functions/logUser') as { logUser: (user: User) => void };
import { fakeAuth } from '../middleware/auth';

export const userRoutes: FastifyPluginAsync = async (app: FastifyInstance) => {
  app.get<{ Reply: ApiResponse<User> }>('/', { preHandler: fakeAuth }, async (request, reply) => {
    const user: User = {
      id: 'meow',
      name: 'chris',
      email: 'chris@zuant.com',
      createdAt: new Date(),
    };

    logUser(user);

    const response: ApiResponse<User> = {
      success: true,
      data: user
    };

    return reply.send(response);
  });
}

