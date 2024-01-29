import "./App.css";
import Navigation from "./components/Navigation/Navigation";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header/Header";
import Messages from "./components/Messages/Messages";
import { Routes, Route, BrowserRouter } from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header />
                <Navigation state={props.state.Navigation} />
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/profile" element={<Profile state={props.state.ProfilePaje} dispatch={props.dispatch}/>} />
                        <Route path="/messages/*" element={<Messages state={props.state.MessagePaje} dispatch={props.dispatch}/>} />
                        <Route path="/news" element={<Messages state={props.state.MessagePaje}/>} />
                        <Route path="/music" element={<Messages state={props.state.MessagePaje}/>} />
                        <Route path="/settings" element={<Messages state={props.state.MessagePaje}/>} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
};

export default App;
