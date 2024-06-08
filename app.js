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
const toolRoute = require('./routes/tools');
const userInfoRouter = require('./routes/userInfo');
const copingRoute = require('./routes/copings');

const corsOptions = {
    credentials: true, 
    origin: ['0.0.0.0']
};

app.use(cors(corsOptions));

app.use("/auth", authRoute);
app.use("/tool", toolRoute);
app.use('/user', userInfoRouter);
app.use("/coping", copingRoute);


module.exports = app;
