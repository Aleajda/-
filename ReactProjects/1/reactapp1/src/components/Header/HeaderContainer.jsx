import React from "react";
import Header from "./Header";
import axios from "axios";
import { connect } from "react-redux";
import { setUserData } from "../../redux/authReducer";
import { headerAPI } from "../../api/api";

class HeaderContainer extends React.Component {

    componentDidMount(){
        headerAPI.authMe().then(data =>{
            if (data.resultCode === 0){
                let {id, login, email} = data.data;
                this.props.setUserData(id, login, email);
            } 
        });
    }


    render(){
        return (
            <Header {...this.props}/>
        );
    }
}

let mapStateToProps = (state) =>{
    return {
      isAuth: state.Auth.isAuth,
      login: state.Auth.login
    }
}



export default connect(mapStateToProps, {setUserData})(HeaderContainer);