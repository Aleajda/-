import React from "react";
import s from "./Users.module.css";
import userPhoto from "../../images/img.jpg"
import { NavLink } from "react-router-dom";
import axios from "axios";
import { usersAPI } from "../../api/api";
      
const Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++){
            pages.push(i);
        }

    return (
        <div> 
                <div>
                    {pages.map(p =>{
                        return <span onClick={() => props.onPageChanged(p)} className={props.currentPage === p ? s.selectedPage : s.unselectedPage}>{p}</span>
                    })}
                </div>

                {   
                    props.users.map(u => <div key={u.id}>
                        <NavLink to={`/profile/${u.id}`}>
                            <div className={s.avaImg}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto} alt="" />
                            </div>
                        </NavLink>
                        <div>
                            {u.name}
                        </div>
                        <div>
                            {u.status}
                        </div>
                        <div>
                            {u.followed 
                                ? <button onClick={() => {
                                    usersAPI.deleteFollow(u.id).then(data =>{
                                    if (data.resultCode === 0){
                                        props.Unfollow(u.id)
                                    } 
                                    });
                                }}>Unfollow</button>
                                : <button onClick={() => {
                                    usersAPI.createFollow(u.id).then(data =>{
                                    if (data.resultCode === 0){
                                        props.Follow(u.id)
                                    } 
                                    });
                                    }}>Follow</button>}
                        </div>
                    </div>)
                }
            </div>
        
    );
}

export default Users;