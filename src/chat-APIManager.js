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
     }

    // patchTask: (taskIdToPatch) => {
    //     return fetch(`http://localhost:8088/tasks/${taskIdToPatch}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ completed: "true" })
    //     });
    // },

    // patchName: (Id, newName) => {
    //     return fetch(`http://localhost:8088/tasks/${Id}`, {
    //         method: "PATCH",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify({ name: `${newName}` })
    //     });
    // },

    // getOneTask: (taskId) => {
    //     return fetch(`http://localhost:8088/tasks/${taskId}`)
    //         .then((task) => task.json())

    // },

    // updateOneTask: (taskObject) => {
    //     return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
    //         method: "PUT",
    //         headers: {
    //             "Content-Type": "application/json"
    //         },
    //         body: JSON.stringify(taskObject)
    //     })

    // }
}
export default chatAPIManager;

