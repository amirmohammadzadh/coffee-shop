import React from "react";
import Title from "../Title";
import Product from "../Product";
import { products } from "../../data";

export default function Products() {
  return (
    <div className="products pt-8 md:pt-24 lg:pt-30 xl:pt-40 max-mb:mb-5 md:mb-12">
      <div className="container px-4  ">
        <Title />
        <div className="grid max-sm:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 max-md:gap-3.5 md:gap-5 pb-20">
          {products.map((product) => (
            <Product {...product} />
          ))}
        </div>
      </div>
    </div>
  );
}
