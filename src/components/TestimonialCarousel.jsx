import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import avatar from "../assets/avatar.png"

const TestimonialCarousel = () => {
  const settings = {
    dots: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    infinite: true,
  };

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      company: 'ABC Inc.',
      message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      id: 2,
      name: 'Jane Doe',
      company: 'XYZ Corp.',
      message: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      id: 3,
      name: 'Bob Smith',
      company: '123 Co.',
      message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      id: 4,
      name: 'Mary Johnson',
      company: '456 LLC',
      message: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    },
    {
      id: 5,
      name: 'Tom Jones',
      company: '789 Corp.',
      message: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
  ];

  return (
    <div className='py-16 mx-auto grid justify-items-center rounded-md'>
      <div  className=''>
        <div>
          <h1 className='font-extrabold text-3xl text-center pb-5'>THIS IS TESTIMONIALS</h1>
        </div>
        <div className="max-w-4xl bg-white py-16 pt-7">
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="px-5">
              <div className="flex items-center">
                <img
                src={avatar}
                  alt={testimonial.name}
                  className="rounded-full w-12 h-12 mr-4"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-500">{testimonial.company}</p>
                </div>
                
              </div>
              <div><p className="text-gray-600 mb-4">{testimonial.message}</p></div>
            </div>
          ))}
        </Slider>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
