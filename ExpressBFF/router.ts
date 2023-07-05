import { router } from './trpc';
import { testRouter } from './test_entity/router';

export const appRouter = router({
    user: testRouter,
});

export type AppRouter = typeof appRouter;