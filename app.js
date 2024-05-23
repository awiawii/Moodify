const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const authRoute = require('./routes/auth');
const corsOptions = {
    credentials: true, 
    origin: ['https://127.0.0.1:3000']
};

app.use(cors(corsOptions));
app.use("/auth", authRoute);


module.exports = app;