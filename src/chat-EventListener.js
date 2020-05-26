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

    },

    printEditMsg: () => {
        const primaryKey = event.target.id.split("-")[2]
        console.log(primaryKey)
        const msgToEdit = document.querySelector(`#msg-${primaryKey}`)
        chatAPIManager.getOneMsg(primaryKey)
            .then(singleMsgObject => {
                msgToEdit.innerHTML = `<section id="editedMsgObject-${singleMsgObject.id}">
         <i>Edit Message>>&nbsp;&nbsp;<input type="text" id="editedMsg-${singleMsgObject.id}" value="${singleMsgObject.message}">`
            })
    },

    editedMsgSave: (event) => {
        const primaryKey = event.target.id.split("-")[1]
        const newMsgValue = event.target.value
        chatAPIManager
            .patchMessage(primaryKey, newMsgValue)
            .then(chatAPIManager.getAllMsgsFromAPI)
            .then(printAllMsgs)
    }
}

export default chatEventListenerObject