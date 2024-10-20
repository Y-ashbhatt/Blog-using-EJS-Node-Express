const express = require('express');
const app = express();
const articleRouter = require('./routes/articles')
const PORT = 3000;

app.set('view engine', 'ejs' );

app.use('/articles', articleRouter)

app.get('/', (req, res) => {
    res.render('index');
})

// Start server
app.listen(PORT);
