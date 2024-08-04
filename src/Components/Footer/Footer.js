import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlinePermPhoneMsg } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";

export default function Footer() {
  return (
    <div className=" bg-zinc-700 mt-20 max-md:mt-10">
      <div className="flex justify-between gap-y-6 py-14 max-md:px-4 md:px-24 max-xl:flex-wrap max-md:items-start">
        <div className="flex flex-col gap-y-[18px]">
          <div className="flex gap-x-5">
            <img
              className="w-[54px] text-gray-300"
              src="./images/svg/app-logo.svg"
              alt="logo"
            />
            <img
              className=" text-gray-300"
              src="./images/svg/app-logo-type.svg"
              alt="logo"
            />
          </div>
          <p className="md:w-[606px] max-md:text-base md:text-lg/10 text-gray-300">
            ما برآنیم تا با پیشرو بودن در فرآیند تولید، نوع و کیفیت محصول، خدمات
            و توزیع، الگویی برای تولیدکنندگان ایرانی باشیم و به مرجع فرهنگ قهوه
            در ایران تبدیل شویم. می‌پنداریم که نظر مردم ایران و منطقه باید نسبت
            به کالای ایرانی بهبود یابد و در این راستا با اشتیاق می‌کوشیم.
          </p>
        </div>
        <div className="flex flex-col gap-y-7">
          <h3 className="text-2xl text-white">دسترسی سریع</h3>
          <div className="flex gap-x-12">
            <div className="flex flex-col gap-y-5">
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                حریم خصوصی
              </p>
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                عودت کالا
              </p>
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                شرایط استفاده
              </p>
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                ثبت سفارش
              </p>
            </div>
            <div className="flex flex-col gap-y-5">
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                پرسش های متداول
              </p>
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                فرصت های شغلی
              </p>
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                ضمانت نامه ها
              </p>
              <p className="text-gray-300 text-sm tracking-thigtest cursor-pointer w-max hover:text-orange-300">
                ارتباط با ما
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-7">
          <h3 className="text-2xl text-white">در تماس باشیم</h3>
          <div className="flex flex-col items-start text-gray-300 gap-y-5">
            <span className=" flex max-md:text-sm items-center gap-x-3 maxmd:w-3/4">
              <MdOutlineLocationOn className="max-md:text-3xl" />
              بلوار میرداماد، خیابان البرز، کوچه قبادیان شرقی، پلاک ۳۳
            </span>
            <div className="w-full flex max-md:flex-col justify-between md:items-center">
              <span className="cursor-pointer max-md:text-sm flex items-center gap-x-3 hover:text-orange-300">
                <MdOutlineEmail className="max-md:text-3xl" />
                info@Coffee.com
              </span>
              <span className="cursor-pointer max-md:text-sm flex items-center gap-x-3 hover:text-orange-300">
                <MdOutlinePermPhoneMsg className="max-md:text-3xl" />
                0902 123 6628 {"/"} 021 - 6789012
              </span>
            </div>
            <div className="w-full flex  max-md:gap-y-2 items-start justify-between">
              <a
                href="#"
                className="py-1 px-6 flex items-center rounded-xl border text-orange-200 border-orange-200"
              >
                <AiOutlineInstagram />
                golden_coffee
              </a>
              <a
                href="#"
                className="py-1 px-6 flex items-center text-zinc-700 bg-gradient-to-l from-orange-300 to-orange-200 rounded-xl"
              >
                <TbBrandTelegram />
                golden_coffee
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className=""></div>
    </div>
  );
}
