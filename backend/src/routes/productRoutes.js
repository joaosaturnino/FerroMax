const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/ProductController');

router.get('/products', ProductController.getProducts);
router.get('/products/:id', ProductController.getProductById);

module.exports = router;