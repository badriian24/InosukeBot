const mongoose = require("mongoose");
const { mongooseConnectionString } = require('../../Client/Configs/config');

    if (!mongooseConnectionString) return;

    mongoose.connect(mongooseConnectionString);
const db = mongoose.connection;

// Check the connection
db.on('error', console.error.bind(console, 'Connection error:'));
db.once('open', () => {
    console.log('[READY] Connected to MongoDB.');
});