import { createSlice } from "@reduxjs/toolkit";

const initialState = { user: "null" };

export const modalSlice = createSlice({
    name: "curUserSlice",
    initialState,
    reducers: {
        setCurUser: (state, action) => { state.user = action.payload; },
    }
});

export const { setCurUser } = modalSlice.actions;

export default modalSlice.reducer;