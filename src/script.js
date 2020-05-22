import tasksAPIManagerObject from "./tasks-APIManager.js"
import printAllTasks from "./tasks-DOMPrinter.js"
import eventListenerObject from "./tasks-EventListeners.js"

//Tasks Module Starts here

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
