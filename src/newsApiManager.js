//API OBJECT
const newsApiManager = {
  //FETCHES ALL NEWS ARTICLES FROM API
  getAllArticlesFromAPI: () => {
    return fetch("http://localhost:8088/newsArticles").then((fakeNews) =>
      fakeNews.json()
    );
  },
  //this posts the new data to the api
  post: (newArticleObject) => {
    return fetch("http://localhost:8088/newsArticles", {
      // Replace "url" with your API's URL
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newArticleObject),
    });
  },

  //this deletes data from the api
  delete: (id) => {
    return fetch(`http://localhost:8088/newsArticles/${id}`, {
      method: "DELETE",
    });
  },

 //this puts the data that you entered to the api
 put: () => {
   return  fetch(`http://localhost:8088/newsArticles/${primaryKey}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(editArticleObject),
  })
 }
};





export default newsApiManager

