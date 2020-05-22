//FETCHES NEWS DATA FROM API AND PRINTS IT TO THE DOM
newsApiManager.getAllArticlesFromAPI() .then((newsArticles) => {
    newsArticles.forEach((newsArticle) => {
  document.querySelector("#newsContainer").innerHTML+= CardMaker.buildArticlecard(newsArticle)
})
})

// newsApiManager.post(newsArticles) .then((newsArticles) => {

//   documengitt.querySelector("#newsContainer").innerHTML+= CardMaker.buildArticlecard(newsArticle)
// })



newsEventlisters.newArticleButton();
newsEventlisters.newArticleSaveButton()
newsEventlisters.deleteButton();
newsEventlisters.editButton();
newsEventlisters.saveEdit()
// import tasksAPIManagerObject from "./tasks-APIManager.js"
// import printAllTasks from "./tasks-DOMPrinter.js"
// import eventListenerObject from "./tasks-EventListeners.js"
//Tasks events on page load - Pat Shaver
//Gets all existing tasks from nutshell api for logged in user, which is hardcoded as the DM username (Derek- userId:2) and Prints them to the taskContainer on page load
tasksAPIManagerObject.getAllTasksFromAPI()
    .then((parsedTasks) => {
        printAllTasks(parsedTasks)
    });

//Click event listener for New Task button
document
    .querySelector("#newTaskButton")
    .addEventListener("click", () => {
        console.log("You clicked the New Task Button")
        eventListenerObject.newTaskForm();
    });

document
    .querySelector("body")
    .addEventListener("click", () => {
        if (event.target.id.includes("newTaskSave")) {
            console.log("You clicked the Save Task Button")
            eventListenerObject.saveNewTask(event)
        }
    });

document
    .querySelector("#tasksContainer")
    .addEventListener("change", function () {
        if (event.target.checked) {
            const taskId = event.target.id.split("-")[3]
            eventListenerObject.markAsComplete(taskId)
        }
    });
