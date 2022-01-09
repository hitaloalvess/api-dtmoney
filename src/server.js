require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');

import { cors } from "./middlewares/cors";

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(cors);

// app.get('/', (req, res) => {
//     res.send('OK');
// })

require('./controllers/transactionController')(app);

app.listen(PORT, () => {
    console.log(`Server is running port --> ${PORT}`);
});