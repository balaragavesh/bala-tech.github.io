import React, { useEffect, useState } from "react";
import Section from "./Section";

export default function Blog({contactref}) {
  const title1 = "Expertise";
  const title2 = "Customer satisfaction";
  const content1 =
    "Our journey in laptop sales and service spans a vast array of expertise and dedication. With years of immersion in the industry, we've cultivated an unparalleled understanding of laptops' intricacies, evolving trends, and customer needs. At the core of our service lies a dedication to personalized support, where every client receives tailored solutions and dependable assistance. Backed by years of industry experience, we guarantee top-notch products, transparent communication, and unwavering customer support.";
  const content2 =
    "Our commitment to customer satisfaction goes beyond mere transactions; it's an ongoing journey of understanding, exceeding expectations, and building lasting relationships. We take pride in offering personalized attention, ensuring that each client receives tailored solutions and unwavering support. From guiding customers through informed purchase decisions to swiftly resolving technical issues, we thrive on ensuring a seamless and gratifying experience. Our relentless pursuit of customer happiness drives us to provide transparent communication, reliable service, and a dedication to surpassing expectations.";
  const src1 = "src/assets/expert.jpg";
  const src2 = "src/assets/customer-satis.jpg";
  const data = [
    {
      h1: "10+",
      span: "Years Of Experience",
    },
    {
      h1: "5000+",
      span: "Happy clients",
    },
    {
      h1: "4000+",
      span: "Computer Repaired",
    },
  ];
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    if (counter <= 11) {
      const interval = setInterval(() => {
        setCounter((prevCounter) => prevCounter + 1);
      }, 1000); // Change the interval timing as needed

      return () => clearInterval(interval); // Clear interval when component unmounts or counter reaches 10
    }
  }, [counter]); // Run effect whenever the counter changes

  return (
    <div ref={contactref}>
      <div className="min-h-screen w-full md:w-full flex justify-center items-center flex-col font-Poppins px-5 md:px-40 bg-gray-300 text-lg text-justify py-10">
        <h1 className="font-Montserrat text-5xl px-5 md:px-40 py-10 multicolor-text font-bold">
          Why choose us
        </h1>
        <div>
          <Section src={src1} content={content1} order={""} title={title1} />
          <Section 
            src={src2}
            content={content2}
            order={"md:order-2"}
            title={title2}
          />
        </div>
      </div>
      <div className="w-full h-60 flex justify-center items-center bg-slate-900 px-5 md:px-20" >
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {data.map((item, index) => (
            <h1
              key={index}
              className="font-semibold animate-fade-up animate-ease-in text-5xl text-gray-100 font-Montserrat"
            >
              {item.h1}{" "}
              <span className="text-lg text-gray-200 font-Poppins">
                {item.span}
              </span>
            </h1>
          ))}
        </div>
      </div>
    </div>
  );
}
