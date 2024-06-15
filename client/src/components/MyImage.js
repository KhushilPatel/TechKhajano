import React, { useState } from 'react'

const MyImage = ({ imgs = [{ url: "" }] }) => {

  const [mainImage, setMainImage] = useState(imgs[0]);
  if (!imgs || !Array.isArray(imgs) || imgs.length === 0) {
    return <div>No images available</div>;
  }
  // console.log(imgs)


  return (
    <>
     
        <div className='flex items-center justify-center border-2 '>
          <div className='flex-col justify-center items-center border-2'>
            {imgs.map((curElem, index) => {
              return (
                <figure key={index}>
                  <img src={curElem.url} alt={curElem.filename} className='my-10 h-24 w-44 rounded shadow-2xl  cursor-pointer' onClick={() => setMainImage(curElem)} />
                </figure>
              )
            })}
          </div>
          <div className='m-10'>
            <img src={mainImage.url} alt={mainImage.filename} className='h-60 w-60 rounded-lg duration-700 hover:scale-110 cursor-pointer' />
          </div>
        </div>

    </>
  )
}

export default MyImage
