import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./features/authSlice";
import sellerRegisterReducer from "./features/sellerRegisterSlice";
import { apiSlice } from "./services/apiSlice";
import { combineReducers } from "redux";

// Import necessary functions and storage from redux-persist
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

// Configuration for redux-persist
const persistConfig = {
    key: "root",
    storage,
    whitelist: ["auth", "sellerReg"], // only auth and sellerReg will be persisted
};

// Configure the rootReducer with combineReducers if you have multiple reducers
const rootReducer = combineReducers({
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    sellerReg: sellerRegisterReducer,
});

// Create a persisted reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const makeStore = () => {
    const store = configureStore({
        reducer: persistedReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: {
                    ignoredActions: ["persist/PERSIST"], // Ignore these actions for the serializableCheck middleware
                },
            }).concat(apiSlice.middleware),
        devTools: process.env.NODE_ENV != "production",
    });
    const persistor = persistStore(store); // Create a persistor
    return { store, persistor }; // Return both the store and the persistor
};

export default makeStore;
