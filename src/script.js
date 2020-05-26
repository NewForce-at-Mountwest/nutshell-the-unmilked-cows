import tasksAPIManagerObject from "./tasks-APIManager.js"
import printAllTasks from "./tasks-DOMPrinter.js"
import eventListenerObject from "./tasks-EventListeners.js"
import newsApiManager from "./newsApiManager.js"
import CardMaker from "./newsCardMaker.js"
import newsEventlisters from "./newsEventListeners.js"
import chatAPIManagerObject from "./chat-APIManager.js"
import printAllMsgs from "./chat-DOMPrinter.js"

//Task Module starts here

// Tasks events on page load - Pat Shaver
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

//Click event listener for Save New Task button    
document
    .querySelector("body")
    .addEventListener("click", () => {
        if (event.target.id.includes("newTaskSave")) {
            console.log("You clicked the Save Task Button")
            eventListenerObject.saveNewTask(event)
        }
    });

//Click event listener for checking Completed checkbox
document
    .querySelector("#tasksContainer")
    .addEventListener("change", function () {
        if (event.target.checked) {
            const taskId = event.target.id.split("-")[3]
            eventListenerObject.markAsComplete(taskId)
        }
    });

//Click event listener for editing Task name and hitting enter to save the new name
document
    .querySelector("#tasksContainer")
    .addEventListener("click", () => {
        if (event.target.id.includes("task-name")) {
            eventListenerObject.printEditForm()
            addEventListener("keypress", function (e) {
                if (e.keyCode === 13) {
                    eventListenerObject.taskNameSave(event)
                }

            })
        }
    });


//Chat messages module starts here

chatAPIManagerObject.getAllMsgsFromAPI()
    .then((parsedMsgs) => {
        printAllMsgs(parsedMsgs)
    });

//Click event listener for New Task button
// document
//     .querySelector("#newChatButton")
//     .addEventListener("click", () => {
//         console.log("You clicked the New Chat Button")
//         eventListenerObject.newChatForm();
//     });

//Click event listener for Save New Task button    
// document
//     .querySelector("body")
//     .addEventListener("click", () => {
//         if (event.target.id.includes("newChatSave")) {
//             console.log("You clicked the Save Task Button")
//             eventListenerObject.saveNewChat(event)
//         }
//     });

//Click event listener for checking Completed checkbox
// document
//     .querySelector("#chatContainer")
//     .addEventListener("change", function () {
//         if (event.target.checked) {
//             const taskId = event.target.id.split("-")[3]
//             eventListenerObject.markAsComplete(taskId)
//         }
//     });

//Click event listener for editing Task name and hitting enter to save the new name
// document
//     .querySelector("#chatContainer")
//     .addEventListener("click", () => {
//         if (event.target.id.includes("chat-name")) {
//             eventListenerObject.printEditForm()
//             addEventListener("keypress", function (e) {
//                 if (e.keyCode === 13) {
//                     eventListenerObject.newChatMsgSave(event)
//                 }

//             })
//         }
//     });

//FETCHES NEWS DATA FROM API AND PRINTS IT TO THE DOM
newsApiManager.getAllArticlesFromAPI() .then((newsArticles) => {
    newsArticles.forEach((newsArticle) => {
  document.querySelector("#newsContainer").innerHTML+= CardMaker.buildArticlecard(newsArticle)
})
})

newsEventlisters.newArticleButton();
newsEventlisters.newArticleSaveButton()
newsEventlisters.deleteButton();
newsEventlisters.editButton();
newsEventlisters.saveEdit()


