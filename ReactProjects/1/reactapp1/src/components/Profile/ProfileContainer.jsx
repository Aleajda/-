import Profile from "./Profile";
import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { setUserProfile } from "../../redux/profileReducer";
import { withRouter } from "../../withRouter";
import { profileAPI } from "../../api/api";

class ProfileContainer extends React.Component{
    componentDidMount() {
        this.loadProfileData();
    }

    componentDidUpdate(prevProps) {
        if (this.props.params.userId !== prevProps.params.userId) {
            this.loadProfileData();
        }
    }

    loadProfileData = () => {
        let userId = this.props.params.userId ?? 30757;
        profileAPI.getProfile(userId).then(data => {
            this.props.setUserProfile(data);
        });
    }
    render(){
        return (
            <Profile {...this.props}/>
        );
    }
};


let mapStateToProps = (state) =>{
    return {
        profile: state.ProfilePage.profile
    }
}

let WithUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, {setUserProfile})(WithUrlDataProfileContainer);
