import React from "react";
import "./CredStory.css";

const CredStory = () => {
  return (
    <div className="CredStory flex absoluteCenter">
      <div className="maxWidth flex storyWrapper">
        <div className="CredStoryHeadingWrapper">
          <h1 className="CredStoryHeading">
            the story of CRED begins with trust.
          </h1>
        </div>
        <div>
          <div className="CredStoryDetails">
            <p className="CredStoryPara">
              trust as a virtue has consistently played an essential role in
              every great human achievement. and consistently, its importance
              has been overlooked. not just by individuals, but by entire
              societies. we felt it was time someone gave it the spotlight it
              deserves. especially for the ones who live by this virtue: the
              trustworthy.
            </p>
            <p className="CredStoryPara">
              so we thought of creating a system that rewards its members for
              doing good and being trustworthy. this way, trust as a virtue
              becomes something to aspire to, just the way it should be. then we
              went one step ahead: we built it. we know we are on the right
              track because here you are.
            </p>
            <p className="CredStoryPara">
              if you make it to CRED, congratulations and welcome. we have a lot
              of things planned for you.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CredStory;
