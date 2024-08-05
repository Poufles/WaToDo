function Note (noteDetails) {
    let notename = noteDetails.notename;
    let notedesc = noteDetails.notedesc;
    let notedue = noteDetails.notedue;
    let notepriority = noteDetails.notepriority;
    let notestatus = noteDetails.notestatus;

    const editNote = (newNote) => {
        notename = newNote.notename;
        notedesc = newNote.notedesc;
        notedue = newNote.notedue;
        notepriority = newNote.notepriority;
        notestatus = newNote.notestatus;
    };

    const getNoteDetails = () => {
        return { notename, notedesc, notedue, notepriority, notestatus };
    };

    return {
        editNote,
        getNoteDetails,
    }
};

export default Note;