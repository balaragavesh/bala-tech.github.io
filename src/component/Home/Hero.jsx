import React, { useState, useEffect } from "react";
import LaptopList from "./LaptopList";
import Category from "../Category";

export default function Hero({ homeref, laptopref }) {
  const img1 = "url('/img1.jpg')";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Control the initial translateY to start a little above the bottom
  const initialOffset =70; // Start 50px above the bottom initially
  const translateYValue = initialOffset + scrollY * 0.5;

  return (
    <>
      <div
        ref={homeref}
        className="w-full md:bg-fixed bg-center bg-cover bg-no-repeat flex flex-col justify-end h-[50vh] md:min-h-screen"
        style={{ backgroundImage: img1 }}
      >
        <h1
          className="text-center text-white font-Montserrat font-bold text-3xl md:text-4xl lg:text-7xl mb-15" // increased bottom margin
          style={{
            transform: `translateY(-${translateYValue}px)`,
            transition: 'transform 0.2s ease-out',
          }}
        >
          Laptop Sales and Service
        </h1>
      </div>
      <div className="md:flex">
        <Category />
        <LaptopList laptopref={laptopref} />
      </div>
    </>
  );
}
