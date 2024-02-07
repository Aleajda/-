import { combineReducers, legacy_createStore as createStore } from "redux";
import profileReducer from "./profileReducer";
import messagesReducer from "./messagesReducer";
import navigationReducer from "./navigtionReducer";
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    ProfilePage: profileReducer,
    MessagesPage: messagesReducer,
    Navigation: navigationReducer,
    Users: usersReducer,
    Auth: authReducer
});

let store = createStore(reducers);

window.store = store;
export default store;