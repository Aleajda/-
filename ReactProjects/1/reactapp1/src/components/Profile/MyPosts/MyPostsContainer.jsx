import React from "react";
import {addPostActionCreator, addPostTextActionCreator} from "../../../redux/profileReducer";
import Posts from "./MyPosts";
import { connect } from "react-redux";


let mapStateToProps = (state) =>{
    return {
        NewPostText: state.ProfilePage.NewPostText,
        MyPostsData: state.ProfilePage.MyPostsData
    }
}
let mapDispatchToProps = (dispatch) =>{
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        addPostText: (text) => {
            dispatch(addPostTextActionCreator(text));
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps )(Posts);

export default PostsContainer;
