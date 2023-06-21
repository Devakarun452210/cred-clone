import React from "react";
import "./HeroSection.css";
import Button from "../CommonComponents/Button/Button";

const HeroSection = () => {
  return (
    <div className="heroSectionWrapper">
      <div className="flex absoluteCenter flexCol maxWidth heroSection">
        <h1 className="heroHeading">rewards for paying credit card bills.</h1>
        <p className="heroSubheading">
          join 9M+ members who win rewards and cashbacks everyday
        </p>
        <Button btnText="Download CRED" />
      </div>
    </div>
  );
};

export default HeroSection;
