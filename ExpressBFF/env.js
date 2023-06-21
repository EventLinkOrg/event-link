import dotenv from 'dotenv';
dotenv.config();

const env = {
    PORT: process.env.PORT,
    SECURE_SPRINGBOOT_PATH: `${process.env.SPRINGBOOT_SERVER_PATH}/api/v1/secured`,
    UNSECURE_SPRINGBOOT_PATH: `${process.env.SPRINGBOOT_SERVER_PATH}/api/v1/auth`,
    EXPRESS_SERVER_PATH: `${process.env.EXPRESS_SERVER_PATH}`,
    JWT_REDIS_HOST: process.env.JWT_REDIS_HOST,
    JWT_REDIS_PORT: process.env.JWT_REDIS_PORT,
    JWT_REDIS_PASSWORD: process.env.JWT_REDIS_PASSWORD,
    JWT_REDIS_URL: process.env.JWT_REDIS_URL
}

export default env;