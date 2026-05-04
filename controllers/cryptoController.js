const Crypto = require('../models/Crypto');

exports.getAllCryptos = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.json({ cryptos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching cryptos' });
  }
};

exports.getGainers = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ change24: -1 });
    res.json({ cryptos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching gainers' });
  }
};

exports.getNewListings = async (req, res) => {
  try {
    const cryptos = await Crypto.find().sort({ createdAt: -1 });
    res.json({ cryptos });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while fetching new listings' });
  }
};

exports.createCrypto = async (req, res) => {
  try {
    const { name, symbol, price, image, change24 } = req.body;
    if (!name || !symbol || price == null || !image || change24 == null) {
      return res.status(400).json({ message: 'All cryptocurrency fields are required' });
    }

    const crypto = await Crypto.create({
      name,
      symbol,
      price,
      image,
      change24,
    });

    res.status(201).json({ message: 'Crypto added', crypto });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error while creating crypto' });
  }
};
