//API OBJECT
const newsApiManager = {
  //FETCHES ALL NEWS ARTICLES FROM API
  getAllArticlesFromAPI: () => {
    return fetch("http://localhost:8088/newsArticles").then((fakeNews) =>
      fakeNews.json()
    );
  },
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

  delete: (id) => {
    return fetch(`http://localhost:8088/newsArticles/${id}`, {
      method: "DELETE",
    });
  },
};

//event listener object
const newsEventlisters = {
  //event listener for new article button
  newArticleButton: () => {
    return document
      .querySelector("#newArticleButton")
      .addEventListener("click", function () {
        document.querySelector(
          "#newArticleFormDiv"
        ).innerHTML = CardMaker.buildNewArticleform();
      });
  },

  //NOT WORKING YET STOPPED HERE AT THE END OF THE DAY
  newArticleSaveButton: () => {
    return document
      .querySelector("body")
      .addEventListener("click", function () {
        if (event.target.id === "newArticleSave") {
            document.querySelector("#newsContainer").innerHTML ="";
            console.log("click");
          const headlineValue = document.querySelector("#headlineInput").value;
          const synopsisValue = document.querySelector("#synopsisInput").value;
          const urlValue = document.querySelector("#urlInput").value;
          console.log(headlineValue, synopsisValue, urlValue);

          const newArticleObject = {
            headline: headlineValue,
            synopsis: synopsisValue,
            url: urlValue,
            userId: 2,
          };
          console.log(newArticleObject);
          newsApiManager
            .post(newArticleObject)
            .then(newsApiManager.getAllArticlesFromAPI)
            .then((newsArticles) => {
              newsArticles.forEach((newsArticle) => {
                console.log(newsArticle);
                //NEED TO CLEAR OUT THE INPUT FEILD

                document.querySelector(
                  "#newsContainer"
                ).innerHTML += CardMaker.buildArticlecard(newsArticle);
              });
            });
        }
      });
  },
  deleteButton: () => {
    return document
      .querySelector("body")
      .addEventListener("click", function () {
        if (event.target.id.includes("deleteButton")) {
          console.log("delete", event.target.id);
          const primaryKey = event.target.id.split("-")[1];
          console.log(primaryKey);
          newsApiManager.delete(primaryKey).then(() => {
              document.querySelector("#newsContainer").innerHTML ="";
              newsApiManager.getAllArticlesFromAPI().then((newsArticles) => {
                  newsArticles.forEach(newsArticle => {
                    document.querySelector("#newsContainer").innerHTML += CardMaker.buildArticlecard(newsArticle)
                  });
              
              })

          })
          
        }
      });
  },

  editButton: () => {
    return document
      .querySelector("body")
      .addEventListener("click", function () {
        if (event.target.id.includes("editButton")) {
          console.log("edit click");
          const primaryKey = event.target.id.split("-")[1]
          console.log (primaryKey)
         
        }
      });
  },
};

//MAKES HTML TO PRINT TO THE DOM
const CardMaker = {
  //BUILDS THE CARD THAT PRINTS THE NEWS ARTICLES
  buildArticlecard: (newsArticle) => {
    console.log(newsArticle);
    return `
    <h4>${newsArticle.headline}</h4>
    <P>${newsArticle.synopsis}</P>
    <form id ="button" action=${newsArticle.url}>
         <button type="submit">View Full Story</button>
      </form>
    <button id="deleteButton-${newsArticle.id}">Delete</button>
    <button id="editButton-${newsArticle.id}">Edit</button>  
      `;
  },
  //BULILDS THE FORM THAT WILL APPEAR WHEN THE NEW ARTICLE BUTTON IS PRESSED

  buildNewArticleform: () => {
    return `<form action="">
      <input type="text" placeholder="Headline" id="headlineInput">
      <input type="text" placeholder="Synopsis" id="synopsisInput">
      <input type="text" placeholder="URL" id="urlInput"> 
  </form>
  <button id="newArticleSave">Save</button>
 `;
  },
  newsEditForm: () => {
    return `<form action="">
    <input type="text" placeholder="Headline" value= ${newsArticle.headline}id="editHeadlineInput">
    <input type="text" placeholder="Synopsis" value= ${newsArticle.synopsis}id="editSynopsisInput">
    <input type="text" placeholder="URL" value= ${newsArticle.url}id="editUrlInput"> 
</form>
<button id="editArticleSave">Save</button>
`;
  }
};

newsEventlisters.deleteButton();
newsEventlisters.editButton();

// document.querySelector("body").addEventListener("click", function(){
//     if(event.target.id.includes("newArticleSave"))
//     console.log ("click")
// })
