import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Nav = (props) => {
  // state to check which nav a tag is clicked for css effects
  const [clicked, setClicked] = useState(localStorage.getItem("clicked"));

  // handleClick function to change className to whatever link user presses on and stores it into localstorage
  const handleClick = (link) => {
    setClicked(link);
    localStorage.setItem("clicked", link);
  };

  // Load the selected nav clicked from local storage on component mount
  useEffect(() => {
    const storedItemId = localStorage.getItem("clicked");
    if (storedItemId) {
      setClicked(clicked);
    }
  }, []);

  return (
    <nav className="navbar">
      <Link to="/">
        <div
          className={clicked === "home" ? "active" : "unclicked"}
          onClick={() => handleClick("home")}
        >
          GAMING GENIE
        </div>
      </Link>
      <Link to="/news">
        <div
          className={clicked === "news" ? "active" : "unclicked"}
          onClick={() => {
            handleClick("news");
          }}
        >
          NEWS
        </div>
      </Link>
      <Link to="/games">
        <div
          className={clicked === "games" ? "active" : "unclicked"}
          onClick={() => {
            handleClick("games");
          }}
        >
          GAMES
        </div>
      </Link>
      <Link to="/giveaway">
        <div
          className={clicked === "giveaway" ? "active" : "unclicked"}
          onClick={() => {
            handleClick("giveaway");
            props.getUrl("giveaways");
            props.getParams({});
          }}
        >
          GIVEAWAYS
        </div>
      </Link>
    </nav>
  );
};

export default Nav;
