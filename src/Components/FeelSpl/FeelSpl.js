import React from "react";
import "./FeelSpl.css";
import Button from "../CommonComponents/Button/Button";

const FeelSpl = () => {
  return (
    <div className="FeelSpl photoSection ">
      <div className="maxWidth">
        <div className="photoSectionChild">
          <div className="photoSectionTop">
            <h1 className="photoSectionHeading">feel special more often.</h1>
            <h3 className="photoSectionSubheading">
              exclusive rewards for paying your bills
            </h3>
          </div>
          <div className="photoSectionBottom">
            <p className="photoSectionDescription">
              every time you pay your credit card bills on CRED, you receive
              CRED coins. you can use these to win exclusive rewards or get
              special access to curated products and experiences. on CRED, good
              begets good.
            </p>

            <div>
              <Button btnText="Explore Rewards" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeelSpl;
