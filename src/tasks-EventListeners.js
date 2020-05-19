const eventListenerObject = {

    newTaskForm: () => {
        document.querySelector("#tasksContainer").innerHTML += `<form id="newTaskForm">
        <input type="text" placeholder="Enter Task" id="taskName"> <input type="text" placeholder="Enter Date to Complete By" id="taskCompletionDate"> <button id="newTaskSave-Btn">Save</button>`
        document.getElementById("newTaskButton").style.display="none"
    }
}

export default eventListenerObject