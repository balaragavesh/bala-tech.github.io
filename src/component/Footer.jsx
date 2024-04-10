import React from "react";

export default function Footer({ contactref }) {
  return (
    <div
      ref={contactref}
      className="font-Poppins text-center bg-zinc-900 text-gray-100 py-20"
    >
      <div className="container mx-auto grid md:grid-cols-3  px-4">
        <div className="md:w-1/3 mb-4 md:mb-0 md:text-left text-center">
          <p>Follow us on social media:</p>
          <div className="flex justify-center md:justify-start mt-2">
            <a
              href="https://www.linkedin.com"
              className="mr-4"
              aria-label="LinkedIn"
            >
              <i className="fab fa-linkedin fa-lg"></i>
              <span className="sr-only">LinkedIn</span>
              <span>LinkedIn</span>
            </a>
            <a
              href="https://www.instagram.com"
              className="mr-4"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
              <span className="sr-only">Instagram</span>
              <span>Instagram</span>
            </a>
            <a
              href="https://www.facebook.com"
              className="mr-4"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
              <span className="sr-only">Facebook</span>
              <span>Facebook</span>
            </a>
          </div>
        </div>
        {/* Google Map */}
        <div className="w-full h-80 md:h-96 mt-2 px-5 md:px-10">
          <iframe
            title="Google Map"
            className="w-full h-full"
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2779.035753679018!2d78.09705109984208!3d9.921458438489699!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00cf5d94424f23%3A0xe0c19c82ee4c8ce4!2sBala%20Technologies!5e0!3m2!1sen!2sin!4v1709019739649!5m2!1sen!2sin"
          ></iframe>
        </div>
        <div className="md:text-left text-left flex flex-col gap-5 items-start max-w-xs py-10 md:py-5">
          <div className="flex items-top mb-2">
            <img
              src="https://icon-library.com/images/address-icon-white/address-icon-white-28.jpg"
              alt="Address"
              className="w-8 h-8 mr-2"
            />
            <p>
              Address : 38b, Parthasarathy St, S S Colony, Madurai, Tamil Nadu
              625016.
            </p>
          </div>
          <div className="flex items-top mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <p>Email: info@balatech.com</p>
          </div>
          <div className="flex items-top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-8 h-8 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
              />
            </svg>
            <p>Phone: 07904896370</p>
          </div>
        </div>
      </div>
    </div>
  );
}
