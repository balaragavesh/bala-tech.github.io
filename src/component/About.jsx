import React from "react";

export default function About({ aboutref }) {
  return (
    <div ref={aboutref} className="flex justify-center flex-col px-5 md:px-40 bg-gray-300 py-10 md:py-20">
      <h1 className="multicolor-text font-Montserrat text-3xl md:text-5xl font-bold text-center md:text-left py-3">
        About Bala Technologies
      </h1>
      <div className="flex flex-col md:flex-row font-medium">
        <div className="md:w-2/3 md:pr-10">
          <p className="text-black font-Poppins text-sm md:text-lg mt-5">
            Welcome to our laptop sales and service website, dedicated to meeting the technology needs of Madurai, Tamil Nadu! As a premier destination for all things related to laptops, we take immense pride in catering to our customers' diverse requirements with top-notch products and exceptional service.
          </p>
          <p className="text-black font-Poppins text-sm md:text-lg mt-5">
            We understand the pivotal role that laptops play in today's fast-paced world. Whether you're a student, a professional, or an entrepreneur, we aim to be your go-to hub for all your laptop needs in Madurai.
          </p>
          <p className="text-black font-Poppins text-sm md:text-lg mt-5">
            We strive to provide a comprehensive service experience. With a passion for technology and a customer-centric approach, we are dedicated to assisting you in finding the perfect laptop that aligns with your specific needs and preferences.
          </p>
        </div>
        <div className="flex justify-center md:justify-end w-full md:w-1/3 h-auto md:h-1/2 mt-5 md:mt-0">
          <img src="src/assets/img3.jpg" alt="Image Description" className="w-full md:w-3/4" />
        </div>
      </div>
    </div>
  );
}
