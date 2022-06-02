import "./profile.css";
import Feed from "../../component/feed/Feed";
import Rightbar from "../../component/rightbar/Rightbar";
import Sidebar from "../../component/sidebar/Sidebar";
import Topbar from "../../component/topbar/Topbar";

function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src="assets/post/post4.jpg"
                alt=""
                srcset=""
              />
              <img
                className="profileUserImg"
                src="assets/person/person1.jpg"
                alt=""
                srcset=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">Sukumar Kavishan</h4>
              <span className="profileInfoDesc">☆*: .｡. o(≧▽≦)o .｡.:*☆</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile />
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
