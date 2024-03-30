import { useContext } from "react";
import { LaptopContext } from "./context/Context";

export default function Category() {
  const { setLaptop } = useContext(LaptopContext);

  const handleRadio = (event) => {
    setLaptop(event.target.id === "radio1");
  };

  return (
    <div className="px-5 flex flex-shrink-0 flex-col bg-white border-black">
      <h1 className="font-Montserrat font-bold text-3xl py-5">Laptop</h1>
      <div className="font-Montserrat flex flex-col">
        <label>
          <input
            type="radio"
            id="radio1"
            name="category"
            className="mr-2"
            onChange={handleRadio}
          />
          ALL
        </label>
        {/* <label>
          <input
            type="radio"
            id="radio2"
            name="category"
            className="mr-2"
            onChange={handleRadio}
          />
          DELL
        </label> */}
      </div>
    </div>
  );
}
