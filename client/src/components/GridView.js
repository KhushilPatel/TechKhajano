import React from "react";
import Product from "./Product";

const GridView = ({ products }) => {
  return (
    <section className="py-36">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {products.map((curElem) => {
          return <Product key={curElem.id} {...curElem} />;
        })}
      </div>
    </section>
  );
};

export default GridView;
