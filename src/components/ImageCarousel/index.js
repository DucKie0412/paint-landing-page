import React from "react";
import { Carousel } from "react-responsive-carousel";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import styles from './ImageCarousel.module.scss'
import classNames from "classnames/bind";

const cx = classNames.bind(styles)

const ImageCarousel = ({ images }) => {
    
    return (
        <div className={cx('carousel')}>
            <Carousel
                showThumbs={false}
                showStatus={false}
                infiniteLoop={true}
                autoPlay={true}
                centerMode={true}
                interval={3800}
                transitionTime={1000}>
                {images.map((image, index) => (
                    <div key={index}>
                        <img src={image} alt="carousel" />
                    </div>
                ))}
            </Carousel>
        </div>
    );
}

export default ImageCarousel;