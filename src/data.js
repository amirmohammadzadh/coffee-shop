let menus = [
  { id: 1, title: "صفحه اصلی", subMenu: [], status: true },
  {
    id: 2,
    title: "فروشگاه",
    subMenu: [
      { id: 1, title: "قهوه ویژه" },
      { id: 2, title: "ویژه در سطح جهانی" },
      { id: 3, title: "قهوه درجه یک" },
      { id: 4, title: "ترکیبات تجاری" },
      { id: 5, title: "کپسول قهوه" },
      { id: 6, title: "قهوه زینو برزیلی" },
    ],
  },
  {
    id: 3,
    title: "دیکشنری",
    subMenu: [
      {
        id: 1,
        title: "تعاریف",
      },
      {
        id: 2,
        title: "مرادف‌ها",
      },
      {
        id: 3,
        title: "مضادها",
      },
      {
        id: 4,
        title: "مثال‌های کاربردی",
      },
    ],
  },
  {
    id: 4,
    title: "بلاگ",
    subMenu: [
      {
        id: 1,
        title: "آخرین نوشته‌ها",
      },
      {
        id: 2,
        title: "پربازدیدترین نوشته‌ها",
      },
      {
        id: 3,
        title: "نوشته‌های برگزیده",
      },
      {
        id: 4,
        title: "نوشته‌های پیشنهادی",
      },
      {
        id: 5,
        title: "نقد و بررسی‌ها",
      },
      {
        id: 6,
        title: "آرشیو نوشته‌ها",
      },
    ],
  },
  {
    id: 5,
    title: "درباره ما",
    subMenu: [
      {
        id: 1,
        title: "تاریخچه",
      },
      {
        id: 2,
        title: "تیم ما",
      },
    ],
  },
  { id: 6, title: "تماس با ما", subMenu: [] },
];

const products = [
  {
    id: 1,
    name: "Product 1",
    count: 50,
    price: 100000,
    discount: 10000,
    popularity: 4,
    img: "./images/products/p1.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 2,
    name: "Product 2",
    count: 30,
    price: 200000,
    popularity: 3000,
    img: "./images/products/p2.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 3,
    name: "Product 3",
    count: 20,
    price: 150000,
    discount: 15000,
    popularity: 5,
    img: "./images/products/p3.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 4,
    name: "Product 4",
    count: 40,
    price: 80000,
    popularity: 2000,
    img: "./images/products/p4.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 5,
    name: "Product 5",
    count: 60,
    price: 120000,
    discount: 5,
    popularity: 4000,
    img: "./images/products/p5.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 6,
    name: "Product 6",
    count: 10,
    price: 250000,
    popularity: 3000,
    img: "./images/products/p6.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 7,
    name: "Product 7",
    count: 70,
    price: 90000,
    discount: 20,
    popularity: 5000,
    img: "./images/products/p7.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 8,
    name: "Product 8",
    count: 25,
    price: 180000,
    popularity: 2000,
    img: "./images/products/p8.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
];

let userBasket = [
  {
    id: 1,
    name: "Product 1",
    count: 50,
    price: 100000,
    discount: 10000,
    popularity: 4,
    img: "./images/products/p1.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
  {
    id: 2,
    name: "Product 2",
    count: 30,
    price: 200000,
    popularity: 3000,
    img: "./images/products/p2.png",
    title: "قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی",
  },
];

export { menus, products, userBasket };
