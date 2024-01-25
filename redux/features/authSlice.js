import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isLoading: true,
    user: null,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuth: (state) => {
            state.isAuthenticated = true;
        },
        logout: (state, action) => {
            state.isAuthenticated = false;
            state.user = null;
        },
        finishInitialLoad: (state) => {
            state.isLoading = false;
        },
        setUserData: (state, action) => {
            state.user = action.payload;
        },
    },
});

export const { setAuth, logout, finishInitialLoad, setUserData } =
    authSlice.actions;
export default authSlice.reducer;
