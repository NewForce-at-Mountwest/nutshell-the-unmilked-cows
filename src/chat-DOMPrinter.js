const buildMsgs = (eachMsg) => {
    return `
    <div id="msg-${eachMsg.id}">
    <p id="chat-msg-${eachMsg.userId}"> ${eachMsg.userId}</p>
    <p id="chat-msg-${eachMsg.id}">  - ${eachMsg.message}</p>
    <hr>
    </div>`
};


const printAllMsgs = (msgsArray) => {
    // Clear the container
    document.querySelector("#chatContainer").innerHTML = "";
    msgsArray.forEach((msgInLoop) => {
        const htmlString = buildMsgs(msgInLoop);
        document.querySelector("#chatContainer").innerHTML += htmlString;
    })
    
};



export default printAllMsgs;