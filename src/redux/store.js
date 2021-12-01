import { configureStore } from "@reduxjs/toolkit";
import currentUser from "./curUserSlice";

export default configureStore({
    reducer: {
        curUser: currentUser
    }
});