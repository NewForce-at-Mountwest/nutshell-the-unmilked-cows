//FETCHES NEWS DATA FROM API AND PRINTS IT TO THE DOM
newsApiManager.getAllArticlesFromAPI() .then((newsArticles) => {
    newsArticles.forEach((newsArticle) => {
console.log(newsArticle)
  document.querySelector("#newsContainer").innerHTML+= CardMaker.buildArticlecard(newsArticle)
})
})

// newsApiManager.post(newsArticles) .then((newsArticles) => {

//   document.querySelector("#newsContainer").innerHTML+= CardMaker.buildArticlecard(newsArticle)
// })



newsEventlisters.newArticleButton();
newsEventlisters.newArticleSaveButton()