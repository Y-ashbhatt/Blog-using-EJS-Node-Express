const express = require('express');
const app = express();
const articleRouter = require('./routes/articles');
const PORT = 3000;

const methodOverride = require('method-override');
app.use(methodOverride('_method')); 


// In-memory array to store articles temporarily
let articles = [
    {
        title: 'Test Article',
        createdAt: new Date(), 
        description : 'This is the description of the first article',
    },
    {
        title: 'Test Article 2',
        createdAt: new Date(), 
        description : 'This is the description of the Test article 2',
    }
];

app.set('view engine', 'ejs' );
app.use(express.urlencoded({ extended: false }));

// Pass articles array to articleRouter
app.use((req, res, next) => {
    req.articles = articles;
    next();
});

// Home page route
app.get('/', (req, res) => {
    res.render('articles/index', { articles: req.articles });
});

// Articles router
app.use('/articles', articleRouter);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
