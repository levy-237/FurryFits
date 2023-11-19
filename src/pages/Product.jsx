import { useState, useContext, useEffect } from "react";
import Reviews from "../components/Reviews";
import { useParams } from "react-router-dom";
import { getDocs, collection } from "firebase/firestore";
import { db } from "../config/firebase";
import { LiaShippingFastSolid } from "react-icons/lia";
import { SlSocialDropbox } from "react-icons/sl";
import { IconContext } from "react-icons";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { Context } from "../Context";
export default function Product() {
  const { bagItems, addToBag, setBagModal } = useContext(Context);
  const { id } = useParams();
  const [product, setProduct] = useState();
  const productCollection = collection(db, "products");
  const [description, setDescription] = useState(false);
  const [addedProducts, setAddedProducts] = useState([]);
  const [images, setImages] = useState([]);
  useEffect(() => {
    const getProduct = async () => {
      try {
        const data = await getDocs(productCollection);
        const neededData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
        }));
        const productData = neededData.filter((x) => x.id === id);
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };
    getProduct();
    window.scrollTo(0, 0);
  }, []);
  const handleSubmit = () => {
    const objectProd = product.reduce((acc, curr) => {
      // Check if the current element is an object
      if (typeof curr === "object" && !Array.isArray(curr)) {
        // Get the keys of the object and assign them to the accumulator object
        Object.keys(curr).forEach((key) => {
          acc[key] = curr[key];
        });
      }
      return acc;
    }, {});
    addToBag(objectProd);
    setBagModal(true);
  };

  return (
    <>
      <div className="cardContainer">
        {product &&
          product.map((x, i) => (
            <div key={i} className="cardDiv">
              <div className="cardPhoto">
                <img
                  src={x.firstPic}
                  loading="lazy"
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
                />
              </div>
              <div className="cardInfo">
                <h1>{x.name}</h1>
                <span>$ {x.price} EUR</span>
                <p>
                  From adorable sweaters to trendy shirts, we've got your pup
                  covered in comfort and style. Let your dog strut their stuff
                  with confidence in our carefully crafted outfits for your
                  playful pal.
                </p>
                <button onClick={handleSubmit}>ADD TO BAG</button>
                <div className="descDiv">
                  <p
                    className="cardP"
                    style={{
                      display: "flex",
                      width: "100%",
                    }}
                    onClick={() => setDescription(!description)}
                  >
                    DESCRIPTION
                    <span className="descriptionPlus">
                      <IconContext.Provider value={{ size: "25px" }}>
                        {description ? <AiOutlineMinus /> : <AiOutlinePlus />}
                      </IconContext.Provider>
                    </span>
                  </p>
                  {description && (
                    <p style={{ width: "100%" }}>
                      Discover a range of stylish and comfortable clothing
                      options designed exclusively for your furry companion. Our
                      collection features a variety of outfits tailored to suit
                      every dog's personality and size. From cozy sweaters and
                      jackets for chilly days to fashionable shirts and dresses
                      for a touch of flair, our selection ensures both warmth
                      and style. Crafted with quality materials and attention to
                      detail, these clothes provide comfort and mobility,
                      allowing your pet to strut in confidence while staying
                      snug and trendy in any season.
                    </p>
                  )}
                </div>
                <p
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <span>
                    <IconContext.Provider value={{ size: "25px" }}>
                      <LiaShippingFastSolid />
                    </IconContext.Provider>
                  </span>
                  FREE SHIPPING AROUND THE WORLD
                </p>
                <p
                  style={{ display: "flex", gap: "1rem", alignItems: "center" }}
                >
                  <span>
                    <IconContext.Provider value={{ size: "25px" }}>
                      <SlSocialDropbox />
                    </IconContext.Provider>
                  </span>
                  30 DAY RETURN POLICY
                </p>
              </div>
            </div>
          ))}
      </div>
      <Reviews />
    </>
  );
}
