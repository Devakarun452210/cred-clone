import React from "react";
import "./CredExperience.css";
import Button from "../CommonComponents/Button/Button";

const CredExperience = () => {
  return (
    <div className="CredExperience photoSection">
      <div className="maxWidth">
        <div className="photoSectionChild">
          <div className="photoSectionTop">
            <h1 className="photoSectionHeading">
              we take your money matters seriously.
            </h1>
            <h3 className="photoSectionSubheading">
              so that you don’t have to.
            </h3>
          </div>
          <div className="photoSectionBottom">
            <p className="photoSectionDescription">
              never miss a due date with reminders to help you pay your bills on
              time, instant settlements mean you never wait for your payments to
              go through and statement analysis lets you know where your money
              goes, always.
            </p>

            <div>
              <Button btnText="Experience the upgrade" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredExperience;
