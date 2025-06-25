const express = require('express')
const app = express()

app.set('view engine', 'pug');
app.set('views', './views');

const books = [];

app.use(express.urlencoded({ extended: true }));

app.get('/',(req,res)=>{
    res.render('index',{books:books})
});

app.get('/add',(req,res) => {
    res.render('add')
})

app.post('/add',(req,res) => {
    const title = req.body.title;
    const author = req.body.author;
    const publish_year = req.body.publish_year;

    books.push({title:title, author:author, publish_year:publish_year});

    res.redirect('/');
});

app.get('/book/:title',(req,res) => {
    const title = req.params.title;
    const data = books.find(data => data.title == title);

    res.render('book',{book_info:data});
})

const PORT = 3000
app.listen(PORT,() => {
    console.log(`app is listening at http://localhost:${PORT}`)
});