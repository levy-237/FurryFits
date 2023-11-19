import React from "react";
import Marquee from "react-fast-marquee";
import tickerImg1 from "../images/ticker.avif";
import tickerImg2 from "../images/ticker1.avif";
export default function Contact() {
  return (
    <div className="tickerContainer">
      <Marquee>
        <div className="tickerDiv">
          <h2>levanilominashvili23@gmail.com</h2>
          <h2>FOR THE CONTACT</h2>
          <h2>levanilominashvili23@gmail.com</h2>
        </div>
      </Marquee>
    </div>
  );
}
