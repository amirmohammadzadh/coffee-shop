import React from "react";
import { FaExchangeAlt } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegStar } from "react-icons/fa";

export default function Product({
  id,
  img,
  title,
  price,
  discount,
  popularity,
  count,
}) {
  let off = 0;
  return (
    <div className="flex relative flex-col items-center max-md:gap-y-2 md:gap-y-5 max-md:p-2 md:p-5 bg-white shadow-normal dark:bg-zinc-700 rounded-2xl">
      {discount && count > 0 && (
        <span className="absolute text-zinc-700 bg-orange-300 max-xs:w-[40px] max-xs:h-[20px] xs:w-[53px] xs:h-[30px] max-xs:pt-1 xs:pt-[3px] xs:pl-[3px] flex items-center justify-center max-xs:right-2.5 max-xs:top-2.5 xs:right-6 xs:top-6 rounded-[100px] font-semibold">
          {((discount / price) * 100).toFixed() || ""}%
        </span>
      )}
      <img
        src={img}
        className="max-md:w-32 max-md:h-32 md:w-64 md:h-64 object-contain"
        alt="product"
      />
      <div className="flex flex-col max-md:gap-y-[15px] md:gap-y-[22px]">
        <div className="flex flex-col gap-y-2.5">
          <h3 className="text-zinc-700 dark:text-white max-md:text-sm md:text-xl font-medium line-clamp-2">
            {title}
          </h3>
          {(count > 0 && (
            <div className="">
              {(discount && (
                <div className="flex items-center gap-x-2">
                  <p className="max-xs:text-xs max-sm:text-base md:text-xl text-teal-600 font-semibold">
                    {(price - discount).toLocaleString()}{" "}
                    <span className="text-sm tracking-thigtest">تومان</span>
                  </p>
                  <p className="text-red-500 max-xs:text-xs max-sm:text-base md:text-xl line-through">
                    {price.toLocaleString()}
                  </p>
                </div>
              )) || (
                <p className="max-xs:text-xs max-sm:text-base md:text-xl text-teal-600 font-semibold">
                  {price.toLocaleString()}{" "}
                  <span className="max-sm:text-xs max-md:text-sm md:text-sm  tracking-thigtest">
                    تومان
                  </span>
                </p>
              )}
            </div>
          )) || <p className="text-red-400 max-xs:text-xs max-sm:text-base md:text-xl">فعلا موجود نیست</p>}
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center max-md:gap-x-2.5 md:gap-x-4 text-gray-400">
            <div className="max-md:w-6 max-md:h-6 md:w-9 md:h-9 rounded-full bg-gray-100 hover:bg-teal-600 dark:hover:bg-emerald-500 hover:text-white flex items-center justify-center">
              <MdOutlineShoppingCart className="max-md:w-4 max-md:h-4 md:w-[22px] md:h-[22px] cursor-pointer" />
            </div>
            <FaExchangeAlt className="max-md:w-4 max-md:h-4 md:w-5 md:h-5 cursor-pointer hover:text-teal-600 dark:hover:text-emerald-500" />
          </div>
          <div className="flex items-center flex-row-reverse">
            <FaRegStar
              className={`${
                (popularity > 0 && "text-yellow-400") || "text-gray-300"
              } max-md:w-4 max-md:h-4 md:w-6 md:h-6`}
            />
            <FaRegStar
              className={`${
                (popularity > 1 && "text-yellow-400") || "text-gray-300"
              } max-md:w-4 max-md:h-4 md:w-6 md:h-6`}
            />
            <FaRegStar
              className={`${
                (popularity > 2 && "text-yellow-400") || "text-gray-300"
              } max-md:w-4 max-md:h-4 md:w-6 md:h-6`}
            />
            <FaRegStar
              className={`${
                (popularity > 3 && "text-yellow-400") || "text-gray-300"
              } max-md:w-4 max-md:h-4 md:w-6 md:h-6`}
            />
            <FaRegStar
              className={`${
                (popularity > 4 && "text-yellow-400") || "text-gray-300"
              } max-md:w-4 max-md:h-4 md:w-6 md:h-6`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
