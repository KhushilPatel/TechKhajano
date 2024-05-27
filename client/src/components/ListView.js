import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <section className="py-36">
      <div className="container mx-auto grid gap-8">
        {products.map((curElem) => {
          const { id, name, image, price, description } = curElem;
          return (
            <div className="border border-gray-300 rounded-lg overflow-hidden grid grid-cols-1 sm:grid-cols-2">
              <figure className="relative group">
                <img
                  src={image[0].url}
                  alt={name}
                  className="w-full h-80 object-cover transform transition-transform duration-200 group-hover:scale-110"
                />
                <figcaption className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                  <NavLink
                    to={`/singleproduct/${id}`}
                    className="text-white text-xl"
                  >
                    Read More
                  </NavLink>
                </figcaption>
              </figure>
              <div className="p-6">
                <h3 className="text-gray-800 text-2xl font-light mb-8">
                  {name}
                </h3>
                <p className="text-gray-600 mb-8">
                  {description.slice(0, 90)}...
                </p>
                <NavLink
                  to={`/singleproduct/${id}`}
                  className="inline-block bg-transparent border border-indigo-500 text-indigo-500 py-3 px-6 rounded-md hover:bg-indigo-500 hover:text-white transition"
                >
                  Read More
                </NavLink>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ListView;
