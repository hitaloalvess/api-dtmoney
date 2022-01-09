require('dotenv').config();

const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@dtmoney.ex4kk.mongodb.net/dtMoney?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

module.exports = mongoose;