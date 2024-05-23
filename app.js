const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const firebaseApp = require('./config/Configfirebase'); // Ensuring Firebase is initialized
require('firebase/auth');
require("dotenv").config();


const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const authRoute = require('./routes/auth');

app.use(cors());

app.use("/auth", authRoute);


module.exports = app;