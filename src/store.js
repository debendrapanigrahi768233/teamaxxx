import { combineReducers, configureStore } from "@reduxjs/toolkit";
import kanbanWfReducer from './slices/kanbanWfSlice'

const rootReducer=combineReducers({kanbanWfReducer:kanbanWfReducer})

const store = configureStore({
    reducer: rootReducer,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
        serializableCheck: false,
    }),
})

export default store