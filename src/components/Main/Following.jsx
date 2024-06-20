// Following.jsx
import "./Main.css";
import useStore from "../../store/store";
import { MdInsertLink } from "react-icons/md";

const Following = () => {
  const followingList = useStore((state) => state.followingList);
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);

  if (loading) {
    return <p>Loading following....</p>;
  }
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }
  
  return (
    <div className="following-container">
      {followingList.map((following) => (
        <div className="follower" key={following.following_id}>
          <div className="following-wrapper">
            <img
              src={following.following_avatar}
              alt="image of the following"
              className="following-img"
            />
          </div>
          <div className="follower-name">{following.following_name}</div>
          <div className="github-user">
            <a href={following.following_url}>
              <MdInsertLink /> View {following.following_name}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Following;
