import React from "react";
import "./HeaderStyles.scss";
const Header = props => {
  return (
    <div id="header">
      <div className="wrap">
        <div className="logo">
          <a href="/">COLOR PALETTES ></a>
        </div>
        <div id="menu">
          <ul>
            <li>
              <a href="/palettes">Explore</a>
            </li>
            <li>
              <span className="divider"></span>
            </li>
            <li>
              <a href="/new">Generate</a>
            </li>
            <li>
              <span className="divider"></span>
            </li>
            <li>
              <a href="/likes">Likes</a>
            </li>
            <li>
              <span className="divider"></span>
            </li>
            {props.loggedIn ? (
              <li>
                <a href="/logout">Logout</a>
              </li>
            ) : (
              <li>
                <a href="/login">Login</a>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
