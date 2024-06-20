import Profile from "./Profile";
import Repositories from "./Repositories";
import Following from "./Following";
import Followers from "./Followers";
import "./Main.css";

const Main = () => {
  return (
    <div className="main-container">
      <div className="left-content">
        <Profile />
      </div>
      <div className="right-content">
        <Repositories />
        <Followers />
        <Following />
      </div>
    </div>
  );
};

export default Main;
