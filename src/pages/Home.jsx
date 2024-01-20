import { useState, useEffect } from "react";
import HomePageCarousel from "../components/HomePageCarousel";
import HomeBrowser from "../components/HomeBrowser";
import BestSellers from "../components/BestSellers";
import { useLocation } from "react-router-dom";
import Reviews from "../components/Reviews";
export default function home() {
  const [imgNum, setImgNum] = useState(0);

  return (
    <div className="home" data-testid="home-main-div">
      <HomePageCarousel imgNum={imgNum} setImgNum={setImgNum} />
      <HomeBrowser />
      <BestSellers />
      <Reviews />
    </div>
  );
}
