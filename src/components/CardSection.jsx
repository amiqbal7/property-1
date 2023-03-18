import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.min.css';
import 'swiper/components/navigation/navigation.min.css';
import 'swiper/components/pagination/pagination.min.css';


SwiperCore.use([Navigation, Pagination]);

const CardSection = () => {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Swiper
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Card 1</h2>
            <p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Card 2</h2>
            <p className="text-sm text-gray-500">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-white shadow-lg rounded-lg px-4 py-6">
            <h2 className="text-lg font-medium text-gray-800 mb-2">Card 3</h2>
            <p className="text-sm text-gray-500">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default CardSection;