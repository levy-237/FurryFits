import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "../App.css";
import { FreeMode, Pagination } from "swiper/modules";

export default function Reviews() {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>REVIEWS FROM OUR COSTUMERS:</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="review">
            <p>
              Chic Canine Closet is a fashion haven for dogs! The outfits are
              not only trendy but also cozy. My dog struts with confidence in
              the latest canine fashions. Highly recommended for pet parents
              with a flair for style.
            </p>
            <h2>- Canine Closet</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Bark Chic Boutique has a fantastic collection of dog clothes. From
              casual wear to special occasion outfits, they have it all. The
              quality is excellent, and my dog is always the best-dressed at
              playdates.
            </p>
            <h2>- Bark Chic </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Paws & Pizzazz Emporium is my secret to keeping my dog's wardrobe
              chic and updated. The unique designs and affordable prices make it
              a winner. A treasure trove for anyone wanting to pamper their
              pooch.
            </p>
            <h2>- Pizzazz Emporium</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Snazzy Snouts Boutique is a gem for pet fashion enthusiasts. The
              range of outfits is mind-blowing, and the customer service is
              top-notch. My dog and I are both happy customers.
            </p>
            <h2>- Snazzy Snouts </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Absolutely in love with the adorable outfits I found here for my
              fur baby! Puppy Couture Palace has a fantastic selection and the
              cutest styles that make my dog stand out in the park. A must-visit
              for pet fashion enthusiasts.
            </p>
            <h2>- Palace</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Tail Trends Boutique is my go-to for stylish and quality dog
              clothing. The variety is impressive, and my pup always gets
              compliments on his outfits. The attention to detail and comfort is
              unmatched
            </p>
            <h2>- Tails </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Dapper Doggie Depot is where I found the most dashing outfits for
              my furry friend. The clothing is not just stylish but also
              durable, perfect for an active pup. The compliments keep pouring
              in!
            </p>
            <h2>- Doggie Depot</h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Canine Catwalk Collections is the epitome of doggy fashion. The
              runway-inspired styles make my dog look like a model. If you want
              your pup to turn heads, this is the place to shop!
            </p>
            <h2>- Catwalk Collections </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Doggie Threads Treasure Trove is a hidden gem for unique dog
              outfits. I always find quirky and fun pieces that match my dog's
              personality perfectly. The quality is outstanding, and the prices
              are reasonable.
            </p>
            <h2>- Treasure Trove </h2>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="review">
            <p>
              Posh Pup Boutique is where luxury meets canine fashion. The
              exclusive designs and high-end materials make my dog feel like
              royalty. If you want your pup to exude sophistication, this is the
              boutique for you.
            </p>
            <h2>- Posh Pup </h2>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
