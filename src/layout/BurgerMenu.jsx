import "./modal.css";
import { Link } from "react-router-dom";
import { AiOutlineFullscreenExit } from "react-icons/ai";
import { IconContext } from "react-icons";
import { useEffect, useRef } from "react";
export default function burgerMenu({ setMenu, menu }) {
  const menuRef = useRef(null);

  const closeMenu = () => {
    setMenu(false);
  };

  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  const scrollToTop = () => window.scrollTo(0, 0);

  const handleClick = () => (setMenu(false), scrollToTop());
  return (
    <div className={`menu ${menu ? "active" : ""}`} ref={menuRef}>
      <span onClick={() => setMenu(false)} className="x">
        <IconContext.Provider value={{ size: "30px" }}>
          <AiOutlineFullscreenExit />
        </IconContext.Provider>
      </span>
      <span onClick={handleClick}>
        <Link to="/">HOME</Link>
      </span>
      <span onClick={handleClick}>
        <Link to="/shop">SHOP</Link>
      </span>
      <span onClick={handleClick}>
        <Link to="/FAQ">FAQ</Link>
      </span>
    </div>
  );
}
