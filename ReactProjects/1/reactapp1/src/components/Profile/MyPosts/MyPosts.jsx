import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

const Posts = (props) => {
    let newPostText = React.createRef();
    
    let addPostText = () =>{
        let text = newPostText.current.value;
        props.addPostText(text);
    }
    let addPost = () =>{
        props.addPost();
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

