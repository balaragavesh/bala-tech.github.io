import React from "react";
import LaptopList from "./Home/LaptopList";

export default function Laptop({laptopref}) {
  return (
    <div ref={laptopref}  className="py-10 bg-gray-300">
      <div className="p-20">
       <LaptopList />
      </div>
    </div>
  );
}
