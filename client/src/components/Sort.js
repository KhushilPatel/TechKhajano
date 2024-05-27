import React from "react";
import { BsFillGridFill, BsList } from "react-icons/bs";
import { useFilterContext } from "../context/filter_context";

const Sort = () => {
  const { filter_products, grid_view, setGridView, setListView, sorting } =
    useFilterContext();

  return (
    <section className="flex justify-between mt-20">
      {/* 1st column  */}
      <div className="flex gap-8">
        <button
          className={`p-2.5 flex justify-center items-center cursor-pointer ${grid_view ? "bg-black text-white" : ""}`}
          onClick={setGridView}
        >
          <BsFillGridFill className="text-lg" />
        </button>
        <button
          className={`p-2.5 flex justify-center items-center cursor-pointer ${!grid_view ? "bg-black text-white" : ""}`}
          onClick={setListView}
        >
          <BsList className="text-lg" />
        </button>
      </div>
      {/* 2nd column  */}
      <div className="flex items-center">
        <p>{`${filter_products.length} Product Available`}</p>
      </div>
      {/* 3rd column  */}
      <div className="flex items-center">
        <form>
          <label htmlFor="sort" className="sr-only">Sort by</label>
          <select
            name="sort"
            id="sort"
            className="p-2 cursor-pointer"
            onClick={sorting}
          >
            <option value="lowest">Price(lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </section>
  );
};

export default Sort;
