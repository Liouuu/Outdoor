import React, { useState } from 'react'; 
import {SliderData} from '../openData/basic_info_add_img.js';
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from 'react-icons/fa';
import Styles from './carousel.module.css';


const ImageSlider = ({ slides }) => {
  const [current, setCurrent] = useState(0);  //useState從0開始
  const length = slides.length;


  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1); //縮寫
  }; 

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className={Styles.slider}>
      <FaArrowAltCircleLeft className={Styles.leftarrow} onClick={prevSlide} />
      <FaArrowAltCircleRight className={Styles.rightarrow} onClick={nextSlide} />
      {SliderData.map((slide, index) => {
        return(
        <div
            className={index === current ? 'slide active' : 'slide'}
            key={index}>
            {index === current && (
              <img src={slide.images[0]} alt='mountain image' className={Styles.image} />
          )}
        </div>
        );
      })}
    </div>
  );
};

export default ImageSlider;