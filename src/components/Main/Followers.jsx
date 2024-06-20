
import "./Main.css";
import useStore from "../../store/store";
import { MdInsertLink } from "react-icons/md";

const Followers = () => {
  const followersList = useStore((state) => state.followersList);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);

  if (loading) {
    return <p>Loading followers....</p>;
  }
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }
  
  return (
    <div className="follower-container">
      {followersList.map((follower) => (
        <div className="follower-wrapper" key={follower.follower_id}>
          <div className="image-div">
            <img
              src={follower.follower_avatar}
              alt="image of the follower"
              className="follower-img"
            />
          </div>
          <div className="follower-name">{follower.follower_name}</div>
          <div className="github-user">
            <a href={follower.follower_url}>
              <MdInsertLink /> View {follower.follower_name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Followers;
