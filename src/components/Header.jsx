import { useState } from "react";
import { Link } from "react-router-dom";

const Title = () => (
  <a href="/">
    <img className="logo" alt="logo" src="src\logo.png" />
  </a>
);

const HeaderComponent = () => {
  const [userLogedIn, setUserLogedIn] = useState(false);
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/about">
            <li>About Us</li>
          </Link>
          <Link to="/contact">
            <li>contact</li>
          </Link>
          <Link to="/">
            <li>Cart</li>
          </Link>
        </ul>
        {userLogedIn ? (
          <button onClick={() => setUserLogedIn(false)}>Logout</button>
        ) : (
          <button onClick={() => setUserLogedIn(true)}>Login</button>
        )}
      </div>
    </div>
  );
};

export default HeaderComponent;
