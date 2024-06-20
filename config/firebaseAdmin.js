// config/firebaseAdmin.js

const admin = require('firebase-admin');
const serviceAccount = require('<your_service_account_key_json_file>');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

module.exports = admin;
