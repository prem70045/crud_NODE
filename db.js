const mongoose = require("mongoose");

const mongoURL =
"mongodb+srv://premkumar071073_db_user:N8vK2mQ7xL5pR123@cluster0.iz0axkl.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";

mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on('connected', () => {
    console.log('✅ MongoDB connection established');
});

db.on('error', (err) => {
    console.log('❌ MongoDB connection error:', err);
});

db.on('disconnected', () => {
    console.log('disconnected...');
});

module.exports = db;