import React, { Component } from 'react';
import {fetchPosts, addPostToFavourite, removePostFromFavourite} from '../redux/posts/postAction';
import {connect} from 'react-redux'
import style from './css/post.module.css';


 class PostComponent extends Component {

    componentDidMount(){
        this.props.fetchPost()
    }

    render() {
        const {postData} = this.props;
        
        const posts = () => {
            if(postData.loading){
                return(
                    <h2>Loading...</h2>
                )
            }else if(postData.error){
                return(
                <h3>Error:{postData.error}</h3>
                )
            }else {
                return (
                    postData.posts.map(post =>{
                        return (
                                <div className={style.postContainer} key={post.id}>
                                    <h3 className={style.postTitle}>{post.title}</h3>
                                    <p className={style.postBody}>{post.body}</p>
                                    {post.addPostToFavouriteButton?                                    
                                    <button className={style.addFavouriteButton} onClick={()=>this.props.addPostToFavourite(post)}>Add to favourite</button>:
                                    <button className={style.addFavouriteButton} onClick={()=>this.props.removeFromFavourite(post.id)}>Remove </button>
                                    }
                                </div>
                        )   
                    })                    
                )
            }    
        }

        return (
            <div className={style.postTab}>
                <h1 className={style.postContainerTitle}>Posts</h1>
                {posts()}
            </div>
        )
    }
}

const mapStateToProps = (state)=>({
    postData: state.postState
})

const mapDispatchToProps = (dispatch) =>{
    return{
        fetchPost:()=>dispatch(fetchPosts()),
        addPostToFavourite:(post)=>dispatch(addPostToFavourite(post)),
        removeFromFavourite:(postId)=>dispatch(removePostFromFavourite(postId))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(PostComponent);
