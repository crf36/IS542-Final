import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h2 className="title">IS542 Final Project</h2>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
        <Link to="/new" className="nav-link">
          Create a New Task
        </Link>
      </nav>
    </header>
  );
};

export default Header;
