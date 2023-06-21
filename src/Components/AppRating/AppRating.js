import React from "react";
import "./AppRating.css";
import Button from "../CommonComponents/Button/Button";

const getAppleIcon = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/apple-store-logo.png"
      className="AppRatingIcon"
    />
  );
};

const getGoogleIcon = () => {
  return (
    <img
      src="https://web-images.credcdn.in/_next/assets/images/home-page/play-store-logo.png"
      className="AppRatingIcon"
    />
  );
};

const AppRating = () => {
  return (
    <div className="maxWidth flex AppRating">
      <div className="AppRatingBlock flex flexCol ">
        <div className="flex ">
          <div className="AppRatingValue flex flexCol">
            4.8
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="AppRatingStars"
            />
          </div>
          <div className="AppRatingPlatform">
            app <br /> store
          </div>
        </div>
        <div className="nonMobile">
          <Button
            btnText="Download app"
            customClass="AppRatingButton"
            prefix={getAppleIcon()}
          />
        </div>
      </div>

      <div className="AppRatingBlock flex flexCol ">
        <div className="flex ">
          <div className="AppRatingValue flex flexCol">
            4.7
            <img
              src="https://web-images.credcdn.in/_next/assets/images/home-page/rating-ios.png"
              className="AppRatingStars"
            />
          </div>
          <div className="AppRatingPlatform">
            play <br /> store
          </div>
        </div>
        <div className="nonMobile">
          <Button
            btnText="Download app"
            customClass="AppRatingButton"
            prefix={getGoogleIcon()}
          />
        </div>
      </div>
      <div className="onlyMobile">
        <Button btnText="Download app" />
      </div>
    </div>
  );
};

export default AppRating;
