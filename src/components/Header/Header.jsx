import "./Header.css";
import { useState } from "react";
import useStore from "../../store/store";

const Header = () => {
  const [userInput, setUserInput] = useState("");
  const setUser = useStore((state) => state.setUser);

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };

  const handleUserSubmit = () => {
    setUser(userInput);
    setUserInput(""); 
  };

  return (
    <div className="header-container">
      <h1 className="header-txt">github finder</h1>
      <h3>
        By:{" "}
        <a href="https://github.com/Manifest-Son" className="header-link">
          Lennox Githinji
        </a>
      </h3>
      <div className="search-wrap">
        <input
          type="text"
          value={userInput}
          placeholder="enter a username"
          className="search-input"
          onChange={handleUserInput}
        />
        <button type="button" onClick={handleUserSubmit} className="submit-btn">
          search
        </button>
      </div>
    </div>
  );
};

export default Header;

