import React, { useEffect, useRef, useState } from "react";

const ScreenText = ({ screen, setcurrentImg, i }) => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
      setcurrentImg(i);
    }
  };

  const options = {
    root: null,
    rootMap: "0px",
    threshold: 0.6,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`ScreenText ${showAnimation ? "textVisible" : " "}`}
      ref={ref}
    >
      <div className="ScreenHeading">{screen.heading}</div>
      <div className="MobileMockupWrapper onlyMobile">
        <div className="MobileMockup">
          <div className="MobileMockupScreen flex absoluteCenter">
            <img src={screen.mobileImg} className="MobileScreenImg" />
          </div>
        </div>
      </div>
      <div className="screenDescription">{screen.description}</div>
    </div>
  );
};

export default ScreenText;
