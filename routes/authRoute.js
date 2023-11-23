const express = require('express');
const router = express.Router();
const { signUp, sendOtp, otpView, postOtp, tobView, postTob,
    locationView, postLocation, pinView, postPin, dashboard, login, postLogin,
    forgottenPassword, postForgottenPassword, furtherOtp, postFurtherOtp, resetPin, postResetPin, resend,appointment_list } = require('../controllers/authController');

// if we have same route but different controller then we can alo use this way
// router.route('/').get(getGoal).post(setGoal);





// All routes are here
router.get('/', signUp);
router.get('/signup', signUp);

//send OTP from signup   
router.post('/sendOtp', sendOtp);

// viewing otp page
router.get('/otp/:id', otpView);
// matching otp value and send tob page
router.post('/postotp/:id', postOtp);


//viewing pin page
router.get('/pin/:id', pinView);
router.post('/post_pin/:id', postPin);


// viewing tob page
router.get('/tob/:id', tobView);
router.post('/post_tob/:id', postTob);


//viewing tob page
router.get('/location/:id', locationView);
router.post('/post_location/:id', postLocation);

//Dashboard pin page
router.get('/dashboard', dashboard);
router.get('/login', login);
router.post('/post_login', postLogin);

router.get('/forgotten_password', forgottenPassword);
router.post('/post_forgotten_password', postForgottenPassword);
router.get('/further_otp/:id', furtherOtp);
router.post('/post_further_otp/:id', postFurtherOtp);

router.get('/reset_pin/:id', resetPin);
router.post('/post_resetpin/:id', postResetPin);

router.get('/resend/:id', resend);

router.get('/appointment_list', appointment_list);

module.exports = router;