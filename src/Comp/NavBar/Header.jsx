import React from "react";
import "./HeaderStyles.scss";
import SubHeader from "./SubHeader";

const Header = ({ toggleShades, isLoggedIn }) => {
  return (
    <>
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

              {isLoggedIn ? (
                <li>
                  <a href="/logout">Sign Out</a>
                </li>
              ) : (
                <li>
                  <button>Sign In</button>
                </li>
              )}

              {!isLoggedIn && (
                <>
                  <li>
                    <span className="divider"></span>
                  </li>
                  <li>
                    <button>Sign Up</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </div>
      <SubHeader toggleShades={toggleShades} />
    </>
  );
};

export default Header;
