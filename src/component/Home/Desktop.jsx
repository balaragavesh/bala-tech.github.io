import React from "react";

export default function LaptopItem({ item, index, handleModal }) {
  return (
    <div
      onClick={() => handleModal(item)}
      key={index}
      className="font-Poppins relative cursor-pointer shadow-lg flex flex-col bg-gray-200 "
    >
      <img src={item.image} className="" alt="" />
      <div className="flex flex-col px-10 py-5">
        <div className="font-medium">
          Name
          <span className="ml-2 text-teal-950 font-normal">
            {item.productName}
          </span>
        </div>
        <div className="font-medium">
          Price
          <span className="ml-2 text-teal-950 font-normal">$ {item.price}</span>
        </div>

        <div className="font-medium">
          Description
          <span className="ml-2 text-teal-950 font-normal">
            {item.description.split(" ").length > 15
              ? item.description.slice(0, 50) + "..."
              : item.description}
          </span>
        </div>
      </div>
    </div>
  );
}
