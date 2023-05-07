import express from 'express';
import axios from 'axios';
import env from '../../env.js';

const router = express.Router();

router.post('/register', (req, res) => {
    const body = req.body;
    axios.post(`${env.UNSECURE_SPRINGBOOT_PATH}/register`, body)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});

router.post('/login', (req, res) => {
    const body = req.body;
    axios.post(`${env.UNSECURE_SPRINGBOOT_PATH}/login`, body)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});

router.get('/confirm', (req, res) => {

    const {token} = req.query;

    axios.get(`${env.UNSECURE_SPRINGBOOT_PATH}/confirm?token=${token}`)
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});



export default router;