import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [showMobMenu, setShowMobMenu] = useState(false);

  const toggleMobMenu = () => {
    setShowMobMenu(!showMobMenu);
  };

  return (
    <div className="mobileMenuWrapper">
      <div className={`mobileMenu onlyMobile ${showMobMenu ? "overlay" : ""}`}>
        <div className="mobileNavbar">
          <p className="mobileNavItem">credit score check</p>
          <p className="mobileNavItem">CRED pay</p>
        </div>
      </div>

      <div className="flex maxWidth header">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/cred-logo.png"
          className="headerLogo"
        />
        <div className="onlyMobile mobileMenuButtonWrapper">
          <button
            class={`hamburger hamburger--slider ${
              showMobMenu ? "is-active" : ""
            }`}
            type="button"
            onClick={toggleMobMenu}
          >
            <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span>
          </button>
        </div>
        <div className="nonMobile flex ">
          <p className="headerNavItem">credit score check</p>
          <p className="headerNavItem">CRED pay</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
