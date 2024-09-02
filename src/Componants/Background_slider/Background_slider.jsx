import { useState, useRef, useEffect } from "react";
import img1 from "/Images/constructions.png";
import img2 from "/Images/rectangle71.png";
import img3 from "/Images/Structural_consultancy.jfif";
import "./Background.css";
const Background_slider = () => {
  const images = [img1, img2, img3];
  const [currentSlide, setCurrentSlide] = useState(0);
  // useRef does not cause a re-render
  let sliderInterval = useRef();
  let switchImages = () => {
    if (currentSlide < images.length - 1) {
      setCurrentSlide(currentSlide + 1);
    } else {
      setCurrentSlide(0);
    }
  };
  useEffect(() => {
    sliderInterval = setInterval(() => {
      switchImages();
    }, 5000);
    return () => {
      clearInterval(sliderInterval);
    };
  });
  return (
    <div className="imgWrapper">
      {images.map((img, index) => {
        return (
          <img
            src={img}
            className={
              index === currentSlide ? "imageActive homeImage" : "image"
            }
          />
        );
      })}
    </div>
  );
};

export default Background_slider;