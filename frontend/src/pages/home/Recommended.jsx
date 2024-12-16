import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import BookCard from "../books/BookCard";
const Recommended = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("books.json")
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  const START_BOOK_IDX = 8;
  const END_BOOK_IDX = 18;

  return (
    <div className="py-16">
      <h2 className="text-3xl font-semibold mb-6">Recommended for you</h2>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        navigation={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 2,
            spaceBetween: 50,
          },
          1180: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {/* Render the books between 8th book to 18th book */}
        {books.length > 0 &&
          books.slice(START_BOOK_IDX, END_BOOK_IDX).map((book) => (
            <SwiperSlide key={book._id}>
              <BookCard book={book} />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default Recommended;
