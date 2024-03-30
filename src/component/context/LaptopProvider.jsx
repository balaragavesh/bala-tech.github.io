import { LaptopContext } from "./Context";
import { useState } from "react";
export default function LaptopProvider({ children }) {
  const [modal, setModal] = useState(false);
  const [productDetail, setProductDetail] = useState([]);
  const [isNavbar, setNavbar] = useState(false);
  const [isLaptop, setLaptop] = useState(true);
  const value = {
    modal,
    setModal,
    productDetail,
    setProductDetail,
    isNavbar,
    setNavbar,
    isLaptop,
    setLaptop,
  };
  return (
    <LaptopContext.Provider value={value}>{children}</LaptopContext.Provider>
  );
}
