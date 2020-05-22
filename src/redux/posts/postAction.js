//Action Creators

import { FETCH_POST_REQUEST, 
        FETCH_POST_SUCCESS,
         FETCH_POST_FAILURE,
         ADD_POST_TO_FAVIOURITE,
        REMOVE_POST_FROM_FAVIOURITE } from "./postActionTypes";
import axios from 'axios';

export const fetchPostsRequest=()=>{
    return{
        type:FETCH_POST_REQUEST
    }
}

export const fetchPostsSuccess = posts => {     
    return {
        type:FETCH_POST_SUCCESS,
        payload:posts
    }
}

export const fetchPostsFailure = error =>{
    return{
        type:FETCH_POST_FAILURE,
        payload:error
    }
}

export const addPostToFavourite = post =>{
    return{
        type:ADD_POST_TO_FAVIOURITE,
        payload:post
    }
}

export const removePostFromFavourite = postId => {
    return{
        type:REMOVE_POST_FROM_FAVIOURITE,
        payload:postId
    }
}




//In this action we will return function and 
//this fuction does not have to be pure function
//It can make async requests
export const fetchPosts = ()=>{
    return  (dispatch)=>{
        dispatch(fetchPostsRequest());
         axios.get('https://jsonplaceholder.typicode.com/posts')
                .then(res=>{
                    
                    //Add property to the data object "addPostToFavouriteButton"
                    const posts = res.data.map(post => {
                        return {
                            ...post,
                            addPostToFavouriteButton : true
                        }
                    });
                    dispatch(fetchPostsSuccess(posts))
                })
                .catch(err => {
                    const errMessage = err.message;
                    dispatch(fetchPostsFailure(errMessage));
                })
    }
}