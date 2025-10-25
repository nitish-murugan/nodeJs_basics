const express = require('express');
const {getAllBooks, getParticularBook, addBook, updateBook, deleteBook} = require('../controllers/routesControllers');
const router = express.Router();

router.get('/getBooks', getAllBooks);
router.get('/getBook/:id', getParticularBook);
router.post('/addBook', addBook);
router.put('/updateBook/:id', updateBook);
router.delete('/deleteBook/:id', deleteBook);

module.exports = router;