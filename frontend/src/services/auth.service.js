import axios from 'axios';

const API_URL="https://notes-backend-v1.herokuapp.com/"

function login (email, password) {
    const loginData = JSON.stringify({email, password})
    return axios.post(
        `${API_URL}login`, loginData , {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': '*'
            }
        }
    )
    .then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        }
        return response.data;
    });
};

function signup (username, email, password) {
    const signupData = {username, email, password};
    return axios.post(
        `${API_URL}signup`, signupData , {
            headers: {
              // Overwrite Axios's automatically set Content-Type
              'Access-Control-Allow-Origin': '*',
              'Content-Type': 'application/json',
            }
        }
    )
    .then((response) => {
        if(response.data.accessToken) {
            localStorage.setItem("user", JSON.stringify(response.data.accessToken));
        }
        return response.data;
    });
};

function logout () {
    localStorage.removeItem("user");
}

const authService = {
    login,
    signup,
    logout
}

export default authService;