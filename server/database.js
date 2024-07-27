const mongoose = require('mongoose');
const mongourl ="mongodb://localhost:27017/iNotebook";

 const connectToMongo = ()=>{
    mongoose.connect(mongourl)
}

module.exports = connectToMongo