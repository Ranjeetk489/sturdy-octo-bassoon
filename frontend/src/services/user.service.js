import axios from 'axios';
import authHeader from './authHeader';

const API_URL="https://notes-backend-v1.herokuapp.com/"

const getUserDetails = () => {
    return axios.get(API_URL+"user_info", {headers: authHeader()});
}
const getAllNotes = () => {
    return axios.get(API_URL + "all_notes", {headers: authHeader()});
}

const userService = {
    getUserDetails, 
    getAllNotes
}

export default userService;