import React, { useState } from "react";

const MyImage = ({ imgs = [{ url: "" }] }) => {
  const [mainImage, setMainImage] = useState(imgs[0]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-1 md:flex md:flex-col md:gap-4">
      {/* Grid of images */}
      <div className="grid grid-cols-4 gap-4">
        {imgs.map((curElm, index) => (
          <figure key={index}>
            <img
              src={curElm.url}
              alt={curElm.filename}
              className="w-full h-full object-cover cursor-pointer rounded shadow-md"
              onClick={() => setMainImage(curElm)}
            />
          </figure>
        ))}
      </div>

      {/* Main image */}
      <div className="flex justify-center items-center">
        <img
          src={mainImage.url}
          alt={mainImage.filename}
          className="max-w-full h-auto object-contain rounded shadow-md"
        />
      </div>
    </div>
  );
};

export default MyImage;
