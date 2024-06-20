import "./Main.css";
import { IoLocationOutline } from "react-icons/io5";
import { FaBuilding } from "react-icons/fa";
import { IoIosPeople } from "react-icons/io";
import { FaBook, FaExternalLinkAlt } from "react-icons/fa";
import { useEffect } from "react";
import useStore from "../../store/store";

const Profile = () => {
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const { username } = useStore();
  const profile = useStore((state) => state.profile); 

  useEffect(() => {
    const useUserProfile = async (username) => {
      useStore.setState({ loading: true, error: null });
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        if (response.ok) {
          useStore.setState({ profile: data, loading: false });
        } else {
          throw new Error(data.message);
        }
      } catch (error) {
        useStore.setState({ loading: false, error: error.message });
        console.error("Error fetching profile:", error);
      }
    };

    useUserProfile(username);
  }, [username]);

  if (loading) {
    return <div className="loading-message">Loading ......</div>;
  }
  if (error) {
    return <div className="error-message">An error occurred: {error}</div>;
  }

  return (
    <div className="profile-container">
      <img
        src={profile.avatar_url}
        alt="Profile"
        className="profile-img"
      />
      <h1>{profile.name}</h1>
      <p>{profile.login}</p>
      <p>{profile.bio}</p>
      <button className="github-user">
        <FaExternalLinkAlt /> View on GitHub
      </button>
      <p>
        <IoLocationOutline /> {profile.location}
      </p>
      <p>
        <FaBuilding /> {profile.company}
      </p>
      <p>
        <FaBook /> {profile.public_repos}
      </p>
      <p>
        <IoIosPeople /> {profile.following} following
      </p>
      <p>
        <IoIosPeople /> {profile.followers} followers
      </p>
    </div>
  );
};

export default Profile;
