import "./Main.css";
import { FaCodeFork, FaStar } from "react-icons/fa";
import useStore from "../../store/store";

const Repositories = () => {
  const loading = useStore((state) => state.loading);
  const error = useStore((state) => state.error);
  const repoList = useStore((state) => state.repoList);

  if (loading) {
    return <p>Loading repositories....</p>;
  }
  if (error) {
    return <p className="error-message">Error: {error}</p>;
  }

  return (
    <div className="repository-container">
      <h1>Repositories ({repoList.length})</h1> 
      <div className="repository-wrapper">
        {repoList.map((repo) => (
          <div className="repo" key={repo.repo_id}>
            <div className="repos">
              <h2>{repo.repo_name}</h2>
              <p>{repo.repo_description}</p>
            </div>
            <div className="repos-bottom">
              <p>
                <FaCodeFork /> {repo.forks} forks
              </p>
              <p>
                <FaStar /> {repo.stars} stars
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Repositories;
