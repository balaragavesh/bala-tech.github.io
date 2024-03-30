import React, { useContext } from "react";
import { LaptopContext } from "../context/Context";

export default function Modal() {
  const { productDetail, setModal } = useContext(LaptopContext);
  return (
    <div className="w-full h-full bg-black bg-opacity-60 absolute top-0 left-0 flex justify-center items-center">
      <div className="w-[30rem] bg-gray-400  shadow-xl">
        <img src={productDetail.image} alt="" />
        <div className="p-10">
          <h1 className="font-Poppins font-medium text-2xl">
            {productDetail.productName}
          </h1>
          <p className="font-Montserrat text-gray-950 font-medium">
            CPU :{" "}
            <span className="font-normal text-teal-950">
              {productDetail.cpu}
            </span>
          </p>
          <p className="font-Montserrat text-gray-950 font-medium">
            RAM :{" "}
            <span className="font-normal text-teal-950">
              {productDetail.ram}
            </span>
          </p>
          <p className="font-Montserrat text-gray-950 font-medium">
            Storage :{" "}
            <span className="font-normal text-teal-950">
              {productDetail.storage}
            </span>
          </p>
          {/*<p className="font-Montserrat text-gray-950 font-medium">
            Screen :{" "}
            <span className="font-normal text-teal-950">
              {productDetail.screen}
            </span>
          </p>
          <p className="font-Montserrat text-gray-950 font-medium">
            Price :{" "}
            <span className="font-normal text-teal-950">
              $ {productDetail.price}
            </span>
          </p>
          <p className="font-Montserrat text-gray-950 font-medium">
            Description :{" "}
            <span className="font-normal text-teal-950">
              {productDetail.description}
            </span>
          </p>*/}
          <button
            className="bg-teal-950 flex text-gray-100 mt-5 px-4 py-2 rounded-sm font-Montserrat"
            onClick={() => setModal(false)}
          >
            Close
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
