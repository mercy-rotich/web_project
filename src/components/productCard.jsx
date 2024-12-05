/* eslint-disable react/prop-types */
import React from "react";

const ProductCard = ({ items }) => {
  return (
    <div className="border border-gray-200 p-[20px] rounded-md shadow-md flex flex-col justify-between w-full h-full mt-[20px] ">
      <div className="flex justify-between items-center">
        <img
          src={items.image}
          alt="product"
          className="object-contain size-[200px]"
        />
        <h3 className="text-gray-400">${items.price}</h3>
      </div>
      <div>
        <h3>{items.title}</h3>
      </div>

      <div className="flex justify-between items-center">
        <div />
        <button className="bg-green-500  px-[30px] py-[10px]  text-white rounded-md cursor-pointer font-semibold">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
