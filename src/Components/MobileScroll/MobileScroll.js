import React, { useState } from "react";
import "./MobileScroll.css";
import ScreenText from "./ScreenText";

const scrollData = [
  {
    heading: " we’ve got your back.",
    description:
      "gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.",
    mobileImg:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold1.png",
  },
  {
    heading: " begin your winning streak.",
    description:
      "use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.",
    mobileImg:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold2.png",
  },
  {
    heading: "for your eclectic taste.",
    description:
      "get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.",
    mobileImg:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold3.png",
  },
  {
    heading: "cash in your pockets.",
    description:
      "switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.",
    mobileImg:
      "https://web-images.credcdn.in/_next/assets/images/home-page/features/neopop-fold4.png",
  },
];

const MobileScroll = () => {
  const [currentImg, setcurrentImg] = useState(0);

  return (
    <div className="maxWidth flex MobileScroll">
      <div className="scrollFullScreenWrapper">
        {scrollData.map((screen, i) => (
          <div className="scrollFullScreen">
            <ScreenText screen={screen} i={i} setcurrentImg={setcurrentImg} />
          </div>
        ))}
      </div>

      <div className="MobileMockupWrapper nonMobile">
        <div className="MobileMockup">
          <div className="MobileMockupScreen flex absoluteCenter">
            <img
              src={scrollData[currentImg].mobileImg}
              className="MobileScreenImg slide-left"
              key={scrollData[currentImg].mobileImg}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileScroll;
