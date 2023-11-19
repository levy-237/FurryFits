import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import browseImage1 from "../images/HomeBrowse1.avif";
import browseImage2 from "../images/HomeBrowse4.avif";

const boxVariant = {
  visible: (custom) => ({
    opacity: 1,
    scale: 1,
    transition: { duration: 0.5, ease: "easeInOut" },
  }),
  hidden: { opacity: 0, scale: 0.8 },
};

export default function HomeBrowser() {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      const scrollProgress = window.scrollY / window.innerHeight;
      control.start("visible", { custom: scrollProgress });
    } else {
      control.start("hidden");
    }
  }, [control, inView]);
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };
  return (
    <motion.div
      className="browserContainer"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <h1>Stylish Tails, Endless Trails..</h1>
      <div className="browserDiv">
        <img src={browseImage1} className="browseImg1" loading="lazy" />
        <div>
          <p>
            Join us on a journey of tail-wagging style and discover the joy of
            dressing your furry friend in the finest canine couture. Because
            when it comes to fashion, it's not just about clothes, it's about
            expressing your dog's unique personality and creating unforgettable
            moments together. 🐶✨
          </p>
          <Link to="/shop">
            <span onClick={scrollToTop}>SHOP ALL</span>
          </Link>
        </div>
        <img src={browseImage2} className="browseImg2" loading="lazy" />
      </div>
    </motion.div>
  );
}
