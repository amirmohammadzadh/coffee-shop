import React from "react";
import { IoIosArrowDown } from "react-icons/io";

export default function Main() {
  return (
    <main className="dark:bg-zinc-700">
      <section className="home dark:bg-zinc-800 relative max-xs:h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto max-md:bg-home-mobail md:bg-home-desctop bg-no-repeat bg-cover bg-center">
        <div className="container relative overflow-y-hidden h-full md:min-h-screen flex justify-end items-center ">
          <div className="text-white lg:ml-28">
            <h2 className="font-MorabbaBold shadow-normal max-md:text-2xl md:text-5xl max-md:mb-0.5 md:mb-2">
              قهوه عربیکا تانزانیا
            </h2>
            <span className="font-MorabbaLight shadow-normal max-md:text-xl md:text-4xl">
              یک فنجان بالانس !
            </span>
            <span className="block w-[100px] max-md:h-px md:h-0.5 bg-orange-300 max-md:my-3 md:my-8"></span>
            <p className="font-Dana max-md:w-[201px] md:max-w-[400px] shadow-normal max-md:text-xs md:text-xl">
              قطعا نام آشنای عربیکا را شنیده اید، عربیکا یکی از گونه های قهوه
              است که در نواحی مختلف کمربند قهوه کشت میشود.
            </p>
          </div>
          {/* Circle */}
          <div className="circle circle--lg circle--main">
            <div className="circle circle--md">
              <div className="circle circle--sm"></div>
            </div>
          </div>
        </div>
        <svg
          className="absolute dark:text-zinc-800 w-[100px] h-[22px] bottom-0 right-0 left-0 max-md:hidden md:flex mx-auto text-gray-100 dark:text-zinc-700"
          viewBox="0 0 100 22"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M50 0C69 0 81 22 100 22L0 22C18.75 22 31 0 50 0Z" />
        </svg>

        {/* Arrow Circle */}
        <div className="max-md:hidden md:flex cursor-pointer items-center justify-center absolute bottom-0 right-0 left-0 translate-y-2/4 mx-auto w-[30px] h-[30px] border-2 border-orange-300 rounded-full ">
          <IoIosArrowDown className="w-4 h-4 text-zinc-700 dark:text-white" />
        </div>
      </section>
    </main>
  );
}
