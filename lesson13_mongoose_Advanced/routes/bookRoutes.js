const express = require('express');
const {createAuthor, addBook, getBookByAuthor} = require('../controllers/bookController');
const router = express.Router();

router.post('/addAuthor',createAuthor);
router.post('/addBook',addBook);
router.get('/getBookById/:id',getBookByAuthor);

module.exports = router;