import FilterSection from "./components/FilterSection";
import ProductList from "./components/ProductList";
import Sort from "./components/Sort";

const Products = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto grid lg:grid-cols-[0.2fr_1fr] gap-8">
        <div>
          <FilterSection />
        </div>

        <section className="flex flex-col gap-8">
          <div>
            <Sort />
          </div>
          <div>
            <ProductList />
          </div>
        </section>
      </div>
    </section>
  );
};

export default Products;
