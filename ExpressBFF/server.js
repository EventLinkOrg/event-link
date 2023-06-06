import express from 'express';
import env from './env.js';
import auth from './src/routes/authentication.js';
import userRole from './src/routes/user_role.js';
import cors from 'cors';

const app = express();
const PORT = env.PORT || 4000;

app.use(express.json());
app.use(
    express.urlencoded({
        extended: false,
    }),
)

app.use(cors({
    origin: '*', // Replace with the appropriate origin URL
}));


app.get('', (req, res) => {
    res.send('Hello, world!');
});

app.use('/api/v1/auth', auth);
app.use('/api/v1/secured', userRole);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
    console.log(env)
})