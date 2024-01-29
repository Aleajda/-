import Posts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo/>
            <Posts NewPostText = {props.state.NewPostText} MyPostsData={props.state.MyPostsData} dispatch={props.dispatch}/>
        </div>
    );
};
export default Profile;
