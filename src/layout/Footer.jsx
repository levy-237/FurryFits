import { Link } from "react-router-dom";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footerNav">
            <p style={{ color: "grey", marginBottom: "0px", marginTop: "0px" }}>
              NAVIGATION
            </p>
            <Link to="/">
              <span onClick={scrollToTop}>HOME</span>
            </Link>
            <Link to="/FAQ">
              <span onClick={scrollToTop}>ABOUT</span>
            </Link>
            <Link>
              <span onClick={scrollToTop}>CONTACT</span>
            </Link>
            <Link to="/FAQ">
              <span onClick={scrollToTop}>FAQ</span>
            </Link>
          </div>
          <div className="footerOt">
            <p style={{ color: "grey" }}>INFORMATION</p>
            <p>SHOP</p>
            <p>LOCATIONS</p>
            <p>SHIPPING AREA</p>
          </div>
        </div>
        <hr />
        <div className="footerPol">
          <p>&copy; 2023 SOMETHING</p>
          <p>PRIVACY POLICY</p>
          <p>TERMS AND CONDITIONS</p>
        </div>
      </footer>
    </>
  );
}
