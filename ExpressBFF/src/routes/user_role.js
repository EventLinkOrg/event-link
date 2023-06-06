import express from 'express';
import axios from 'axios';
import env from '../../env.js';
import { redis } from '../config/jwt_redis_client.js';
import { getUserDataFromRedis, authMiddleware, parseJsonString } from '../helpers/token_exctractor.js';

const router = express.Router();

router.post('/self', authMiddleware(new Set(['USER'])), async (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const user_data = await getUserDataFromRedis(token);

        res.send(JSON.parse(parseJsonString(user_data)));
    } catch (error) {
        return res.status(error.response.status).send(error.response.data);
    }
})

router.get('/users', authMiddleware(new Set(['ADMIN'])), async (req, res) => {
    const queryString = req.query; // Get the query string parameters from the request

    axios.get(`${env.SECURE_SPRINGBOOT_PATH}/users`, {
        headers: {
            Authorization: req.headers.authorization
        },
        params: queryString // Pass the query string parameters to the axios request
    })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            return res.status(error.response.status).send(error.response.data);
        });
});


router.get('/roles', authMiddleware(new Set(['ADMIN'])), async (req, res) => {
    console.log(req.params)
    axios.get(`${env.SECURE_SPRINGBOOT_PATH}/roles`, { headers: { Authorization: req.headers.authorization } })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});

router.put('/logout', authMiddleware(new Set(['USER'])), async (req, res) => {
    axios.put(`${env.SECURE_SPRINGBOOT_PATH}/logout`, req.body, { headers: { Authorization: req.headers.authorization } })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
})

router.post('/promote', authMiddleware(new Set(['ADMIN'])), async (req, res) => {
    axios.post(`${env.SECURE_SPRINGBOOT_PATH}/users`, req.body, { headers: { Authorization: req.headers.authorization } })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
})

export default router;