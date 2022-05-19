import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import { setMessage } from './messageSlice';
import authService from '../../../services/auth.service';


const user = JSON.parse(localStorage.getItem("user"));

export const signup = createAsyncThunk(
    "auth/signup",
    async ({username, email, password},thunkAPI) => {
        try {
            const data = await authService.signup(username, email, password);
            thunkAPI.dispatch(setMessage(data.message));
            return {user:data.accessToken}
        }
        catch(error) {
            const message = (error.response && error.response.data) || error.message || error.toSring();
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }
    }
)

export const login = createAsyncThunk(
    "auth/login", 
    async({email, password}, thunkAPI) => {
        try {
            const data = await authService.login(email, password);
            thunkAPI.dispatch(setMessage(data.message));
            return {user:data.accessToken}
        }
        catch (error) {
            const message = error.response.data.message;
            thunkAPI.dispatch(setMessage(message));
            return thunkAPI.rejectWithValue();
        }   
    }
)

export const logout = createAsyncThunk (
    "auth/logout", async()=> {
        await authService.logout();
    }
);

const initialState = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [signup.fulfilled]: (state, action) => {
      state.isLoggedIn = true;

    },
    [signup.rejected]: (state, action) => {
      state.isLoggedIn = false;
    },
    [login.fulfilled]: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload.user;
    },
    [login.rejected]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
    [logout.fulfilled]: (state, action) => {
      state.isLoggedIn = false;
      state.user = null;
    },
  },
})

const { reducer } = authSlice;
export default reducer;