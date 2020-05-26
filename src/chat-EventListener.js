import chatAPIManager from "./chat-APIManager.js";
import printAllMsgs from "./chat-DOMPrinter.js";
// This is called a "factory function". It builds and returns an object. We don't need to export it, because we only need access to it in this file.
const buildChatObjectFromForm = () => {
    
    return {
        message: document.querySelector("#newChatMsg").value,
        userId: 2
    };
};

const chatEventListenerObject = {

    // newTaskForm: () => {
    //     document.querySelector("#tasksContainer").innerHTML += `
    //     <input type="text" placeholder="Enter Task" id="taskName"> <input type="text" placeholder="Date to Complete By" id="taskCompletionDate">&nbsp;&nbsp;<button id="newTaskSave-Btn">Save</button>`
    //     document.getElementById("newTaskButton").style.display = "none"
    // },

    saveNewChat: (event) => {
        const chatObject = buildChatObjectFromForm();
        chatAPIManager
            .postChat(chatObject)
            .then(chatAPIManager.getAllMsgsFromAPI)
            .then(printAllMsgs);

    }

    // markAsComplete: (taskId) => {
    //     tasksAPIManager
    //     .patchTask(taskId)
    //     .then(tasksAPIManager.getAllTasksFromAPI)
    //     .then(printAllTasks);
    // },

    // printEditForm: () => {
    //     const primaryKey = event.target.id.split("-")[2]
    //     const taskToEdit = document.querySelector(`#task-name-${primaryKey}`)
    //     tasksAPIManager.getOneTask(primaryKey)
    //     .then (singleTaskObject => {
    //     taskToEdit.innerHTML =`<section id="editedTaskObject-${singleTaskObject.id}">
    //     <i>Edit Task Name>>&nbsp;&nbsp;<input type="text" id="editedTaskName-${singleTaskObject.id}" value="${singleTaskObject.name}">`
    //     })
    // },

    // taskNameSave: (event) => {
    //     const primaryKey = event.target.id.split("-")[1]
    //     const taskNameValue = event.target.value
    //     tasksAPIManager
    //     .patchName(primaryKey,taskNameValue)
    //     .then (tasksAPIManager.getAllTasksFromAPI)
    //     .then (printAllTasks)
    // }
}

export default chatEventListenerObject