const express = require('express');
const authController = require('../controllers/authController');

const router = express.Router();

router.get("/accounts", authController.showAccounts);
router.post("/accounts/add", authController.addAcount);

module.exports = router;