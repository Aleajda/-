const add_post_text = "ADD-POST-TEXT";
const add_post = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let defaultState = {
    MyPostsData: [
        { likes: "18", message: "MEU MEU MEU" },
        { likes: "6", message: "MEOW WORLD" },
        { likes: "15", message: "I MEOW YOU" }
    ],
    NewPostText: "",
    profile: null
}

const profileReducer = (state = defaultState, action) =>{
    let stateCopy = {...state};
    switch(action.type){
        case add_post:
            stateCopy.MyPostsData = [...state.MyPostsData];
            let newPost = {
                message: stateCopy.NewPostText,
                likes: "0"
            }
            stateCopy.MyPostsData.push(newPost);
            stateCopy.NewPostText = "";
            return stateCopy;  
        case add_post_text:{
            stateCopy.NewPostText = action.currentText;
            return stateCopy;
        }
        case SET_USER_PROFILE:
            return {...state, profile: action.profile}
        default:
            return stateCopy;
    }   
}

export const addPostTextActionCreator = (text) =>{
    return { type: add_post_text, currentText: text};
}

export const addPostActionCreator = () =>{
    return {type: add_post};
}

export const setUserProfile = (profile) =>{
    return {type: SET_USER_PROFILE, profile}
}

export default profileReducer;