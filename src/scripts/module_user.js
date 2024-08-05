import session from "./module_session.js";

const User = function () {
    let name;
    let password;
    let bio;
    let level;
    let notes;
    let projects;
    let lastSession;

    const Login = (loginDetails) => {
        const data = session.retrieveData();

        for (let client of data.clients) {
            if (loginDetails.username === client.name && loginDetails.password === client.password) {
                name = client.name;
                password = client.password;
                bio = client.bio;
                level = client.level;
                notes = client.notes;
                projects = client.projects;
                lastSession = client.lastSession;

                console.log('Logged In');
                break;
            };
        };
    };

    const Logout = () => {
        name = undefined;
        password = undefined;
        bio = undefined;
        level = undefined;
        notes = undefined;
        projects = undefined;
        lastSession = undefined;
    };

    const Register = (regDetails) => {
        const data = session.retrieveData()
        data.clients.push(regDetails);
        session.updateData();
    };

    const updateUsername = (username) => name = username;
    const updatePassword = (userpassword) => password = userpassword;
    const updateUserBio = (userbio) => bio = userbio;
    const addLevel = () => ++level;
    const removeLevel = () => --level;
    const addNote = (note) => {
        notes.push(note);
        session.updateData();
    };
    const updateNote = (index, noteDetails) => {
        notes.splice(index, 1, noteDetails);
        session.updateData();
    };
    const deleteNote = (index) => {
        notes.splice(index, 1);
        session.updateData();
    };
    const addProject = (project) => {
        projects.push(project);
        session.updateData();
    };
    const updateProject = (index, projectDetails) => {
        projects.splice(index, 1, projectDetails);
        session.updateData();
    };
    const deleteProject = (index) => {
        projects.splice(index, 1);
        session.updateData();
    };
    const getUserDetails = () => {
        return { name, password, bio, level, notes, projects, lastSession };
    };

    return {
        Login,
        Logout,
        Register,
        updateUsername,
        updatePassword,
        updateUserBio,
        addLevel,
        removeLevel,
        addNote,
        updateNote,
        deleteNote,
        addProject,
        updateProject,
        deleteProject,
        getUserDetails,
    };
}();

export default User;