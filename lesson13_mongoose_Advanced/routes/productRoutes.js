const express = require('express');
const {addSampleProducts,getProductStats,productAnalysis} = require('../controllers/productController');
const router = express.Router();

router.post('/add',addSampleProducts);
router.get('/fetchStats',getProductStats);
router.get('/analysis',productAnalysis);

module.exports = router;