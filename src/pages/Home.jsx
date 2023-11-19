import { useState, useEffect } from "react";
import HomePageCarousel from "../components/HomePageCarousel";
import HomeBrowser from "../components/HomeBrowser";
import BestSellers from "../components/BestSellers";
import { useLocation } from "react-router-dom";
import Reviews from "../components/Reviews";
export default function home() {
  return (
    <div className="home">
      <HomePageCarousel />
      <HomeBrowser />
      <BestSellers />
      <Reviews />
    </div>
  );
}
