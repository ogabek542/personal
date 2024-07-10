import {configureStore} from "@reduxjs/toolkit";
import postReducer from "../features/counter/postsSlice"

export const store = configureStore({
    reducer:{
        posts:postReducer
    }
})