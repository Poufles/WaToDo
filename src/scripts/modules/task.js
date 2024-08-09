function Task (taskDetails) {
    let taskname = taskDetails.taskname;
    let taskdesc = taskDetails.tasdesc;
    let taskdue = taskDetails.taskdue;
    let taskpriority = taskDetails.taskpriority;
    let taskstatus = taskDetails.taskstatus;

    const editTask = (newTask) => {
        taskname = newTask.taskname;
        taskdesc = newTask.taskdesc;
        taskdue = newTask.taskdue;
        taskpriority = newTask.taskpriority;
        taskstatus = newTask.taskstatus;
    };

    const getTaskDetails = () => {
        return { taskname, taskdesc, taskdue, taskpriority, taskstatus };
    };

    return {
        editTask,
        getTaskDetails,
    }
};

export default Task;