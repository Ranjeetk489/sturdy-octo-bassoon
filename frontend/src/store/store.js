import { configureStore } from '@reduxjs/toolkit'
import authReducer from "./slices/AuthenticationSlice/authSlice";
import messageReducer from "./slices/AuthenticationSlice/messageSlice";
const reducer = {
  auth: authReducer,
  message: messageReducer
}
const store = configureStore({
  reducer: reducer,
  devTools: true,
})
export default store;
