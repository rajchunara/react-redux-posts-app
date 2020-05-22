import React from 'react'
import {useSelector, useDispatch} from 'react-redux';
import style from './css/post.module.css';
import {removePostFromFavourite} from '../redux/posts/postAction'



export default function FaviouritePostComponent() {


    const postState = useSelector(state => state.postState);
    const favouritePosts = postState.favouritePost ;
    const dispatch = useDispatch();

    const favPosts = () => {
            
        if(favouritePosts.length){
            return (
            favouritePosts.map(post =>{

                return (
                    <div className={style.favouritePostContainer} key={post.id}>
                        <h3 className={style.favouritePostTitle}>{post.title}</h3>
                        <p className={style.favouritePostBody}>{post.body}</p>
                        <button className={style.addFavouriteButton} onClick={()=>dispatch(removePostFromFavourite(post.id))}>Remove</button>

                    </div>
                )

            })
            )            
        }else { 
            return(
                <h3 className={style.noFavouritePost}>No Favourite post</h3>
            )            
        }
    }


    return (
        <div className={style.favouritePostTab}>            
            <h1 className={style.favouritePostContainerTitle}>  Favourite Posts</h1>
            {favPosts()}
        </div>
    )

    
}
