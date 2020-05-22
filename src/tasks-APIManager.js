
const tasksAPIManager = {
    
    getAllTasksFromAPI: () => {
        return fetch(
            "http://localhost:8088/tasks")
            .then(response => response.json())
    },

    postTask: (taskToPost) => {
        return fetch("http://localhost:8088/tasks", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body:JSON.stringify(taskToPost),
        });
    },

    patchTask: (taskIdToPatch) => {
        return fetch(`http://localhost:8088/tasks/${taskIdToPatch}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({completed: "true"})
          });
    },

    patchName: (Id,newName) => {
        return fetch(`http://localhost:8088/tasks/${Id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({name: `${newName}`})
          });
    },

    getOneTask: (taskId) => {
        return fetch(`http://localhost:8088/tasks/${taskId}`)
        .then((task) => task.json())

    },

    updateOneTask: (taskObject) => {
        return fetch(`http://localhost:8088/tasks/${taskObject.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(taskObject)
        })
    }
}
// export default tasksAPIManager;

