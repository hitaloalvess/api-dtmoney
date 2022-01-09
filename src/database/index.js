const mongoose = require('mongoose');

mongoose.connect(`mongodb+srv://hitalo1996:K9Czes7oVVFAoRKO@dtmoney.ex4kk.mongodb.net/dtMoney?retryWrites=true&w=majority`);
mongoose.Promise = global.Promise;

module.exports = mongoose;