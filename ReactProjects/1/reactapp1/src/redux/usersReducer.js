const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";
const CLEAR_USERS = "CLEAR_USERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const SET_TOTAL_USERS_COUNT = "SET_TOTAL_USERS_COUNT";
const USERS_ARE_LOADING = "USERS_ARE_LOADING";

let defaultState = {
    users: [],
    pageSize: 7,
    totalUsersCount: 0,
    currentPage: 1,
    isLoading: false
}

const usersReducer = (state = defaultState, action) =>{
    switch(action.type){
        case FOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return{
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId){
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {...state, users: [...state.users, ...action.users]}
        case CLEAR_USERS:
            return {...state, users: []}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.PageNumber}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.totalUsersCount}
        case USERS_ARE_LOADING:
            return {...state, isLoading: action.isLoading}
        default:
            return state ;
        
    }
}   

export const Follow = (userId) =>{
    return { type: FOLLOW, userId: userId};
}

export const Unfollow = (userId) =>{
    return {type: UNFOLLOW, userId: userId};
}

export const setUsers = (users) =>{
    return {type: SET_USERS, users};
}

export const clearUsers = () =>{
    return {type: CLEAR_USERS};
}

export const setCurrentPage = (PageNumber) =>{
    return {type: SET_CURRENT_PAGE, PageNumber};
}

export const setTotalUsersCount = (totalUsersCount) =>{
    return {type: SET_TOTAL_USERS_COUNT, totalUsersCount}
}

export const setUsersAreLoading = (isLoading) =>{
    return {type: USERS_ARE_LOADING, isLoading}
}

export default usersReducer;