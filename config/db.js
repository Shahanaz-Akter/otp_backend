const mongoose = require('mongoose'); //using mongoose object we have to create connection

const connectDB = async () => {
    try {

        // const conn = await mongoose.connect(process.env.MONGO_URL);
        // console.log('mongodb is connected');

        const conn = await mongoose.connect(process.env.MONGO_URL);


        console.log('Mongodb Database Connection is successfully');

    }

    catch (error) {
        console.log("Database Connection Problem: " + error);
        process.exit(1);
    }
}
module.exports = connectDB;