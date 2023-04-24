const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        console.log('mongodb://127.0.0.1:27017/OnTheGo')
        const conn = await mongoose.connect('mongodb://127.0.0.1:27017/OnTheGo', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`Error: ${error.message}`);
        process.exit();
    }
}

module.exports = connectDB;
