const mongoose = require('mongoose');
const dns = require('dns');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI;
    if (!uri) {
      throw new Error('MONGO_URI is required in .env');
    }

    if (uri.startsWith('mongodb+srv://')) {
      dns.setServers(['8.8.8.8', '8.8.4.4']);
      console.log('Using public DNS servers for Atlas SRV lookup:', dns.getServers());
    }

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    process.exit(1);
  }
};

module.exports = connectDB;
