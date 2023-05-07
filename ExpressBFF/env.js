import dotenv from 'dotenv';
dotenv.config();

const env = {
    PORT: process.env.PORT,
    SECURE_SPRINGBOOT_PATH: `${process.env.SPRINGBOOT_SERVER_PATH}/api/v1/secured`,
    UNSECURE_SPRINGBOOT_PATH: `${process.env.SPRINGBOOT_SERVER_PATH}/api/v1/auth`
}

export default env;