import shopImg from "../images/ShopImg2.jpeg";
import { Link, useSearchParams } from "react-router-dom";
import { db } from "../config/firebase";
import { useEffect, useState } from "react";
import Reviews from "../components/Reviews";
import { getDocs, collection } from "firebase/firestore";
export default function Shop() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [products, setProducts] = useState([]);
  const productCollection = collection(db, "products");
  const filter = searchParams.get("price");
  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await getDocs(productCollection);
        const neededData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        setProducts(neededData);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  let data = products.sort((a, b) => a.name.localeCompare(b.name));

  if (filter === "up") {
    data = data.sort((a, b) => a.price - b.price);
  } else if (filter === "down") {
    data = data.sort((a, b) => b.price - a.price);
  } else {
    data = data.sort((a, b) => a.name.localeCompare(b.name));
  }

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <>
      <div>
        <div className="shopImg" style={{ backgroundImage: `url(${shopImg})` }}>
          <h1>
            FIND THE <br />
            THE BEST!
          </h1>
        </div>
        <div className="shopFilter">
          <Link style={{ cursor: "default" }}>SORT BY:</Link>
          <div>
            <Link to="?price=up">PRICE ASCENDING</Link>
            <Link to="?price=down">PRICE DESCENDING</Link>
            <Link to="?price=null" className="RESET">
              RESET
            </Link>
          </div>
        </div>
        <div className="shopContainer">
          {data.map((x, i) => (
            <div key={i} className="shopDiv" onClick={scrollToTop}>
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
                <div className="shopDivBottom">
                  <div>
                    <h2>{x.name}</h2>
                    <p>{x.colour}</p>
                  </div>
                  <p className="shopPrice">$ {x.price} EURO</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
      <Reviews />
    </>
  );
}
