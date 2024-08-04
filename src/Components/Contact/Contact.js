import React from "react";
import { MdPhoneEnabled } from "react-icons/md";

export default function Contact() {
  return (
    <div className="container max-md:my-10 md:my-20 flex max-md:flex-col items-center justify-center p-2.5 gap-x-5">
      <img
        src="./images/contact.png"
        className="w-[296px] h-[305px]"
        alt="contact img"
      />
      <div className="flex flex-col lg:gap-y-0 xl:gap-y-7 max-md:gap-y-5">
        <div className="flex md:justify-between items-end md:mb-12 gap-y-6 w-max">
          <div className="flex flex-col max-md:gap-x-[2px] md:gap-y-1.5 ">
            <h3 className="font-MorabbaMedium text-zinc-700 dark:text-white max-md:text-2xl md:text-5xl">
              یکی از بهترین قهوه ها !
            </h3>
            <h4 className="font-MorabbaLight text-zinc-700 dark:text-white max-md:text-lg md:text-3xl">
              کیفیت قهوه را از ما بخواهید ...
            </h4>
          </div>
        </div>
        <div className="flex flex-col gap-y-6">
          <p className="max-md:text-lg md:text-2xl text-zinc-700 lg:w-2/3 xl:w-[994px] dark:text-white">
            فضای گرم و دنج ما را احساس کنید، جایی که همه می توانند قهوه معطری
            پیدا کنند و دسرهای خوشمزه ما را که کاملاً با قهوه داغ همراه شده است،
            امتحان کنند. فضای داخلی شیک و کارکنان خوش برخورد ما روز شما را می
            سازد!
          </p>
          <a
            href="#"
            className="flex items-center max-md:text-sm w-max pt-[15px] pb-[16px] px-6 text-orange-300 border border-orange-300 rounded-[100px]"
          >
            <MdPhoneEnabled className="text-lg" />
            ثبت سفارش تلفنی
          </a>
        </div>
      </div>
    </div>
  );
}
