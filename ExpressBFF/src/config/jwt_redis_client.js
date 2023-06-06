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
import { Redis } from "ioredis";
import env from "../../env.js";

export const redis = new Redis(env.JWT_REDIS_URL);