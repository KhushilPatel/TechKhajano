import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://660259139d7276a755530cf6.mockapi.io/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } = useProductContext();
  const { id } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, [id]);

  if (isSingleLoading) {
    return <div className="text-3xl flex justify-center items-center">Loading.....</div>;
  }

  const { name, company, price, description, stock, stars, reviews, image } = singleProduct;

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Images */}
          <div className="mx-3">
            <MyImage imgs={image} />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl font-bold">{name}</h2>
            <Star stars={stars} reviews={reviews} />

            <p className="text-lg font-bold">
              MRP:{" "}
              <del>
                <FormatPrice price={price + 250000} />
              </del>
            </p>
            <p className="text-xl font-bold text-blue-500">
              Deal of the Day: <FormatPrice price={price} />
            </p>
            <p>{description}</p>

            {/* Icons with Text */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
              <div className="flex flex-col items-center">
                <TbTruckDelivery className="text-3xl bg-gray-200 rounded-full p-2" />
                <p className="text-sm mt-2">Free Delivery</p>
              </div>

              <div className="flex flex-col items-center">
                <TbReplace className="text-3xl bg-gray-200 rounded-full p-2" />
                <p className="text-sm mt-2">30 Days Replacement</p>
              </div>

              <div className="flex flex-col items-center">
                <TbTruckDelivery className="text-3xl bg-gray-200 rounded-full p-2" />
                <p className="text-sm mt-2">TechKhajano Delivered</p>
              </div>

              <div className="flex flex-col items-center">
                <MdSecurity className="text-3xl bg-gray-200 rounded-full p-2" />
                <p className="text-sm mt-2">2 Year Warranty</p>
              </div>
            </div>

            {/* Additional Details */}
            <div className="grid grid-cols-2 gap-4 mt-4 text-lg">
              <p>
                Available:{" "}
                <span className="font-bold">{stock > 0 ? "In Stock" : "Not Available"}</span>
              </p>
              <p>
                ID: <span className="font-bold">{id}</span>
              </p>
              <p>
                Brand: <span className="font-bold">{company}</span>
              </p>
            </div>

            <hr className="my-4" />
            {stock > 0 && <AddToCart product={singleProduct} />}

            {/* Add to Cart Button */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
