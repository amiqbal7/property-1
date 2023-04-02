import React from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { FreeMode, Pagination, Autoplay } from "swiper";
import img from "../assets/img_photo.png"
import star from "../assets/star.png"
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const Testi = () => {
  return (
    <div className=" ">
      <h1>Testimonials</h1>
      <Swiper
        modules={[FreeMode, Pagination, Autoplay]}
        pagination={{ clickable: true }}
        slidesPerView={1.25}
        spaceBetween={32}
        loop={true}
        autoplay={{
          delay: 5000,
        }}
        centeredSlides={true}
      >
        <SwiperSlide>
          <div class=" mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div class="swiper-container !overflow-hidden scrollbar-hide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img src={img} />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star} />
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img class="" src="./images/photo2.png" />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star}/>
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div class="swiper-container !overflow-hidden scrollbar-hide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img src={img} />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star} />
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img class="" src="./images/photo2.png" />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star}/>
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div class="swiper-container !overflow-hidden scrollbar-hide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img src={img} />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star} />
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img class="" src="./images/photo2.png" />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star}/>
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div class="mx-6 mt-8 lg:col-span-2 lg:mx-0">
            <div class="swiper-container !overflow-hidden scrollbar-hide">
              <div class="swiper-wrapper">
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img src={img} />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star} />
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
                <div class="swiper-slide">
                  <div class="flex h-full flex-col justify-between bg-[#F1F3FF] p-12">
                    <div class="grid grid-cols-1 mx-auto justify-items-center">
                      <div class="">
                        <img class="" src="./images/photo2.png" />
                      </div>
                      <div class="mt-4 grid mx-auto justify-items-center">
                        <img src={star}/>
                        <p class="mt-4 text-center text-lg text-gray-600">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Ipsam cumque recusandae dolorum porro, quasi
                          sunt necessitatibus dolorem ab laudantium veli.
                        </p>
                      </div>
                    </div>
                    <div class="mt-8 font-bold text-center text-black">
                      John Doe 32, Bromo
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default Testi;


