const express = require('express');
const router = express.Router();
const { signUpController, signInController, logoutController } = require('../controllers/auth');
const { signupValidator, signinValidator, validatorResult } = require('../middleware/validator');

router.post('/signup', signupValidator, validatorResult, signUpController);
router.post('/signin', signinValidator, validatorResult, signInController);
router.post('/logout', logoutController);

module.exports = router;