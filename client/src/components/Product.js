import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = ({ id, name, image, price, category }) => {
  return (
    <NavLink to={`/singleproduct/${id}`} className="block">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
        <figure className="relative overflow-hidden">
          <img
            src={image[0].url}
            alt={name}
            className="w-full h-52 object-cover transition-transform duration-200 transform hover:scale-125"
          />
          <figcaption className="absolute top-4 left-4 bg-gray-900 bg-opacity-75 text-white text-xs px-2 py-1 rounded">
            {category}
          </figcaption>
        </figure>

        <div className="p-4">
          <div className="flex justify-between items-center">
            <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
            <p className="text-blue-600 font-medium">
              <FormatPrice price={price} />
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
