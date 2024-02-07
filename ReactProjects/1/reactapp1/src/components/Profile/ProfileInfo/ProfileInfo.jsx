import Preloader from "../../Preloader/Preloader";
import s from "./ProfileInfo.module.css";
import userPhoto from "../../../images/img.jpg"

const ProfileInfo = (props) => {
    if (!props.profile){
        return (
            <Preloader/>
        ); 
    }
    else{
        return (
            <div>
                <img
                    className={s.contentImg}
                    src="https://airpano.ru/files/360video/vr-sahara/images/image1.jpg"
                ></img>
                <div className={s.ava}>
                    <img
                        className={s.avaImg}
                        src={!props.profile.photos.small ?  userPhoto : props.profile.photos.small}
                        alt=""
                    />
                    <div className={s.discription}>
                        <h1>{props.profile.fullName}</h1>
                        <p>{props.profile.aboutMe}</p>
                    </div>
                </div>
                <div>
                    {props.profile.lookingForAJob ? "Ищет работу" : "Не ищет работу"}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        );
    }   
};

export default ProfileInfo;
