import React from "react";
import HeroSection from "../Components/HeroSection/HeroSection";
import Header from "../Components/CommonComponents/Header/Header";
import ProductShowCase from "../Components/ProductShowCase/ProductShowCase";
import FeelSpl from "../Components/FeelSpl/FeelSpl";
import CredExperience from "../Components/CredExperience/CredExperience";
import CredSecurity from "../Components/CredSecurity/CredSecurity";
import BrandsLove from "../Components/BrandsLove/BrandsLove";
import WindowPeak from "../Components/WindowPeak/WindowPeak";
import MobileScroll from "../Components/MobileScroll/MobileScroll";
import CredStory from "../Components/CredStory/CredStory";
import AppRating from "../Components/AppRating/AppRating";
import Footer from "../Components/CommonComponents/Footer/Footer";

const HomePage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductShowCase />
      <FeelSpl />
      <BrandsLove />
      <CredExperience />
      <MobileScroll />
      <div class="nonMobile">
        <WindowPeak />
      </div>
      <CredSecurity />
      <CredStory />
      <AppRating />
      <Footer />
    </>
  );
};

export default HomePage;
