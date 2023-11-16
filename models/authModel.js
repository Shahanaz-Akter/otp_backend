const mongoose = require('mongoose'); //using mongoose object we have to create model
const userSchema = mongoose.Schema({

    //signup view field
    first_name: {
        type: String,
        required: [true, 'Please provide your email'],

    },
    last_name: {
        type: String,
        required: [true, 'Please provide your email'],

    },
    user_name: {
        type: String,
    },
    //unique
    email: {
        type: String,
        // required: [true, 'Please provide your email'],
        // unique: true,
        // This makes the 'email' field unique
    },
    //unique
    mobile: {
        type: String,
        required: [true, 'Enter  your name value'],
        unique: true,
        // validate: {
        //     validator: function (value) {
        //         return /^\d{11}$/.test(value); // Check if the mobile number is exactly 11 digits
        //     },
        //     message: 'Mobile number must be 11 digits',
        // },
    },

    otp: {
        type: Number,
    },

    //tob view
    type_of_business: {
        type: String,
        // required: [true, 'Enter  your name value'],

    },

    //location view
    district: {
        type: String,
    },
    city: {
        type: String,
    },
    zip_code: {
        type: String,
    },
    road: {
        type: String,
    },
    house: {
        type: String,
    },

    //pin view
    password: {
        type: String,
        // required: [true, 'Please provide your password'],

    },
    pin: {
        type: String,
    },
    reset_pin: {
        type: String,
    },

},
    {
        timestamps: true,  //it6 will go as second argument
    });


module.exports = mongoose.model('User', userSchema);
