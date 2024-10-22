const express = require("express");
const router = express.Router();

// Route to show the form for creating a new article
router.get("/new", (req, res) => {
  res.render("articles/new");
});

router.get("/edit/:id", (req, res) => {
    const articleId = req.params.id;
    const article = req.articles[articleId];
    if (article) {
      res.render("articles/edit", { article, articleId });  // Pass articleId to the template
    } else {
      res.redirect("/");
    }
  });
// Route to view a single article by its ID (index in array)
router.get("/:id", (req, res) => {
  const articleId = req.params.id;
  const article = req.articles[articleId];

  if (article) {
    res.render("articles/show", { article, articleId }); // Pass articleId as well
  } else {
    res.redirect("/");
  }
});

// Route to create a new article
router.post("/", (req, res) => {
  const article = {
    title: req.body.title,
    description: req.body.description,
    markdown: req.body.markdown,
    createdAt: new Date(),
  };

  // Add the new article to the articles array
  req.articles.push(article);
  const articleId = req.articles.length - 1; // Index of the new article

  res.redirect(`/articles/${articleId}`);
});


// Edit the article
router.put('/:id', (req, res) => {
    const articleId = req.params.id;
    const article = req.articles[articleId]; // Find the article by its ID
  
    if (article) {
      // Update the article fields
      article.title = req.body.title;
      article.description = req.body.description;
      article.markdown = req.body.markdown;
  
      res.redirect(`/articles/${articleId}`); // Redirect to the article's page after updating
    } else {
      res.redirect('/'); // Redirect to home if article doesn't exist
    }
  });

router.delete("/:id", (req, res) => {
  const articleId = req.params.id;

  // Check if the article exists
  if (req.articles[articleId]) {
    req.articles.splice(articleId, 1); // Remove the article from the array
    res.redirect("/");
  } else {
    res.status(404).send("Article not found");
  }
});

module.exports = router;
