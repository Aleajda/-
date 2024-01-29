import s from "./ProfileInfo.module.css";

const ProfileInfo = () => {
    return (
        <div>
            <img
                className={s.contentImg}
                src="https://airpano.ru/files/360video/vr-sahara/images/image1.jpg"
            ></img>
            <div className={s.ava}>
                <img
                    className={s.avaImg}
                    src="https://pa1.aminoapps.com/7106/e8b212ec0a17bf7b55f98c85009510c76130b730r1-320-320_00.gif"
                    alt=""
                />
                <div className={s.discription}>
                    <h1>Meeeeuw Meeeeuvich</h1>
                    <p>Hi, i'm web developer</p>
                </div>
            </div>
        </div>
    );
};

export default ProfileInfo;
