const express = require('express');
const dbConnect = require('./db/connectDB');
const apiRoute = require('./routes/apiRoute');
require('dotenv').config();
const notFound = require('./middleware/not-found');
const cors = require('cors');
const server = express();

// middleware setup
server.use(express.json());

// cors setup :- Allow all origins with Default of cors(*)
server.use(cors());

// home route
server.get('/', (req,res) => {
    res.send('Welcome to MERN App');
})

// API route setup
server.use('/api/v1/resCom', apiRoute);

// Middleware setup for invalid route
server.use(notFound);

const portNo = process.env.PORT || 7272

// start DB
const start = async () => {
    try {
        await dbConnect(process.env.mongoUrl)
        .then(() => console.log('DB Connected'))
        server.listen(portNo, () => {
            console.log(`Server running on port: ${portNo}...`);
        })
    } catch (error) {
        console.log('Error connecting to DB',error);
    }
}

start();