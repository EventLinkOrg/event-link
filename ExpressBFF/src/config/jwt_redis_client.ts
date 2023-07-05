// import pkg from 'ioredis';
// const { createClient } = pkg;
// import env from '../../env.js';

// const client = createClient({
//     password: env.JWT_REDIS_PASSWORD,
//     socket: {
//         host: env.JWT_REDIS_HOST,
//         port: env.JWT_REDIS_PORT
//     }
// });

// export default client;
import { Redis, RedisOptions } from "ioredis";
import env from "../../env";

export const redis = new Redis(env.JWT_REDIS_URL as RedisOptions);