import React, { useState, useEffect } from "react";
import homeImage1 from "../images/homeImage1.jpeg";
import homeImage2 from "../images/homeImage2.jpg";
import homeImage5 from "../images/homeImage5.avif";
import { Link } from "react-router-dom";
import { FaPaw } from "react-icons/fa";
import {
  BsArrowLeftCircle,
  BsArrowRightCircle,
  BsCircleFill,
  BsCircle,
} from "react-icons/bs";
import { IconContext } from "react-icons";

export default function HomePageCarousel() {
  const imgArr = [homeImage1, homeImage5, homeImage2];
  const [imgNum, setImgNum] = useState(0);
  const [buttonHover, setButtonHover] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      {imgNum == 0 ? (
        <div
          className="homeImage"
          style={{ backgroundImage: `url(${imgArr[0]})` }}
        >
          <div className="homeImageDiv">
            <div>
              <h1>Fashion Furs:</h1>
              <h2>every Dog Deserves a Wardrobe.</h2>
            </div>
            <Link
              to="/shop"
              style={{ color: "white" }}
              className="homeImageButton"
            >
              <button
                className="homeImageButton"
                onClick={scrollToTop}
                onMouseOver={() => setButtonHover(true)}
                onMouseLeave={() => setButtonHover(false)}
              >
                {buttonHover ? (
                  <span
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    SHOP
                    <IconContext.Provider value={{ size: "25px" }}>
                      <FaPaw style={{ marginLeft: "10px" }} />
                    </IconContext.Provider>
                  </span>
                ) : (
                  <span style={{ fontSize: "small" }}> BARK & BROWSE</span>
                )}
              </button>
            </Link>
          </div>
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span className="homeImageLeftArrow" onClick={() => setImgNum(2)}>
              <IconContext.Provider value={{ size: "35px" }}>
                <BsArrowLeftCircle />
              </IconContext.Provider>
            </span>
          ) : null}
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span
              className="homeImageRightArrow"
              onClick={() => setImgNum(imgNum + 1)}
            >
              <IconContext.Provider value={{ size: "35px" }}>
                <BsArrowRightCircle />
              </IconContext.Provider>
            </span>
          ) : null}
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span className="homeImageCircle">
              <span>
                <IconContext.Provider value={{ size: "7px", color: "black" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
              <span>
                <IconContext.Provider value={{ size: "7px", color: "grey" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
              <span>
                <IconContext.Provider value={{ size: "7px", color: "grey" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
            </span>
          ) : null}
        </div>
      ) : imgNum == 1 ? (
        <div
          className="homeImage"
          style={{ backgroundImage: `url(${imgArr[1]})` }}
        >
          <div className="homeSecondImageDiv">
            <div>
              <h1>Pawsitively Elegant: High-Quality</h1>
              <h1>
                Fashion for Your Furry Friend.
                <IconContext.Provider value={{ size: "25px", color: "white" }}>
                  <FaPaw style={{ marginLeft: "5px" }} />
                </IconContext.Provider>
              </h1>
            </div>
            <Link to="/shop">
              <button onClick={scrollToTop}>SHOP</button>
            </Link>
          </div>
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span
              className="homeImageLeftArrow"
              onClick={() => setImgNum(imgNum - 1)}
            >
              <IconContext.Provider value={{ size: "35px", color: "white" }}>
                <BsArrowLeftCircle />
              </IconContext.Provider>
            </span>
          ) : null}
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span
              className="homeImageRightArrow"
              onClick={() => setImgNum(imgNum + 1)}
            >
              <IconContext.Provider value={{ size: "35px", color: "white" }}>
                <BsArrowRightCircle />
              </IconContext.Provider>
            </span>
          ) : null}
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span className="homeImageCircle">
              <span>
                <IconContext.Provider value={{ size: "7px", color: "black" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
              <span>
                <IconContext.Provider value={{ size: "7px", color: "white" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
              <span>
                <IconContext.Provider value={{ size: "7px", color: "black" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
            </span>
          ) : null}
        </div>
      ) : (
        <div
          className="homeImage"
          style={{ backgroundImage: `url(${imgArr[2]})` }}
        >
          <div className="homeSecondImageDiv">
            <div>
              <h1>From Park to Pawty</h1>
              <h1>Outfitting Your Pup for Every Occasion.</h1>
            </div>
            <Link to="/shop">
              <button onClick={scrollToTop}>EXPLORE</button>
            </Link>
          </div>
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span
              className="homeImageLeftArrow"
              onClick={() => setImgNum(imgNum - 1)}
            >
              <IconContext.Provider value={{ size: "35px" }}>
                <BsArrowLeftCircle />
              </IconContext.Provider>
            </span>
          ) : null}
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span className="homeImageRightArrow" onClick={() => setImgNum(0)}>
              <IconContext.Provider value={{ size: "35px" }}>
                <BsArrowRightCircle />
              </IconContext.Provider>
            </span>
          ) : null}
          {scrollPosition <= window.innerHeight / 1.3 ? (
            <span className="homeImageCircle">
              <span>
                <IconContext.Provider value={{ size: "7px", color: "grey" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
              <span>
                <IconContext.Provider value={{ size: "7px", color: "grey" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
              <span>
                <IconContext.Provider value={{ size: "7px", color: "black" }}>
                  <BsCircleFill />
                </IconContext.Provider>
              </span>
            </span>
          ) : null}
        </div>
      )}
    </>
  );
}
