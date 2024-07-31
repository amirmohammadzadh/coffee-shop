import React from "react";
import { IoIosArrowBack } from "react-icons/io";
export default function Title() {
  return (
    <div className="flex justify-between items-end mb-12">
      <div className="flex flex-col max-md:gap-x-[2px] md:gap-y-1.5">
        <h3 className="font-MorabbaMedium text-zinc-700 dark:text-white max-md:text-xl md:text-5xl">
          جدیدترین محصولات
        </h3>
        <h4 className="font-MorabbaLight text-zinc-700 dark:text-white md:text-3xl">
          فرآوری شده از دانه قهوه
        </h4>
      </div>
      <a
        href="#"
        className="flex text-orange-300 max-md:text-sm pt-1.5 pb-1 pr-3 pl-1 md:hover:bg-orange-200/20 rounded-md md:text-xl tracking-thigtest items-center max-xs:text-xs md:gap-x-1"
      >
        مشاهده همه محصولات
        <IoIosArrowBack className="w-5 h-5" />
      </a>
    </div>
  );
}
