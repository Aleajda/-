import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import MessagesContainer from "./components/Messages/MessagesContainer";
import { Routes, Route } from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";




const App = (props) => {
    return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <Navigation state={props.state.Navigation} />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile/:userId?" element={<ProfileContainer/>} />
                        <Route path="/messages/*" element={<MessagesContainer/>} />
                        <Route path="/news" element={<div>MEAW NOT WORKING</div>} />
                        <Route path="/music" element={<div>MEAW NOT WORKING</div>} />
                        <Route path="/settings" element={<div>MEAW NOT WORKING</div>} />
                        <Route path="/users/*" element={<UsersContainer/>}/>
                    </Routes>
                </div>
            </div>
    );
};

export default App;
