import React from "react";

export default function LaptopItem({ item, index, handleModal }) {
  return (
    <div
      onClick={() => handleModal(item)}
      key={index}
      className="font-Poppins relative cursor-pointer shadow-lg flex flex-col bg-gray-200 "
    >
      <img src={item.image} className="h-2/3" alt="" />
      <div className="flex flex-col px-10 py-5">
        <div className="font-medium">
          <span className="text-teal-950 font-bold text-xl">
            {item.productName}
          </span>
        </div>
        <div className="font-medium">
          CPU
          <span className="ml-2 text-teal-950 font-normal"> {item.cpu}</span>
        </div>
        <div className="font-medium">
          RAM
          <span className="ml-2 text-teal-950 font-normal"> {item.ram}</span>
        </div>
        <div className="font-medium">
          Storage
          <span className="ml-2 text-teal-950 font-normal"> {item.storage}</span>
        </div>
        {/* <div className="font-medium">
          Description
          <span className="ml-2 text-teal-950 font-normal">
            {item.description.split(" ").length > 15
              ? item.description.slice(0, 50) + "..."
              : item.description}
          </span>
        </div> */}
      </div>
    </div>
  );
}
