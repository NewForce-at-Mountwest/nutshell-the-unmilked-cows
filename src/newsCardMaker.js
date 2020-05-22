//MAKES HTML TO PRINT TO THE DOM
const CardMaker = {
    //BUILDS THE CARD THAT PRINTS THE NEWS ARTICLES
    buildArticlecard: (newsArticle) => {
      // console.log(newsArticle);
     if (newsArticle.userId == 2){
      return `
      <div id="newsCard-${newsArticle.id}">
      <p>${newsArticle.timeStamp}</p>
      <h4>${newsArticle.headline}</h4>
      <P>${newsArticle.synopsis}</P>
      <form id ="button" action=${newsArticle.url}>
           <button type="submit">View Full Story</button>
        </form>
      <button id="deleteButton-${newsArticle.id}">Delete</button>
      <button id="editButton-${newsArticle.id}">Edit</button> 
      </div> 
        `;
      } else {
        return `<div>`
      }
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
    //Build the edit form
    newsEditForm: (object) => {
      return `<form action="">
      <input type="text" placeholder="Headline" value= "${object.headline}"id="editHeadlineInput">
      <input type="text" placeholder="Synopsis" value= "${object.synopsis}"id="editSynopsisInput">
      <input type="text" placeholder="URL" value= "${object.url}"id="editUrlInput"> 
  </form>
  <button id="editArticleSave-${object.id}">Save</button>
  `;
    },
  };
   export default CardMaker