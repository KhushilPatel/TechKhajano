import { useProductContext } from "../context/productcontex";
import Product from "./Product";

const FeatureProduct = () => {
  const { isLoading, featureProducts } = useProductContext();

  if (isLoading) {
    return <div> ......Loading </div>;
  }

  return (
    <section className="py-36 bg-amber-50">
      <div className="container mx-auto">
        <div className="text-xl font-semibold text-gray-700 mb-4">Check Now!</div>
        <div className="text-3xl font-bold text-gray-900 mb-12">Our Feature Services</div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {featureProducts.map((curElem) => {
            return <Product key={curElem.id} {...curElem} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default FeatureProduct;
