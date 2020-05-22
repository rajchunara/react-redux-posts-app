import { FETCH_POST_REQUEST,
     FETCH_POST_SUCCESS, 
     FETCH_POST_FAILURE, 
     ADD_POST_TO_FAVIOURITE,
     REMOVE_POST_FROM_FAVIOURITE } from "./postActionTypes"

const initialState = {
    loading:false,
    posts:[],
    favouritePost:[],
    error:''
}

export const postReducer = (state = initialState, action)=>{
    //console.log(state);

    switch(action.type){
        case FETCH_POST_REQUEST: 
        return{
            ...state,
            loading:true
        }

        case FETCH_POST_SUCCESS:
            return{
                ...state,
                loading:false,
                posts:action.payload,
                error:''
            }

        case FETCH_POST_FAILURE:
            return{
                ...state,
                loading:false,
                posts:[],
                error:action.payload
            }

        case ADD_POST_TO_FAVIOURITE:{
            const newPosts = state.posts.map(post => {
                if(post.id === action.payload.id){   
                    return {
                        ...post,
                        addPostToFavouriteButton: !post.addPostToFavouriteButton
                    }                                 
                }
                return post
            })
            return{
                ...state,
                posts:newPosts,
                favouritePost:[...state.favouritePost, action.payload]
            }
        }

        case REMOVE_POST_FROM_FAVIOURITE:{
            const newPosts = state.posts.map(post => {
                if(post.id === action.payload){   
                    return {
                        ...post,
                        addPostToFavouriteButton: !post.addPostToFavouriteButton
                    }             
                    
                }
                return post
            })


            const filteredFavPost = state.favouritePost.filter(post => post.id !== action.payload)

            return{
                ...state,
                posts: newPosts,
                favouritePost: filteredFavPost
            }

        }

        default: return state
    }
}

