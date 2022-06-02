import "./rightbar.css";
import { Users } from "../../dummyData";
import Online from "../online/Online";
import Profile from "../../pages/profile/Profile";

function Rightbar({ profile }) {
  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img
            className="birthdayImg"
            src="/assets/birthday.png"
            alt=""
            srcset=""
          />
          <span className="birthdayText">
            <b>Prikila Athaudha</b> and <b>3 other friends</b> have a birthday
            today.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/ads.png" alt="" srcset="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <h4 className="rightbarTitle">User information</h4>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">City:</span>
            <span className="rightbarInfoValue">Kalutara</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">From:</span>
            <span className="rightbarInfoValue">Kalutara South</span>
          </div>
          <div className="rightbarInfoItem">
            <span className="rightbarInfoKey">Relationship: </span>
            <span className="rightbarInfoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="assets/person/person2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Priskila Athaudha</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/person3.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Shakir Saheel</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/person4.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Akthar Farvees</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/person5.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Abdulla Nalim</span>
          </div>
          <div className="rightbarFollowing">
            <img
              src="assets/person/person2.jpg"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">Abdul Quadir</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightBar /> : <HomeRightBar />}
      </div>
    </div>
  );
}

export default Rightbar;
