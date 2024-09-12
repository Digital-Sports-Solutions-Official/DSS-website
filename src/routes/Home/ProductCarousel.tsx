/* Noah Klein */

import React, { useState } from 'react';
import Tilt, { ReactParallaxTiltProps } from "react-parallax-tilt";
import products from "../../products";

import './ProductCarousel.css'

const ProductCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToProduct = (index: number) => {
        setCurrentIndex(index);
    };


    const getProductOffset = (index: number): number => {
        const totalProducts = products.length;
        return (index - currentIndex + totalProducts) % totalProducts;
    }

    const getProductPosition = (index: number) => {
        const totalProducts = products.length;
        const offset = (index - currentIndex + totalProducts) % totalProducts;

        // Adjust translateX values based on screen size
        const screenWidth = window.innerWidth;
        const translateValue = screenWidth > 768 ? '25rem' : '15rem'; // Adjusted for smaller screens

        switch (offset) {
            case 0: // Center product
                return { transform: 'translateX(0) scale(1.15)', zIndex: 2, opacity: 1 };
            case 1: // Right product
                return { transform: `translateX(${translateValue}) scale(0.8)`, zIndex: 1, opacity: 0.9 };
            case 2: // Right product
                return { transform: `translateX(${parseFloat(translateValue) * 1.5}rem) scale(0)`, zIndex: 1, opacity: 0 };
            case totalProducts - 2: // Left out of frame (circular)
                return { transform: `translateX(-${parseFloat(translateValue) * 1.5}rem) scale(0)`, zIndex: 1, opacity: 0 };
            case totalProducts - 1: // Left product (circular)
                return { transform: `translateX(-${translateValue}) scale(0.8)`, zIndex: 1, opacity: 0.9 };
            default: // Teleport the farthest products to the sides
                return { transform: 'translateX(1000px) scale(0.4)', opacity: 0 };
        }
    };

    const getProductTiltProps = (index: number): ReactParallaxTiltProps => {
        const totalProducts = products.length;
        const offset = (index - currentIndex + totalProducts) % totalProducts;

        const spotlightTiltProps: ReactParallaxTiltProps = {
            tiltMaxAngleX: 10,
            tiltMaxAngleY: 10,
            perspective: 1400,
            transitionSpeed: 3000,
            glareMaxOpacity: 0,
        };

        const offsetTiltProps: ReactParallaxTiltProps = {
            tiltMaxAngleX: 20,
            tiltMaxAngleY: 20,
            perspective: 1400,
            transitionSpeed: 1000,
            glareEnable: true,
            glareMaxOpacity: 0.15,
            glarePosition: "all",
        };


        if (offset)
            return offsetTiltProps;
        else
            return spotlightTiltProps;
    }


    // Make autoscroll or some way to indicate to users that this thing moves


    return (
        <div className="ProductCarousel">
            <h1>Products</h1>
            <div className="carousel">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className={`product ${getProductOffset(index) === 0 ? 'center' : ''}`}
                        style={getProductPosition(index)}
                        onClick={() => goToProduct(index)}
                    >
                        <Tilt {...getProductTiltProps(index)}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                            />
                        </Tilt>

                        <p className="name">{product.name}</p>
                        <p className="description">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
