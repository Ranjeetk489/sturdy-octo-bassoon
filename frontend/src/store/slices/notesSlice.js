import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import NoteService from '../../services/note.services';
import { setMessage } from './messageSlice';

export const addNewNote = createAsyncThunk(
    "user/notes",
    async(thunkAPI) => {
        try {
            const response = await NoteService.addNewNote();
            thunkAPI.dispatch(setMessage(response.message));
            return {notes: response.data}
        }
        catch(error) {
            const errorMessage = (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
                return {errorMessage}
        }
    }
);

export const getAllNotes = createAsyncThunk(
    "user/allNotes",
    async(thunkAPI) => {
        try {
            const response = await NoteService.getAllNotes();
            thunkAPI.dispatch(setMessage(response.message))
            return {notes:response.data.response}
        }
        catch(error) {
            const errMsg = (error.response &&
                error.response.data &&
                error.response.data.message) ||
              error.message ||
              error.toString();
              return {errMsg};
        }
    }
);


const initialState = {notes: []}
const notesSlice = createSlice({
    name:"user",
    initialState,
    extraReducers: {
        [addNewNote.fulfilled]: (state, action) => {
            state = action.payload
        },
        [getAllNotes.fulfilled]: (state,action) => {
            state.notes =action.payload
            console.log(state)
            console.log(action.payload)
        }
    }
})

export default notesSlice.reducer;
