require('dotenv').config();

const express = require('express');

const { cors } = require('./middlewares/cors');

const PORT = process.env.PORT || 3333;

const app = express();
app.use(express.json());
app.use(cors);


require('./controllers/transactionController')(app);

app.listen(PORT, () => {
    console.log(`Server is running port --> ${PORT}`);
});