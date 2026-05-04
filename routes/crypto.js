const express = require('express');
const router = express.Router();
const cryptoController = require('../controllers/cryptoController');

router.get('/', cryptoController.getAllCryptos);
router.get('/gainers', cryptoController.getGainers);
router.get('/new', cryptoController.getNewListings);
router.post('/', cryptoController.createCrypto);

module.exports = router;
