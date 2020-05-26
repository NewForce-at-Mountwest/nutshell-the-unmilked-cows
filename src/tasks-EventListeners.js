import tasksAPIManager from "./tasks-APIManager.js";
import printAllTasks from "./tasks-DOMPrinter.js";

// This is called a "factory function". It builds and returns an object. We don't need to export it, because we only need access to it in this file.
const buildTaskObjectFromForm = () => {
    return {

        name: document.querySelector("#taskName").value,
        completion_date: document.querySelector("#taskCompletionDate").value,
        completed: "false",
        userId: 2
    };
};

const eventListenerObject = {

    newTaskForm: () => {
        document.querySelector("#tasksContainer").innerHTML += `
        <input type="text" placeholder="Enter Task" id="taskName"> <input type="text" placeholder="Date to Complete By" id="taskCompletionDate">&nbsp;&nbsp;<button id="newTaskSave-Btn">Save</button>`
        document.getElementById("newTaskButton").style.display = "none"
    },

    saveNewTask: (event) => {
        const taskObject = buildTaskObjectFromForm();
        tasksAPIManager
            .postTask(taskObject)
            .then(tasksAPIManager.getAllTasksFromAPI)
            .then(printAllTasks);

    },

    markAsComplete: (taskId) => {
        tasksAPIManager
        .patchTask(taskId)
        .then(tasksAPIManager.getAllTasksFromAPI)
        .then(printAllTasks);
    },

    printEditForm: () => {
        const primaryKey = event.target.id.split("-")[2]
        const taskToEdit = document.querySelector(`#task-name-${primaryKey}`)
        tasksAPIManager.getOneTask(primaryKey)
        .then (singleTaskObject => {
        taskToEdit.innerHTML =`<section id="editedTaskObject-${singleTaskObject.id}">
        <i>Edit Task Name>>&nbsp;&nbsp;<input type="text" id="editedTaskName-${singleTaskObject.id}" value="${singleTaskObject.name}">`
        })
    },

    taskNameSave: (event) => {
        const primaryKey = event.target.id.split("-")[1]
        const taskNameValue = event.target.value
        tasksAPIManager
        .patchName(primaryKey,taskNameValue)
        .then (tasksAPIManager.getAllTasksFromAPI)
        .then (printAllTasks)
    }
}

export default eventListenerObject
