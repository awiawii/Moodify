// config/Configfirebase.js

const dotenv = require('dotenv');
dotenv.config();

const { initializeApp } = require('firebase/app');

const {
    API_KEY,
    AUTH_DOMAIN,
    PROJECT_ID,
    STORAGE_BUCKET,
    MESSAGING_SENDERID,
    APP_ID
} = process.env;

const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDERID,
    appId: APP_ID
};

const app = initializeApp(firebaseConfig);

module.exports = app;