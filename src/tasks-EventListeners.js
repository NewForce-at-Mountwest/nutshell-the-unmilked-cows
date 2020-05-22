// import tasksAPIManager from "./tasks-APIManager.js"

// import tasksAPIManager from "./tasks-APIManager.js";
// import printAllTasks from "./tasks-DOMPrinter.js";

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
    }
}

// export default eventListenerObject