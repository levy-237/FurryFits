import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <footer>
        <div className="footer">
          <div className="footerNav">
            <p style={{ color: "grey", marginBottom: "0px", marginTop: "0px" }}>
              NAVIGATION
            </p>
            <Link to="/">HOME</Link>
            <Link to="/FAQ">ABOUT</Link>
            <Link>CONTACT</Link>
            <Link to="/FAQ">FAQ</Link>
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
