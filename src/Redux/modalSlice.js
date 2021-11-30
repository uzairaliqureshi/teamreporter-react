import { createSlice } from "@reduxjs/toolkit";

export const modalSlice = createSlice({
    name: "modal",
    initialState: { boolean: false, message: "" },
    reducers: {
        modalMessage: (state, action) => { state.message = action.payload; },
        showModal: state => { state.boolean = true; },
        hideModal: state => { state.boolean = false; },
    }
});

export const { modalMessage, showModal, hideModal } = modalSlice.actions;

export default modalSlice.reducer;