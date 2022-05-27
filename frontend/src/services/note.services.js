import axios from 'axios';
import authHeader from './authHeader';

const API_URL="https://notes-backend-v1.herokuapp.com/";

const getAllNotes = () => {
    return axios.get(API_URL + "all_notes", {headers: authHeader()});
}

const addNewNote = () => {
    return axios.post(API_URL + 'add_new' , {headers: authHeader()})
}

const editSingleNote = (id) => {
    return axios.post(API_URL + 'edit_note'+ id , {headers: authHeader()})
}
const moveToTrash = (id) => {
    return axios.post(API_URL + 'to_trash'+ id , {headers: authHeader()})
}

const NoteService = {
    getAllNotes,
    addNewNote,
    editSingleNote,
    moveToTrash
}

export default NoteService