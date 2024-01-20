import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { db } from "../config/firebase";
import { getDocs, collection } from "firebase/firestore";
import "./bestSeller.css";
import { IconContext } from "react-icons";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
export default function BestSeller() {
  const productCollection = collection(db, "products");
  const [firstBest, setFirstBest] = useState([]);
  const [secondBest, setSecondBest] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productCollection);
        const neededData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setFirstBest(neededData.slice(6, 9));
        setSecondBest(neededData.slice(9, 12));
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);
  const bestSellers = [firstBest, secondBest];
  const [slider, setSlider] = useState(0);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <h1 className="bestSeller-h1">BEST SELLERS</h1>
      <div className="bestContainer">
        {slider == 1 && (
          <span onClick={() => setSlider(0)}>
            <IconContext.Provider value={{ size: "25px" }}>
              <BsArrowLeft />
            </IconContext.Provider>
          </span>
        )}
        {bestSellers[slider].map((x, i) => (
          <div
            key={i}
            className="bestDiv"
            onClick={scrollToTop}
            data-testid="bestSeller"
          >
            <Link to={`/shop/${x.id}`}>
              <img
                src={x.firstPic}
                onMouseEnter={(e) => {
                  if (x.secondPic) {
                    e.currentTarget.src = x.secondPic;
                  }
                }}
                onMouseLeave={(e) => {
                  if (x.secondPic) {
                    e.currentTarget.src = x.firstPic;
                  }
                }}
                loading="lazy"
              />
              <div className="bestDivBottom">
                <div>
                  <h2>{x.name}</h2>
                  <p>{x.colour}</p>
                </div>
                <p className="bestPrice">${x.price} EUR</p>
              </div>
            </Link>
          </div>
        ))}
        {slider == 0 && (
          <span onClick={() => setSlider(1)}>
            <IconContext.Provider value={{ size: "25px" }}>
              <BsArrowRight />
            </IconContext.Provider>
          </span>
        )}
      </div>
    </>
  );
}
