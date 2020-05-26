import CardMaker from "./newsCardMaker.js"
import newsApiManager from "./newsApiManager.js"

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
  //The button that saves the new article 
    newArticleSaveButton: () => {
      return document
        .querySelector("body")
        .addEventListener("click", function () {
          if (event.target.id === "newArticleSave") {
            document.querySelector("#newsContainer").innerHTML = "";
            console.log("click");
            const headlineValue = document.querySelector("#headlineInput").value;
            const synopsisValue = document.querySelector("#synopsisInput").value;
            const urlValue = document.querySelector("#urlInput").value;
            const timeStamp = new Date().toLocaleString()
            console.log(headlineValue, synopsisValue, urlValue);
  
            const newArticleObject = {
              timeStamp: timeStamp,
              headline: headlineValue,
              synopsis: synopsisValue,
              url: urlValue,
              userId: 2
            };
            console.log(newArticleObject);
            newsApiManager
              .post(newArticleObject)
              .then(newsApiManager.getAllArticlesFromAPI)
              .then((newsArticles) => {
                document.querySelector("#newArticleFormDiv").innerHTML=""
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
    //this deletes the article
    deleteButton: () => {
      return document
        .querySelector("body")
        .addEventListener("click", function () {
          if (event.target.id.includes("deleteButton")) {
            console.log("delete", event.target.id);
            const primaryKey = event.target.id.split("-")[1];
            console.log(primaryKey);
            newsApiManager.delete(primaryKey).then(() => {
              document.querySelector("#newsContainer").innerHTML = "";
              newsApiManager.getAllArticlesFromAPI().then((newsArticles) => {
                newsArticles.forEach((newsArticle) => {
                  document.querySelector(
                    "#newsContainer"
                  ).innerHTML += CardMaker.buildArticlecard(newsArticle);
                });
              });
            });
          }
        });
    },
  //this adds the click event to the edit button
    editButton: () => {
      return document
        .querySelector("body")
        .addEventListener("click", function () {
          if (event.target.id.includes("editButton")) {
            console.log("edit click");
            const primaryKey = event.target.id.split("-")[1];
            console.log(primaryKey);
            const cardToReplace = document.querySelector(
              `#newsCard-${primaryKey}`
            );
            console.log(cardToReplace);
            fetch(`http://localhost:8088/newsArticles/${primaryKey}`)
              .then((newsArticles) => newsArticles.json())
              .then((newsArticle) => {
                console.log(newsArticle);
                cardToReplace.innerHTML = CardMaker.newsEditForm(newsArticle);
              });
          }
        });
    },
    //this lets you save the changes to the article that you've edited
    saveEdit: () => {
      document.querySelector("body").addEventListener("click", function () {
        if (event.target.id.includes("editArticleSave")) {
          console.log("click");
          const primaryKey = event.target.id.split("-")[1];
          console.log(primaryKey);
          const editheadlineValue = document.querySelector("#editHeadlineInput")
            .value;
          const editsynopsisValue = document.querySelector("#editSynopsisInput")
            .value;
          const editurlValue = document.querySelector("#editUrlInput").value;
          console.log(editheadlineValue, editsynopsisValue, editurlValue);
  
          const editArticleObject = {
            id: event.target.id.split("-")[1],
            headline: editheadlineValue,
            synopsis: editsynopsisValue,
            url: editurlValue,
            userId: 2,
          };
          console.log(editArticleObject);
          // newsApiManager.put()
          fetch(`http://localhost:8088/newsArticles/${primaryKey}`, {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(editArticleObject),
          })
            .then(newsApiManager.getAllArticlesFromAPI)
            .then((newsArticles) => {
              document.querySelector("#newsContainer").innerHTML=""
              newsArticles.forEach((newsArticle) => {
                console.log(newsArticle);
                document.querySelector(
                  "#newsContainer"
                ).innerHTML += CardMaker.buildArticlecard(newsArticle);
              });
            });
        }
      });
    },
  };
  
  export default newsEventlisters