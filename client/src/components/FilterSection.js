import { useFilterContext } from "../context/filter_context";
import { FaCheck } from "react-icons/fa";
import FormatPrice from "../Helpers/FormatPrice";
import { Button } from "../styles/Button";

const FilterSection = () => {
  const {
    filters: { text, category, color, price, maxPrice, minPrice },
    updateFilterValue,
    all_products,
    clearFilters,
  } = useFilterContext();

  // get the unique values of each property
  const getUniqueData = (data, attr) => {
    let newVal = data.map((curElem) => curElem[attr]);

    if (attr === "colors") {
      newVal = newVal.flat();
    }

    return (newVal = ["all", ...new Set(newVal)]);
  };

  // we need to have the individual data of each in an array format
  const categoryData = getUniqueData(all_products, "category");
  const companyData = getUniqueData(all_products, "company");
  const colorsData = getUniqueData(all_products, "colors");

  return (
    <section className="py-20 flex flex-col gap-12">
      <div className="filter-search">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            name="text"
            placeholder="Search"
            value={text}
            onChange={updateFilterValue}
            className="p-2 w-4/5"
          />
        </form>
      </div>

      <div className="filter-category">
        <h3 className="font-bold">Category</h3>
        <div className="flex flex-col items-start gap-4">
          {categoryData.map((curElem, index) => (
            <button
              key={index}
              type="button"
              name="category"
              value={curElem}
              className={`capitalize cursor-pointer ${curElem === category ? 'border-b border-black text-btn-color' : ''}`}
              onClick={updateFilterValue}
            >
              {curElem}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-company">
        <h3 className="font-bold">Company</h3>
        <form>
          <select
            name="company"
            id="company"
            className="p-1.5 text-lg capitalize"
            onChange={updateFilterValue}
          >
            {companyData.map((curElem, index) => (
              <option key={index} value={curElem} name="company">
                {curElem}
              </option>
            ))}
          </select>
        </form>
      </div>

      <div className="filter-colors">
        <h3 className="font-bold">Colors</h3>
        <div className="flex justify-center gap-2">
          {colorsData.map((curColor, index) => (
            <button
              key={index}
              type="button"
              value={curColor}
              name="color"
              className={`rounded-full w-8 h-8 cursor-pointer ${curColor === "all" ? 'text-center capitalize' : ''} ${color === curColor ? 'opacity-100' : 'opacity-50'}`}
              style={curColor !== "all" ? { backgroundColor: curColor } : {}}
              onClick={updateFilterValue}
            >
              {curColor === "all" ? 'all' : color === curColor ? <FaCheck className="text-white text-xs" /> : null}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-price">
        <h3 className="font-bold">Price</h3>
        <p>
          <FormatPrice price={price} />
        </p>
        <input
          type="range"
          name="price"
          min={minPrice}
          max={maxPrice}
          value={price}
          onChange={updateFilterValue}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="filter-clear">
        <Button className="bg-red-500 text-black" onClick={clearFilters}>
          Clear Filters
        </Button>
      </div>
    </section>
  );
};

export default FilterSection;
