import React from "react";
import "./CredSecurity.css";
import Button from "../CommonComponents/Button/Button";

const CredSecurity = () => {
  return (
    <div className="CredSecurity photoSection">
      <div className="maxWidth">
        <div className="photoSectionChild">
          <div className="photoSectionTop">
            <h1 className="photoSectionHeading">security first. and second.</h1>
            <h3 className="photoSectionSubheading">
              what’s yours remains only yours.
            </h3>
          </div>
          <div className="photoSectionBottom">
            <p className="photoSectionDescription">
              CRED ensures that all your personal data and transactions are
              encrypted, and secured so what’s yours remains only yours. there’s
              no room for mistakes because we didn’t leave any.
            </p>

            <div>
              <Button btnText="Become a member" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredSecurity;
