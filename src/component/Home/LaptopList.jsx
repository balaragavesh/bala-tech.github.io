import React, { useContext } from "react";
import laptopData from "../json/laptop.json";
import Modal from "../utility/Modal";
import { LaptopContext } from "../context/Context";
import LaptopItem from "./LaptopItem";
import desktopData from "../json/desktop.json";
import Desktop from "./Desktop";
export default function LaptopList({laptopref}) {
  const { isLaptop, modal, setModal, setProductDetail } =
    useContext(LaptopContext);
  const handleModal = (item) => {
    setProductDetail(item);
    setModal(true);
  };
  return (
    <div ref={laptopref} className="bg-white relative grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  p-20 gap-7">
      {isLaptop ? (
        <>
          <h1 className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-4 font-Poppins my-10 font-bold text-center text-5xl text-slate-700">
            Laptops
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </h1>
          {laptopData.map((item, index) => (
            <LaptopItem
              item={item}
              index={index}
              handleModal={handleModal}
              key={index}
            />
          ))}
        </>
      ) : (
        <>
          <h1 className="flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-4 font-Poppins my-10 font-bold text-center text-5xl text-slate-700">
            Desktop Accessories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0V12a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 12V5.25"
              />
            </svg>
          </h1>
          {desktopData.map((item, index) => (
            <Desktop
              item={item}
              index={index}
              key={index}
              handleModal={handleModal}
            />
          ))}
        </>
      )}

      {modal ? <Modal /> : <></>}
    </div>
  );
}
