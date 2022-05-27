import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/authSlice";
import messageReducer from "./slices/messageSlice";
import notesReducer from './slices/notesSlice';

const reducer = {
  auth: authReducer,
  message: messageReducer,
  notes: notesReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;
