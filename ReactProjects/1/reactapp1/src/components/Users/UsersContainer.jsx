import React from "react";
import axios from "axios";
import Users from "./Users";
import { Follow, setUsers, Unfollow, clearUsers, setCurrentPage, setTotalUsersCount, setUsersAreLoading } from "../../redux/usersReducer";
import { connect } from "react-redux";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/api";




class UsersAPI extends React.Component{

    
    componentDidMount(){
        this.props.setUsersAreLoading(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            this.props.setUsers(data.items);
            this.props.setTotalUsersCount(data.totalCount);
            this.props.setUsersAreLoading(false);
        });
    }
    componentWillUnmount(){
        this.props.clearUsers();
    }


    onPageChanged = (PageNumber) => {
        this.props.setCurrentPage(PageNumber);
        this.props.clearUsers();
        this.props.setUsersAreLoading(true);
        usersAPI.getUsers(PageNumber, this.props.pageSize).then(data =>{
                this.props.setUsers(data.items);
                this.props.setUsersAreLoading(false);
            });
    }


    render() {
        return (
            <>
                <Users {...this.props} onPageChanged={this.onPageChanged}/>
                {this.props.isLoading ? <Preloader/> : null}
            </>
        ); 
    }
}


let mapStateToProps = (state) =>{
    return {
        users: state.Users.users,
        pageSize: state.Users.pageSize,
        totalUsersCount: state.Users.totalUsersCount,
        currentPage: state.Users.currentPage,
        isLoading: state.Users.isLoading
    }
}



const UsersContainer = connect(mapStateToProps, {Unfollow, Follow, setUsers, clearUsers, setCurrentPage, setTotalUsersCount, setUsersAreLoading} )(UsersAPI);


export default UsersContainer;
