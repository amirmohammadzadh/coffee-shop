import React from "react";
import { IoIosArrowBack } from "react-icons/io";

export default function Club() {
  return (
    <div className="container p-2.5">
      <div className="flex items-center justify-between max-md:flex-wrap max-md:gap-y-5 max-lg:gap-x-[31px] max-xs:my-3 h-max lg:my-10 rounded-2xl shadow-normal max-xs:px-[12px] max-lg:px-10 max-lg:py-6 lg:px-11 max-xs:py-3 max-md:py-5 lg:py-[23px] bg-gradient-to-r from-emerald-500 to-emerald-600">
        <div className="flex max-md:w-[40%] max-lg:w-[50%] overflow-hidden items-center justify-center gap-x-6 w-full">
          <img
            src="./images/club/diamond.png"
            className=" max-xs:w-[87px] max-xs:h-[78px] max-md:w-20 max-md:h-20 max-lg:w-[60px] max-lg:h-[60px] lg:w-28  lg:h-24"
            alt="club"
          />
          <div className="">
            <h3 className="font-bold max-xs:text-2xl max-md:text-3xl max-lg:text-3xl lg:text-5xl text-white">
              کافی کلاب
            </h3>
            <p className="font-light tracking-thigtest max-xs:text-lg max-lg:text-sm lg:text-2xl text-white">
              میدونستی میتونی با امتیاز هات قهوه بگیری ؟
            </p>
          </div>
        </div>
        <div className="flex max-md:w-[40%] max-lg:w-[50%] overflow-hidden max-xs:gap-x-3 max-md:gap-x-5 max-lg:gap-x-[10px] w-full lg:gap-x-[20px] justify-center">
          <div className="flex items-center p-x-[10px] max-xs:gap-x-2 max-md:gap-x-4 max-lg:gap-x-4 lg:gap-x-3">
            <div className="max-xs:w-[72px] max-xs:h-[72px] max-md:w-20 max-md:h-20 max-lg:w-16 max-lg:h-16 lg:w-24 lg:h-24 bg-white rounded-2xl flex flex-col justify-center items-center gap-1.5">
              <img
                className="max-xs:w-10 max-xs:h-10 max-lg:w-8 max-lg:h-8 lg:w-12 lg:h-12"
                src="./images/club/Discovery.svg"
                alt=""
              />
              <span className="text-emerald-600 max-xs:text-xs max-lg:text-xs max-lg:tracking-thigtest max-lg:line-clamp-1">
                چرخ و بخت
              </span>
            </div>
            <div className="max-xs:w-[72px] max-xs:h-[72px] max-md:w-20 max-md:h-20 max-lg:w-16 max-lg:h-16 lg:w-24 lg:h-24 bg-white rounded-2xl flex flex-col justify-center items-center lg:gap-1.5">
              <img
                className="max-xs:w-10 max-xs:h-10 max-lg:w-8 max-lg:h-8 lg:w-12 lg:h-12"
                src="./images/club/Activity.svg"
                alt=""
              />
              <span className="text-emerald-600 max-xs:text-xs max-lg:text-xs max-lg:tracking-thigtest max-lg:line-clamp-1">
                ماموریت ها
              </span>
            </div>
            <div className="max-xs:w-[72px] max-xs:h-[72px] max-md:w-20 max-md:h-20 max-lg:w-16 max-lg:h-16 lg:w-24 lg:h-24 bg-white rounded-2xl flex flex-col justify-center items-center gap-1.5">
              <img
                className="max-xs:w-10 max-xs:h-10 max-lg:w-8 max-lg:h-8 lg:w-12 lg:h-12"
                src="./images/club/Ticket-Star.svg"
                alt=""
              />
              <span className="text-emerald-600 max-xs:text-xs max-lg:text-xs max-lg:tracking-thigtest max-lg:line-clamp-1">
                جایزه ها
              </span>
            </div>
          </div>
          <div className="flex flex-col items-center max-xs:gap-y-1 lg:gap-y-2">
            <div className="flex flex-col">
              <span className="text-white max-xs:text-2xl max-lg:text-xl lg:text-3xl font-semibold max-lg:-mb-1">
                542
              </span>
              <h5 className="text-white text-sm font-normal max-lg:text-xs max-lg:tracking-thigtest ">
                امتیـــــــاز شما
              </h5>
            </div>
            <a
              href=""
              className="bg-gradient-to-r from-orange-200 to-orange-300 max-xs:text-xs text-white flex items-center max-xs:pt-1 max-xs:pb-[5px] max-xs:px-1.5 max-lg:py-0.5 max-lg:px-1 max-lg:text-sm max-lg:tracking-thigtest lg:px-2 lg:py-1.5 rounded-[100px]"
            >
              دریافت جایزه
              <IoIosArrowBack />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
