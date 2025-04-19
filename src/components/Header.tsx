import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <h1 className="title">My App</h1>
      <nav>
        <Link to="/" className="nav-link">
          Home
        </Link>
      </nav>
    </header>
  );
};

export default Header;
