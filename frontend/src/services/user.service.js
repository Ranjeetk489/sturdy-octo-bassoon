import axios from 'axios';
import authHeader from './authHeader';

const API_URL="https://notes-backend-v1.herokuapp.com/"


const getUserDetails =  () => {
    return axios.get(API_URL+"user_info", {headers: authHeader()});
}
const getAllNotes = () => {
    return axios.get(API_URL + "all_notes", {headers: authHeader()});
}
const getAllArchivedNotes = () => {
    return axios.get(API_URL + "all_archived_notes", {headers: authHeader()});
}

const getAllTrashNotes = () => {
    return axios.get(API_URL + "all_trash_notes", {headers: authHeader()})
}



const userService = {
    getUserDetails, 
    getAllNotes,
    getAllArchivedNotes,
    getAllTrashNotes
}

export default userService;