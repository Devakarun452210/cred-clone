import React, { useEffect, useRef, useState } from "react";
import "./ProductShowCase.css";

const ProductShowCase = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const ref = useRef(null);

  const toggleAnimation = (e) => {
    if (e[0].isIntersecting) {
      setShowAnimation(true);
    }
  };

  const options = {
    root: null,
    rootMap: "0px",
    threshold: 0.7,
  };

  useEffect(() => {
    const observer = new IntersectionObserver(toggleAnimation, options);

    if (!showAnimation) {
      if (ref.current) {
        observer.observe(ref.current);
      }
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  });

  return (
    <div
      className={`ProductShowCase scale-up-bottom ${
        showAnimation ? "scale-up-bottom" : ""
      }`}
      ref={ref}
    >
      <div className="showcaseWrapper">
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-2.png"
          className="showcaseUI showcaseMockup1"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-left-1.png"
          className="showcaseUI showcaseMockup2"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-center.png"
          className="showcaseUI showcaseMockup3"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-1.png"
          className="showcaseUI showcaseMockup4"
        />
        <img
          src="https://web-images.credcdn.in/_next/assets/images/home-page/phone/neopop-right-2.png"
          className="showcaseUI showcaseMockup5"
        />
      </div>
    </div>
  );
};

export default ProductShowCase;
