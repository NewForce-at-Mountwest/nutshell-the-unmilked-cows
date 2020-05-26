// pats imports
import tasksAPIManagerObject from "./tasks-APIManager.js"
import printAllTasks from "./tasks-DOMPrinter.js"
import eventListenerObject from "./tasks-EventListeners.js"

// making my fetch constant
const apiManager = {
    getAllEventsFromAPI: () => {
        return fetch("http://localhost:8088/events")
            .then((dirtyMoney) => dirtyMoney.json())
    },

}
//this is me posting to the DOM.... yay
fetch("http://localhost:8088/events")
    .then(nutshell => nutshell.json())
    .then(parsedEvents => {
        parsedEvents.forEach((eventsObject) => {
            document.querySelector("#eventContainer").innerHTML += `
    <h3 id="${eventsObject.name}-${eventsObject.id}">${eventsObject.name}</h3>
    <p id="${eventsObject.date}-${eventsObject.id}">Date:${eventsObject.date}</p>
    <p id ="${eventsObject.location}-${eventsObject.id}">Location:${eventsObject.location}</p>
    <button id= "edit-event-${eventsObject.id}">Edit</button>`
        })

        //lets make the save button work
        document.querySelector("#newEventButton").addEventListener("click", function () {
            console.log("clicked")
            return document.querySelector("#eventFieldset").innerHTML += `
       <fieldset>
       <input id="newEventName" placeholder="Event Name">
       <input id="newEventDate" placeholder="Event Date">
       <input id="newEventLocation" placeholder="Event Location">
       </fieldset>
       <div>
           <button id ="eventSave">save</button>
       </div>`
        })

    });


const buildEventsObjectFromForm = () => {
    return {
        name: document.querySelector("#newEventName").value,
        date: document.querySelector("#newEventDate")
            .value,
        location: document.querySelector("#newEventLocation").value,

    };
}

// clicking save button
document.querySelector("body").addEventListener("click", function () {
    if (event.target.id === "eventSave") {
        const eventValue = (buildEventsObjectFromForm())
        console.log(eventValue)
        postEvents(eventValue)
    }

})
// just need to make it repost from the api after saving a new object
const postEvents = (eventsObject) => {
    fetch("http://localhost:8088/events", {
        // Replace "url" with your API's URL
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(eventsObject),
    })
        .then(function () {
            document.querySelector("#eventContainer").innerHTML = ""
            apiManager.getAllEventsFromAPI()
                .then((parsedEvents) => {
                    parsedEvents.forEach((eventsObject) => {
                        document.querySelector("#eventContainer").innerHTML += `
        <h3>${eventsObject.name}</h3>
        <p>Date:${eventsObject.date}</p>
        <p>Location:${eventsObject.location}</p>
        <button id= "delete-event>Delete</button>`

                    })
                })
        })
}

//edit click event
document.querySelector("body").addEventListener("click", function () {
    if (event.target.id.includes("edit-event")) {
        // const eventValue = (buildEventsObjectFromForm())
        console.log("you clicked")
        const eventTarget = event.target.id.split("-")[2]

        document.querySelector("#eventContainer").innerHTML += `
                     <fieldset>
    <input id="editEventName" placeholder="Event Name"
    value="${eventsObject.name}>
    <input id="editEventDate" placeholder="Event Date" value="${eventsObject}>
    <input id="editEventLocation" placeholder="Event Location" value="${eventTarget.location}>
    </fieldset>
    <div>
        <button id ="editSave-${eventTarget}">save</button>`









    }
})
document.querySelector("body").addEventListener("click", function () {
    if (event.target.id.includes("editSave")) {
        const eventTarget = event.target.id.split("-")[1]
console.log(eventTarget)
        const editEventName = document.querySelector("#editEventName").value
        const editEventDate = document.querySelector("#editEventDate").value
        const editEventLocation = document.querySelector("#editEventLocation").value
        console.log(editEventDate, editEventLocation, editEventName)
    }
})
// const printAllEvents = (eventsObject) => {
//     eventsObject.forEach((eventsObjectInLoop) => {
//       const htmlString = buildRestaurantCard(eventsObjectInLoop);
//       document.querySelector("##eventContainer").innerHTML += htmlString;
//     });
//   };



//pats code from here down

//Tasks events on page load - Pat Shaver
import newsApiManager from "./newsApiManager.js"
import CardMaker from "./newsCardMaker.js"
import newsEventlisters from "./newsEventListeners.js"
import chatAPIManagerObject from "./chat-APIManager.js"
import printAllMsgs from "./chat-DOMPrinter.js"
import chatEventListenerObject from "./chat-EventListener.js"

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

//Click event listener for entering new chat message and hitting enter to save it to the chat messages container
document
    .querySelector("#newChatMsg")
    .addEventListener("keypress", function (e) {
        if ((e.keyCode === 13)) {
            console.log(event.target.id)
            chatEventListenerObject.saveNewChat(event)
        }

    });

document
.querySelector("#chatContainer")
.addEventListener("click", ()=>{
    console.log(event.target.id)
    if(event.target.id.includes("chat-msg")) {
        chatEventListenerObject.printEditMsg()
        addEventListener("keypress", function (e) {
            if (e.keyCode === 13) {
                chatEventListenerObject.editedMsgSave(event)
            }

        })
    }
});
    


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





//FETCHES NEWS DATA FROM API AND PRINTS IT TO THE DOM
newsApiManager.getAllArticlesFromAPI().then((newsArticles) => {
    newsArticles.forEach((newsArticle) => {
        document.querySelector("#newsContainer").innerHTML += CardMaker.buildArticlecard(newsArticle)
    })
})

newsEventlisters.newArticleButton();
newsEventlisters.newArticleSaveButton()
newsEventlisters.deleteButton();
newsEventlisters.editButton();
newsEventlisters.saveEdit()


