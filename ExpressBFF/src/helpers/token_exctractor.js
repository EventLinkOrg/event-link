import { redis } from '../config/jwt_redis_client.js';
import AuthError from './AuthError.js';

function parseJsonString(jsonString) {
    const parsedString = jsonString.replace(/\\/g, ''); // Remove all backslashes
    const firstQuoteIndex = parsedString.indexOf('"');
    const lastQuoteIndex = parsedString.lastIndexOf('"');
    const firstPart = parsedString.substring(0, firstQuoteIndex + 1);
    const middlePart = parsedString.substring(firstQuoteIndex + 1, lastQuoteIndex);
    const lastPart = parsedString.substring(lastQuoteIndex);
    const parsedJson = JSON.parse(`${firstPart}${middlePart.replace(/"/g, '\\"')}${lastPart}`);
    return parsedJson;
}

const getUserDataFromRedis = async (accessToken) => {
    const redisKey = `"${accessToken}"`;
    const response = await redis.get(redisKey);
    return response;
}

const authMiddleware = (authorities) => async (req, res, next) => {
    try {
        const accessToken = req.headers.authorization?.split(' ')[1];
        if (!accessToken) {
            return res.status(401).send(new AuthError(['Invalid authorization'], 401));
        }

        const response = await getUserDataFromRedis(accessToken);

        if (!response) {
            return res.status(401).send(new AuthError(['Invalid token'], 401));
        }

        const jsonToken = JSON.parse(parseJsonString(response));

        let hasAuth = false;

        for (const obj of jsonToken.authorities) {
            console.log(obj)
            if (authorities.has(obj.authority)) {
                hasAuth = true;
            }

        }

        if (!hasAuth) return res.status(401).send(new AuthError(['Insufficient authority'], 401));

        next();
    } catch (error) {
        return res.status(401).send('Unauthorized');
    }
};

export { getUserDataFromRedis, authMiddleware, parseJsonString };