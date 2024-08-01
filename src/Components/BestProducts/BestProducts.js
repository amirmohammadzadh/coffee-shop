import React, { useState } from "react";
import Product from "../Product";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { bestProducts } from "../../data";
import "../../index.css";

export default function BestProducts() {
  return (
    <div className="container flex flex-col gap-y-12 my-10 p-[10px]">
      {/* Best Products Title */}
      <div className="flex items-end justify-between w-full">
        <div className="">
          <h3 className="font-MorabbaMedium text-zinc-700 dark:text-white max-md:text-xl md:text-5xl">
            محصولات پر فروش
          </h3>
          <h4 className="font-MorabbaLight text-zinc-700 dark:text-white md:text-3xl">
            پیشنهاد قهوه خور ها ...
          </h4>
        </div>
        <div className="flex items-center gap-x-[18px]">
          <IoIosArrowForward className="w-[26px] h-[26px] text-zinc-700 dark:text-white rounded-full flex items-center justify-center bg-white" />
          <IoIosArrowBack className="w-[26px] h-[26px] text-zinc-700 dark:text-white rounded-full flex items-center justify-center bg-white" />
        </div>
      </div>
      {/* Best Products Components */}
      <div className="grid grid-rows-1 max-md:grid-cols-2 max-lg:grid-cols-3 lg:grid-cols-4 items-center gap-x-5">
        {bestProducts.map((product, index) => (
          <div
          key={product.id}
            className={`${index >= 2 ? "hidden-in-mobile-md" : ""} ${
              index >= 3 ? "hidden-in-mobile-lg" : ""
            }`}
          >
            <Product {...product} />
          </div>
        ))}
      </div>
    </div>
  );
}
