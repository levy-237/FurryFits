import { useContext, useEffect, useRef, useState } from "react";
import { Context } from "../Context";
import { IoIosReturnLeft } from "react-icons/io";
import { IoTrashBin } from "react-icons/io5";
import "./modal.css";
export default function Bag({ setBagModal, bagModal }) {
  const { bagItems, removeFromBag } = useContext(Context);
  const bagRef = useRef(null);
  const [checkout, setCheckout] = useState(false);
  const closeBag = () => {
    setBagModal(false);
  };
  const handleClickOutside = (event) => {
    if (bagRef.current && !bagRef.current.contains(event.target)) {
      closeBag();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const totalPrice = bagItems.reduce((total, item) => total + item.price, 0);
  return (
    <div
      ref={bagRef}
      className={`bag ${bagModal ? `bag-visible` : `bag-invisible`}`}
      onClick={(e) => e.stopPropagation()}
    >
      <div className="xForBag" onClick={() => setBagModal(false)}>
        <span>
          <IoIosReturnLeft />
        </span>
        <span>BACK</span>
      </div>
      {bagItems.map((item, i) => (
        <div key={i} className="bagCard">
          <img
            loading="lazy"
            src={item.firstPic}
            onMouseEnter={(e) => {
              if (item.secondPic) {
                e.currentTarget.src = item.secondPic;
              }
            }}
            onMouseLeave={(e) => {
              if (item.secondPic) {
                e.currentTarget.src = item.firstPic;
              }
            }}
            style={{ height: "8rem", width: "6rem" }}
          />
          <h2>{item.name}</h2>
          <div>
            <span
              onClick={() => removeFromBag(item.id)}
              data-testid="removeButton"
            >
              <IoTrashBin />
            </span>
            <h4>${item.price} EUR</h4>
          </div>
        </div>
      ))}
      <div style={{ width: "100%", marginTop: "auto" }}>
        <div className="bagTotal">
          <span>TOTAL PRICE</span>
          <h4>${totalPrice} EUR</h4>
        </div>
        <section>
          <button className="bagButton" onClick={() => setCheckout(!checkout)}>
            CHECK OUT
          </button>
          {checkout && <span>CHECKOUT IS NOT AVAILABLE</span>}
        </section>
        <h1 style={{ color: "black" }}>YES</h1>
      </div>
    </div>
  );
}
