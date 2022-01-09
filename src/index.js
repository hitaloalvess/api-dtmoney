const express = require('express');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3333;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
    res.send('OK');
})

require('./controllers/transactionController')(app);

app.listen(PORT, () => {
    console.log(`Server is running port --> ${PORT}`);
});