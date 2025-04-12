import { useState } from "react";

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
          <li>Home</li>
          <li>About Us</li>
          <li>contact</li>
          <li>Cart</li>
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
