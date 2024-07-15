import { createSlice, nanoid } from "@reduxjs/toolkit";
import {sub} from "data-fns"

const initialState = [
    {id:"1",title:"Learning Redux Toolkit",content:"I've heared good things.",date:sub(new Date(),{minutes:10}).toISOString(),},
    {id:"2",title:"Slices...",content:"The more I say slice, the more I want pizza ",date:sub(new Date(),{minutes:5}).toISOString(),},
];

const postsSlice = createSlice ({
    name:"posts",
    initialState,
    reducers:{
        postAdded(state,action){
            state.push(action.payload)
        },
        prepare(title,content,userId){
            return {
                payload:{
                    id:nanoid(),
                    title,
                    content,
                    userId,
                    date:new Date().toISOString(),
                }
            }
        }
    },
});

export const selectAllPosts = (state) => state.posts;

export const {postAdded} = postsSlice.actions; 


export default postsSlice.reducer  