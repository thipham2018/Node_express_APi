import express from 'express';
import bodyParser from 'body-parser';
import usersRouters from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRouters);

app.get('/', (req, res) => res.send('hello home page.'));

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));