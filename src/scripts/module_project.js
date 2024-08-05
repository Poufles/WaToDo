function Project(projectDetails) {
    let projectname = projectDetails.projectname;
    let projectdesc = projectDetails.projectdesc;
    let projectdue = projectDetails.projectdue;
    let projectprogression = projectDetails.projectprogression;
    let projectpriority = projectDetails.projectpriority;
    let projecttasks = projectDetails.projecttasks;

    // Project editing
    const editProject = (newProject) => {
        projectname = newProject.projectname;
        projectdesc = newProject.projectdesc;
        projectdue = newProject.projectdue;
        projectprogression = newProject.projectprogression;
        projectpriority = newProject.projectpriority;
    };

    // (R)EAD Methods for tasks
    const addTask = (task) => {
        projecttasks.push(task);
    };
    const updateTask = (index, task) => {
        projecttasks.splice(index, 1, task);
    };
    const deleteTask = (index) => projecttasks.splice(index, 1);

    // Get Project Detail
    const getProjectDetails = () => {
        return { projectname, projectdesc, projectdue, projectprogression, projectpriority, projecttasks };
    };

    return {
        editProject,
        addTask,
        updateTask,
        deleteTask,
        getProjectDetails,
    };
};

export default Project;