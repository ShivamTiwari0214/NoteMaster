const express = require('express');
const app = express();
const port = 5000;
const connectToMongo = require('./database');
const cors = require('cors')


// connecting to database
connectToMongo();

// Middleware to let us use the req.body
// It parses incoming JSON requests and puts the parsed data in req.body.
app.use(express.json())

app.use(cors())

// Available Routes
app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))


app.listen(port,()=>{
    console.log("//Listening message")
})
