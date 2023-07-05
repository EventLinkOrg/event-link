
import { router, publicProcedure } from '../trpc';


export const testRouter = router({
    get: publicProcedure.query(() => {
        return "hello from trpc bff";
    }),

});