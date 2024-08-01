import React from "react";
import { categorys } from "../../data";

export default function Category() {
  return (
    <div className="container flex flex-col items-center max-md:gap-y-10 md:gap-y-20 max-md:mb-4 md:my-20">
      <div className="grid max-lg:grid-cols-1 cursor-pointer text-white lg:grid-cols-2 gap-5 w-full container px-4">
        {categorys.map((category) => (
          <div
            key={category.id}
            className="flex relative overflow-hidden max-sm:gap-y-4 sm:gap-y-7 justify-center max-md:p-7 md:p-12 flex-col max-sm:h-[132px] sm:h-[248px] w-full bg-no-repeat rounded-2xl"
          >
            <img
              src={category.img}
              alt="categore"
              className="w-full max-sm:h-auto sm:h-full inset-0 -z-[1] absolute brightness-50"
            />
            <h3 className="max-sm:text-xl sm:text-4xl font-semibold">
              {category.title}
            </h3>
            <p className="max-sm:text-sm sm:text-xl">{category.subtitle}</p>
          </div>
        ))}
      </div>
      <div className="flex w-full max-xl:justify-center xl:justify-between items-center flex-wrap gap-y-3">
        <div className="w-max cursor-pointer h-max flex items-center justify-center flex-col">
          <img
            src="./images/categories/category2.png"
            className="max-xs:w-[100px] max-xs:h-[100px] max-md:w-[150px] max-md:h-[150px] md:w-full md:h-full"
            alt="category"
          />
          <h3 className="line-clamp-1 text-center max-md:text-sm  md:text-xl dark:text-white">
            قهوه دمی واسپرسو
          </h3>
        </div>
        <div className="w-max cursor-pointer h-max flex items-center justify-center flex-col">
          <img
            src="./images/categories/category3.png"
            className="max-xs:w-[100px] max-xs:h-[100px] max-md:w-[150px] max-md:h-[150px] md:w-full md:h-full"
            alt="category"
          />
          <h3 className="line-clamp-1 max-md:text-sm  md:text-xl dark:text-white">
            لوازم جانبی و تجهیزات
          </h3>
        </div>
        <div className="w-max cursor-pointer h-max flex items-center justify-center flex-col">
          <img
            src="./images/categories/category1.png"
            className="max-xs:w-[100px] max-xs:h-[100px] max-md:w-[150px] max-md:h-[150px] md:w-full md:h-full"
            alt="category"
          />
          <h3 className="line-clamp-1 max-md:text-sm  md:text-xl dark:text-white">
            اسپرسو ساز
          </h3>
        </div>

        <div className="w-max cursor-pointer h-max flex items-center justify-center flex-col">
          <img
            src="./images/categories/category4.png"
            className="max-xs:w-[100px] max-xs:h-[100px] max-md:w-[150px] max-md:h-[150px] md:w-full md:h-full"
            alt="category"
          />
          <h3 className="line-clamp-1 max-md:text-sm  md:text-xl dark:text-white">
            پک تستر قهوه
          </h3>
        </div>
        <div className="w-max cursor-pointer h-max flex items-center justify-center flex-col">
          <img
            src="./images/categories/category5.png"
            className="max-xs:w-[100px] max-xs:h-[100px] max-md:w-[150px] max-md:h-[150px] md:w-full md:h-full"
            alt="category"
          />
          <h3 className="line-clamp-1 max-md:text-sm  md:text-xl dark:text-white">
            قهوه ترک
          </h3>
        </div>
      </div>
    </div>
  );
}
