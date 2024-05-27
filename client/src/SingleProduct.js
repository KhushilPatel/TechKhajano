import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProductContext } from "./context/productcontex";
import PageNavigation from "./components/PageNavigation";
import MyImage from "./components/MyImage";
import FormatPrice from "./Helpers/FormatPrice";
import { MdSecurity } from "react-icons/md";
import { TbTruckDelivery, TbReplace } from "react-icons/tb";
import Star from "./components/Star";
import AddToCart from "./components/AddToCart";

const API = "https://660259139d7276a755530cf6.mockapi.io/products";

const SingleProduct = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();

  const { id } = useParams();

  const {
    id: alias,
    name,
    company,
    price,
    description,
    stock,
    stars,
    reviews,
    image,
  } = singleProduct;

  useEffect(() => {
    getSingleProduct(`${API}/${id}`);
  }, []);

  if (isSingleLoading) {
    return <div className="text-3xl flex justify-center items-center">Loading.....</div>;
  }

  return (
    <section className="py-36">
      <PageNavigation title={name} />
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* product Images  */}
          <div className="flex items-center">
            <MyImage imgs={image} />
          </div>

          {/* product data */}
          <div className="flex flex-col items-start justify-center gap-8">
            <h2 className="text-4xl font-bold">{name}</h2>
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
            <div className="flex justify-between items-center w-full border-b pb-4">
              <div className="text-center">
                <TbTruckDelivery className="text-4xl bg-gray-200 rounded-full p-2 inline-block" />
                <p className="text-sm mt-2">Free Delivery</p>
              </div>

              <div className="text-center">
                <TbReplace className="text-4xl bg-gray-200 rounded-full p-2 inline-block" />
                <p className="text-sm mt-2">30 Days Replacement</p>
              </div>

              <div className="text-center">
                <TbTruckDelivery className="text-4xl bg-gray-200 rounded-full p-2 inline-block" />
                <p className="text-sm mt-2">TechKhajano Delivered</p>
              </div>

              <div className="text-center">
                <MdSecurity className="text-4xl bg-gray-200 rounded-full p-2 inline-block" />
                <p className="text-sm mt-2">2 Year Warranty</p>
              </div>
            </div>

            <div className="flex flex-col gap-4 text-lg">
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
            <hr className="w-full border-t border-black my-4" />
            {stock > 0 && <AddToCart product={singleProduct} />}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
