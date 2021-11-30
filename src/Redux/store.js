import { configureStore } from "@reduxjs/toolkit";
import modalReducer from "./modalSlice";

export default configureStore({
    reducer: {
        modal: modalReducer
    }
});