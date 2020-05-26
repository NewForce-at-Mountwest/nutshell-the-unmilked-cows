const buildMsgs = (eachMsg) => {
    let userName = ""
    if (eachMsg.userId == 1){
        userName = "Pat"
    }else if(eachMsg.userId == 2){
        userName = "Derek"
    }else if(eachMsg.userId == 3){
        userName = "Devin"
    }

    return `

    <div id="msg-${eachMsg.id}">
    <p id="chat-msg-${eachMsg.userId}"> ${userName}</p>
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