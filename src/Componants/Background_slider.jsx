import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";

function Background_slider() {
  const [imageNum, setImageNum] = useState(1);
  const slideImages = [
    {
      url: '../public/Images/constructions.png',

    },
    {
      url: '../public/Images/rectangle71.jfif',

    },
    {
      url: '../public/Images/Structural_consultancy.jfif',

    },
  ];

  const minimgslider = [
    {
      url: '../public/Images/image1.jfif'
    },
    {
      url: '../public/Images/image2.jfif'
    },
    {
      url: '../public/Images/image3.jfif'
    }
  ] 

  return (
    <>
      <div className="slider">
        <div className="sliedimg w-full h-full md:block hidden">
          <SimpleImageSlider
            width={1583}
            height={700}
            images={slideImages}
            // showBullets={true}
            // showNavs={true}
            autoPlay={true}
            onStartSlide={(index, length) => {
              setImageNum(index)
            }}
            autoPlayDelay={3}
          />
        </div>
        <div className="minslidedimg w-full h-full block md:hidden">
        <SimpleImageSlider
            width={350}
            height={648}
            images={minimgslider}
            autoPlay={true}
            onStartSlide={(index, length) => {
              setImageNum(index)
            }}
            autoPlayDelay={3}
          />
        </div>
      </div>
    </>
  )
}

export default Background_slider