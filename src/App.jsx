import React from "react";
import Landing from "./components/Landing";
import Shipping from "./components/Shipping";
import SplOffers from "./components/SplOffers";
import Footer from "./components/Footer";
import FeaturedImages from "./components/FeaturedImages";
import BrandLogo from "./components/BrandLogo";
import FeatureProduct from "./components/FeatureProduct";

function App() {
  return (
    <div>
      <Landing />
      <div className="mx-24 relative z-10 bottom-16 h-[3130px] max-sm:h-[5200px]">
        <Shipping />
        <SplOffers />
        <FeatureProduct />
        <FeaturedImages />
        <BrandLogo />
      </div>
      <Footer />
    </div>
  );
}

export default App;
