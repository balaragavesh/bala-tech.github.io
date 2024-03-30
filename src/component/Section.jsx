import React from "react";

export default function Section({ content, src, order,title }) {
  return (
    <div className="flex items-center max-md:flex-col">
      <img
        src={src}
        className={`md:w-1/2 rounded p-10  ${order}`}
        alt="Image for blog"
      />
      <div className="w-1/2 md:p-10 flex flex-col items-center justify-center">
        <h1 className="font-bold text-4xl font-Montserrat mb-2">{title}</h1>
        <p>{content}</p>
      </div>
    </div>
  );
}
