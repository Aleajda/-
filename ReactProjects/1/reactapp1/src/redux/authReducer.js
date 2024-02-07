const SET_USER_DATA = "SET_USER_DATA";
const USERS_ARE_LOADING = "USERS_ARE_LOADING";

let defaultState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    isLoading: false
}

const authReducer = (state = defaultState, action) =>{
    switch(action.type){
        case SET_USER_DATA:
            return {...state, ...action.data, isAuth:true}
        default:
            return state ;
        
    }
}   

export const setUsersAreLoading = (isLoading) =>{
    return {type: USERS_ARE_LOADING, isLoading}
}

export const setUserData = (id, login, email) =>{
    return {type: SET_USER_DATA, data: {id, login, email}}
}

export default authReducer;