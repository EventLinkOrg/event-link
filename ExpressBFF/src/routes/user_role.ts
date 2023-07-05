import express from 'express';
import axios from 'axios';
import env from '../../env';
import { redis } from '../config/jwt_redis_client';
import { getUserDataFromRedis, authMiddleware, parseJsonString } from '../helpers/token_exctractor';
// // import multer from 'multer';
// const storage = multer.memoryStorage();
// const upload = multer({ storage: storage });

const router = express.Router();

router.post('/self', authMiddleware(new Set(['USER'])), async (req, res, next) => {
    try {
        const token = req?.headers?.authorization?.split(' ')[1];
        const user_data = await getUserDataFromRedis(token!);

        res.send(JSON.parse(parseJsonString(user_data!)));
    } catch (error: any) {
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

router.get('/events/:id', async (req, res) => {
    console.log(req.params)
    axios.get(`${env.EXPRESS_SERVER_PATH}/event/user/${req.params.id}`, { headers: { Authorization: req.headers.authorization } })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
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

router.get('/category', async (req, res) => {
    console.log(req.params)
    axios.get(`${env.EXPRESS_SERVER_PATH}/category`, { headers: { Authorization: req.headers.authorization } })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});

router.post('/category', async (req, res) => {
    console.log(req.params)
    axios.post(`${env.EXPRESS_SERVER_PATH}/event`, req.body, { headers: { Authorization: req.headers.authorization } })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});

router.get('/event', async (req, res) => {
    axios.get(`${env.EXPRESS_SERVER_PATH}/event`, { headers: { Authorization: req.headers.authorization }, params: req.query })
        .then((response) => {
            res.send(response.data);
        })
        .catch((error) => {
            res.status(error.response.status).send(error.response.data);
        });
});

// router.post('/event', upload.single('image'), authMiddleware(new Set(['ADMIN', 'SUBSCRIBED USER'])), async (req, res) => {

//     const accessToken = req.headers.authorization?.split(' ')[1];
//     const data = await getUserDataFromRedis(accessToken!)
//     const jsonData = JSON.parse(parseJsonString(data!));
//     // console.log(req.body);
//     // console.log(jsonData);
//     req.body.userId = jsonData.userId;
//     // console.log(req.body.userId)

//     // console.log(req.file)
//     if (req.file) {
//         // req.body.image = req.file
//         console.log(req.file)
//         console.log('file reached')
//     }

//     const formData = {
//         ...req.body,
//         // file: req.file.buffer, // Get the file data from the multer upload
//     };

//     console.log(formData)

//     axios.post(`${env.EXPRESS_SERVER_PATH}/event`, formData, { headers: { Authorization: req.headers.authorization, "Content-Type": 'multipart/form-data', }, params: req.query })
//         .then((response) => {
//             res.send(response.data);
//         })
//         .catch((error) => {
//             res.status(error.response.status).send(error.response.data);
//         });
// });

router.get('/ticket/:id', authMiddleware(new Set(['USER'])), async (req, res) => {
    axios.get(`${env.EXPRESS_SERVER_PATH}/ticket/user/${req.params.id}`).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data);

    })
})

router.post('/ticket', authMiddleware(new Set(['USER'])), async (req, res) => {
    axios.post(`${env.EXPRESS_SERVER_PATH}/ticket`, req.body, { headers: { Authorization: req.headers.authorization } }).then((response) => {
        res.send(response.data);
    }).catch((error) => {
        res.status(error.response.status).send(error.response.data);

    })
})

export default router;