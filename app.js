const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cookieParser());

const authRoute = require('./routes/auth');
const userRoute = require('./routes/user');
const toolsRoute = require('./routes/tools');
const corsOptions = {
    credentials: true, 
    origin: ['']
};

app.use(cors(corsOptions));
app.use("/auth", authRoute);
app.use("/user", userRoute);
app.use("/tools", toolsRoute);

module.exports = app;