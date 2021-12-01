import React from "react";
// import sections
import Hero from "../components/sections/Hero";
import FeaturesTiles from "../components/sections/FeaturesTiles";
import FeaturesSplit from "../components/sections/FeaturesSplit";
import Testimonial from "../components/sections/Testimonial";
import Cta from "../components/sections/Cta";
import ProgressBar from "../components/sections/progressBar/ProgressBar";

const Home = (props) => {
  return (
    <>
      <Hero className="illustration-section-01" account={props.account} />
      <ProgressBar done="70" />
      <FeaturesTiles />
      <FeaturesSplit
        invertMobile
        topDivider
        imageFill
        className="illustration-section-02"
      />
      <Testimonial topDivider />
      <Cta split />
    </>
  );
};

export default Home;
