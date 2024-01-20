import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IconContext } from "react-icons";
import BurgerMenu from "./BurgerMenu";
import { FaDog } from "react-icons/fa";
import Bag from "./Bag";
import { Context } from "../Context";
export default function Header() {
  const { bagItems, bagModal, setBagModal } = useContext(Context);
  const [scrolled, setScrolled] = useState(false);
  const [stuck, setStuck] = useState(false);
  const [menu, setMenu] = useState(false);
  const [bagCount, setBagCount] = useState(bagItems.length);
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const isStuck = window.scrollY > window.innerHeight * 1.1;
      setStuck(isStuck);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    setBagCount(bagItems.length);
  }, [bagItems]);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <header
        className={`header ${scrolled ? "opaque" : ""} ${stuck ? "stick" : ""}`}
      >
        <Link to="/" className="headerName">
          <span style={{ fontSize: "x-large" }} onClick={scrollToTop}>
            <IconContext.Provider value={{ size: "35px" }}>
              <FaDog />
            </IconContext.Provider>
            FurryFits
          </span>
        </Link>
        <div className="header-comps">
          <Link to="/">
            <span onClick={scrollToTop}>HOME</span>
          </Link>
          <Link to="/shop">
            <span onClick={scrollToTop}>SHOP</span>
          </Link>
          <Link to="/FAQ">
            <span onClick={scrollToTop}>FAQ</span>
          </Link>
        </div>
        <div className="burgerMenu">
          <span onClick={() => setMenu(true)}>
            <IconContext.Provider value={{ size: "25px" }}>
              <GiHamburgerMenu />
            </IconContext.Provider>
          </span>
          {menu && <BurgerMenu setMenu={setMenu} menu={menu} />}
        </div>
        <span onClick={() => setBagModal(!bagModal)}>
          <p className="cart">
            BAG
            <span className="bag-count">({bagCount})</span>
          </p>
          {bagModal && <Bag setBagModal={setBagModal} bagModal={bagModal} />}
        </span>
      </header>
    </>
  );
}
