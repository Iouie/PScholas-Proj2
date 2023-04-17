import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className="navbar">
      <Link to="/">
        <div className="navlink">HOME</div>
      </Link>
      <Link to="/news">
        <div className="navlink">NEWS</div>
      </Link>
      <Link to="/news">
        <div className="navlink">GAMES</div>
      </Link>
    </nav>
  );
};

export default Nav;
