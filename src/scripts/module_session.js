const session = function () {
    const key = 'client data (do not delete)';
    const JSONTemplate = { clients: [], };
    let localData

    // Verify if local storage is available
    /*
    Add code here later coz yes.
    */

    // Creating a session
    const createSession = () => {
        if (localStorage.getItem(key) == null) localStorage.setItem(key, JSON.stringify(JSONTemplate));
        localData = JSON.parse(localStorage.getItem(key));
    };

    // Retrieve JSON data
    const retrieveData = () => localData;

    // Update JSON data
    const updateData = () => {
        const newData = JSON.stringify(localData);
        localStorage.setItem(key, newData);
        localData = JSON.parse(localStorage.getItem(key));
    };

    return {
        createSession,
        retrieveData,
        updateData,
    };
}();


export default session;