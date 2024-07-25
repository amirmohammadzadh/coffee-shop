import { useState, useEffect } from "react";
import { CiShoppingBasket, CiLogin, CiShoppingCart } from "react-icons/ci";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { IoIosArrowBack } from "react-icons/io";
import { menus, userBasket } from "../../data";

export default function Header() {
  const [theme, setTheme] = useState(() => {
    return JSON.parse(localStorage.getItem("theme")) || "dark";
  });

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const themeHandler = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const totalPrice = userBasket.reduce((total, product) => {
    return total + (product.price - (product.discount || 0));
  }, 0);

  return (
    <header className="fixed top-9 h-14 right-0 left-0 bg-black/50 w-[90%] mx-auto px-10 py-5 h-24 rounded-3xl flex items-center backdrop-blur-[6px]">
      <div className="flex w-full justify-between items-center">
        <nav className="flex gap-x-9 items-center">
          <div>
            <img
              className="w-[90%]"
              src="./images/app-logo.png"
              alt="Golden Coffee"
            />
          </div>
          <ul className="flex gap-x-8 h-full text-gray-300 items-center">
            {menus.map((menu) => (
              <li
                key={menu.id}
                className={`${
                  menu.status ? "text-orange-200 font-medium" : "relative group"
                }`}
              >
                <a
                  href="#"
                  className="tracking-thigtest group-hover:text-orange-300 transition-colors"
                >
                  {menu.title}
                </a>
                {menu.subMenu.length > 0 && (
                  <div className="absolute delay-75 p-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible space-y-4 tracking-normal shadow-normal w-52 bg-white text-zinc-700 dark:text-white text-base dark:bg-zinc-700 rounded-2xl border-t-[3px] transition-all border-t-orange-300 top-[150%] flex flex-col items-start justify-center">
                    {menu.subMenu.map((sub) => (
                      <a
                        key={sub.id}
                        href="#"
                        className="inline-block hover:text-orange-300 transition-colors"
                      >
                        {sub.title}
                      </a>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex text-orange-200 gap-x-10">
          <div className="flex gap-x-5 items-center">
            <div className="relative group">
              <CiShoppingBasket className="text-3xl cursor-pointer relative" />
              <span className="absolute flex items-center justify-center rounded-full w-5 pt-[3px] h-5 -top-3 -right-3 bg-orange-300 text-black">
                {userBasket.length}
              </span>
              <div className="absolute delay-75 top-[130%] opacity-0 invisible group-hover:opacity-100 group-hover:visible bg-white dark:bg-zinc-700 border-t-[3px] border-t-orange-300 shadow-normal rounded-2xl transition-all w-[400px] p-5 left-0">
                <div className="p-y-[60px] p-x-[72px] flex flex-col justify-evenly space-y-5 items-center min-h-80">
                  {userBasket.length === 0 ? (
                    <>
                      <div className="flex flex-col space-y-3 items-center">
                        <CiShoppingCart className="text-gray-400 size-14" />
                        <p className="text-zinc-700">
                          هنوز محصولی به سبد خرید اضافه نشده
                        </p>
                      </div>
                      <a
                        href="#"
                        className="flex justify-center items-center w-64 h-14 text-white bg-teal-600 p-y-[14px] p-x-[45px] rounded-xl"
                      >
                        مشاهده صفحه فروشگاه
                      </a>
                    </>
                  ) : (
                    <>
                      <div className="flex items-center justify-between text-xs w-full tracking-thigtest">
                        <span className="text-gray-300">1 مورد</span>
                        <a
                          href="#"
                          className="flex items-start text-orange-300"
                        >
                          مشاهده سبد خرید
                          <IoIosArrowBack className="text-xs" />
                        </a>
                      </div>
                      {userBasket.map((product) => (
                        <div
                          key={product.id}
                          className="border-b-[1px] border-b-gray-300 dark:border-b-white/10 flex items-center space-x-[10px] pb-6"
                        >
                          <img
                            src={`${product.img}`}
                            alt="product"
                            className="size-32"
                          />
                          <div className="text-zinc-700 h-full dark:text-white space-y-6 flex flex-col justify-between">
                            <p className="font-semibold line-clamp-2">
                              {product.title}
                            </p>
                            <div className="flex flex-col">
                              {product.discount && (
                                <span className="text-teal-600 text-xs tracking-thigtest">
                                  {product.discount.toLocaleString()} تومان
                                  تخفیف
                                </span>
                              )}
                              <span className="text-xl dark:text-white font-semibold">
                                {(product.discount &&
                                  (
                                    product.price - product.discount
                                  ).toLocaleString()) ||
                                  product.price.toLocaleString()}{" "}
                                <span className="text-sm">تومان</span>
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                      <div className="flex justify-between w-full items-center">
                        <div>
                          <span className="text-gray-300 text-xs tracking-thigtest">
                            مبلغ قابل پرداخت
                          </span>
                          <p className="text-zinc-700 dark:text-white text-xl">
                            {totalPrice.toLocaleString()}
                            <span className="text-sm">تومان</span>
                          </p>
                        </div>
                        <a
                          href="#"
                          className="bg-teal-600 py-3.5 px-7 rounded-xl text-white transition-all dark:bg-emerald-500 dark:hover:bg-emerald-600 hover:bg-emerald-600 tracking-thigtest"
                        >
                          ثبت سفارش
                        </a>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
            {theme === "dark" ? (
              <IoSunnyOutline
                onClick={themeHandler}
                className="text-2xl cursor-pointer"
              />
            ) : (
              <IoMoonOutline
                onClick={themeHandler}
                className="text-2xl cursor-pointer"
              />
            )}
          </div>
          <span className="block w-px h-14 bg-white/20"></span>
          <a href="#" className="flex items-center gap-x-2.5">
            <CiLogin className="text-3xl" />
            <span className="tracking-thigtest">ورود | ثبت نام</span>
          </a>
        </div>
      </div>
    </header>
  );
}
