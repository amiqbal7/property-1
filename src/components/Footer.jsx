import React from "react";
import {
  AiOutlineTwitter,
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="pt-16">
      <hr></hr>
      <section class="">
        <div class="max-w-screen-xl px-4 py-12 mx-auto space-y-8 overflow-hidden sm:px-6 lg:px-8">
          <nav class="flex flex-wrap justify-center -mx-5 -my-2">
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                About
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Blog
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Team
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Pricing
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Contact
              </a>
            </div>
            <div class="px-5 py-2">
              <a
                href="#"
                class="text-base leading-6 text-gray-500 hover:text-gray-900"
              >
                Terms
              </a>
            </div>
          </nav>
          <div class="flex justify-center text-2xl mt-8 space-x-6">
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <AiOutlineFacebook />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <AiOutlineInstagram />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <AiOutlineTwitter />
            </a>
            <a href="#" class="text-gray-400 hover:text-gray-500">
              <AiOutlineWhatsApp />
            </a>
          </div>
          
        </div>
        <hr className="mx-6"></hr>
          <p class="mt-5 pb-3 text-center text-gray-400">
            © 2021 SomeCompany, Inc. All rights reserved.
          </p>
      </section>
    </div>
  );
};

export default Footer;
