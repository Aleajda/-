import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";
import { addPostActionCreator } from "../../../redux/state";
import { addPostTextActionCreator } from "../../../redux/state";

const Posts = (props) => {

    let newPostText = React.createRef();
    
    let addPostText = () =>{
        let text = newPostText.current.value;
        props.dispatch(addPostTextActionCreator(text));
    }
    let addPost = () =>{
        props.dispatch(addPostActionCreator());
    }

    let posts = props.MyPostsData.map(p => (<Post likes={p.likes} message= {p.message}/>))

    return (
        <div>
            <div>my posts</div>
            <div>new posts</div>
            <div><textarea ref={newPostText} value={props.NewPostText} onChange={() => {addPostText()}}/></div>
            <button onClick={() => { addPost() }}>send</button>
            <div>
               {posts}
            </div>
        </div>
    );
};
export default Posts;

