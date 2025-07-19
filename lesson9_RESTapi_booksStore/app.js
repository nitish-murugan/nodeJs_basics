const express = require('express');
const app = express();
const port = 3000;
const books = [
    {id:1, name:'book1'},
    {id:2, name:'book2'},
    {id:3, name:'book3'}
];

app.use(express.json());

app.get('/', (request, response)=>{
    response.json({
        message: "Welcome, This is home page"
    });
});

//Get all books
app.get('/getBooks', (request, response)=>{
    response.json(books);
})

//Get a specific book
app.get('/getBooks/:id', (request ,response)=>{
    const neededId = parseInt(request.params.id);
    var resultBook = books.find(book => book.id===neededId);
    if(resultBook){
        response.json(resultBook);
    } else{
        response.status(404).json({
            message: "Book isn't available right now"
        });
    }
})

//add books
app.post('/addBooks', (request, response)=>{
    const newBook = {id: books.length+1,name:`book${books.length+1}`};
    books.push(newBook);
    response.status(200).json({
        data: newBook,
        message: "New book has been successfully added"
    });
});

//update books
app.put('/updateBooks/:id', (request, response)=>{
    console.log(request.body)
    var neededId = parseInt(request.params.id);
    var neededBook = books.find(book=>book.id === neededId);
    if(neededBook){
        neededBook.name = request.body.name || neededBook.name;
        response.status(200).json({
            message: `Book ${request.params.id} updated successfully`,
            data: neededBook
        })
    }
    else{
        response.status(404).json({
            message: `Book not found`
        });
    }
});

//delete books
app.delete('/deleteBooks/:id', (request, response)=>{
    var neededBook = books.findIndex(book=>book.id === parseInt(request.params.id));
    if(neededBook != -1){
        var deletedBook = books.splice(neededBook,1);
        response.status(200).json({
            message: "Deleted succesfully",
            data: deletedBook
        });
    }
    else{
        response.status(404).json({
            message: `Book not found`
        });
    }
});

app.listen(port, ()=>{
    console.log(`Server is running on the port ${port}`);
});

