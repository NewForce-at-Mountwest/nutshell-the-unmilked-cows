const buildTaskList = (eachTask) => {
    if(eachTask.completed == "False"){
    return `
    <div id="tasks-${eachTask.id}">
    <p> Task - ${eachTask.name}</p>
    <p> Expected Completion Date: ${eachTask.completion_date}
    <input type="checkbox" name="task-complete-chkbx" id="task-complete-chkbx">
    <p>${eachTask.userId}</p>
    <p>-----------------------------------------------------------------------------------</p>
    </div>
`
} else {
    return `
    <div> `
}};


const printAllTasks = (tasksArray) => {
    // Clear the container
    document.querySelector("#tasksContainer").innerHTML = "";
    tasksArray.forEach((taskInLoop) => {
        const htmlString = buildTaskList(taskInLoop);
        document.querySelector("#tasksContainer").innerHTML += htmlString;
    });
};

export default printAllTasks;