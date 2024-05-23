// config/firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('../casptone-of-ours-firebase-adminsdk-zcb6w-5ea16e1a09.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;