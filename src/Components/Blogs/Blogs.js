import React from "react";
import { IoIosArrowBack } from "react-icons/io";
import { blogs } from "../../data";

export default function Blogs() {
  return (
    <div className="container overflow-x-hidden px-2.5 flex flex-col gap-y-12 max-md:my-5 md:my-10">
      <div className="flex justify-between items-center">
        <h3 className="font-MorabbaMedium text-zinc-700 dark:text-white max-md:text-xl md:text-5xl">
          مطالب خواندنی
        </h3>
        <a
          href="#"
          className="flex text-orange-300 max-md:text-sm pt-1.5 pb-1 pr-3 pl-1 md:hover:bg-orange-200/20 rounded-md md:text-xl tracking-thigtest items-center max-xs:text-xs md:gap-x-1"
        >
          مشاهده همه مطالب
          <IoIosArrowBack className="w-5 h-5" />
        </a>
      </div>
      <div className="grid w-full justify-center items-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3.5 gap-x-5">
        {blogs.map((blog) => (
          <div className="flex w-full p-2.5 sm:flex-col md:p-1.5 lg:p-2.5 bg-white dark:bg-zinc-700 shadow-normal rounded-2xl">
            <img
              src={blog.img}
              alt="blog"
              className="w-32 h-32 sm:w-full md:w-full md:h-40 lg:w-full rounded-2xl"
            />

            <div className="flex w-full justify-between max-sm:flex-col flex-row items-center pt-4 px-2.5 pb-2">
              <p className="max-sm:text-xs w-full sm:text-base lg:text-lg md:w-[193px] text-zinc-700 dark:text-white line-clamp-2">
                {blog.title}
              </p>
              <div className="max-sm:border-t max-sm:w-full max-sm:justify-between sm:border-r max-sm:pt-4 max-sm:border-t-gray-300 sm:border-r-gray-300 dark:border-r-white/10 flex sm:justify-between flex-row items-center md:items-end sm:px-5 md:px-3 lg:px-5 text-teal-600">
                <div className="flex sm:flex-col w-full items-end">
                  <span className="font-semibold sm:text-2xl">{blog.day}</span>
                  <span className="sm:text-sm font-normal">{blog.month}</span>
                  <span className="sm:text-sm font-normal">{blog.year}</span>
                </div>
                <a
                  href=""
                  className="max-sm:flex max-sm:visible items-center justify-center rounded-[6px] text-xs py-[2px] pt-[3px] px-[8px] sm:hidden sm:invisible text-orange-300 bg-orange-200/20"
                >
                  مطالعه
                  <IoIosArrowBack />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
