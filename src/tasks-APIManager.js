
const tasksAPIManager = {
    getAllTasksFromAPI: () => {
        return fetch(
            "http://localhost:8088/tasks")
            .then(response => response.json())
    }
}

export default tasksAPIManager;