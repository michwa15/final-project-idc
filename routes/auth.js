const express = require('express');
const router = express.Router();
const { signUpController, signInController } = require('../controllers/auth');
const { signupValidator, signinValidator, validatorResult } = require('../middleware/validator');

router.post("/signup", signupValidator, validatorResult, signUpController);
router.post("/signin", signinValidator, validatorResult, signInController);

module.exports = router;