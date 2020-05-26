const chatAPIManager = {

    getAllMsgsFromAPI: () => {
        return fetch(
            "http://localhost:8088/chatMessages")
            .then(response => response.json())
    },

     postChat: (msgToPost) => {
         return fetch("http://localhost:8088/chatMessages", {
             method: "POST",
             headers: {
                 "Content-Type": "application/json",
             },
             body: JSON.stringify(msgToPost),
         });
     },

    patchMessage: (Id, newMessage) => {
        return fetch(`http://localhost:8088/chatMessages/${Id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ message: `${newMessage}` })
        });
    },

     getOneMsg: (msgId) => {
         return fetch(`http://localhost:8088/chatMessages/${msgId}`)
             .then((msg) => msg.json())

     }

}
export default chatAPIManager;

