/* Noah Klein */

import React, { useState } from 'react';
import Tilt, { ReactParallaxTiltProps } from "react-parallax-tilt";
import products from "../../products";

import './ProductCarousel.css'

interface Product {
    name: string;
    imageUrl: string;
    description: string;
}

const ProductCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToProduct = (index: number) => {
        setCurrentIndex(index);
    };

    const getProductPosition = (index: number) => {
        const totalProducts = products.length;
        const offset = (index - currentIndex + totalProducts) % totalProducts;

        switch (offset) {
            case 0: // Center product
                return { transform: 'translateX(0) scale(1.15)', zIndex: 2, opacity: 1 };
            case 1: // Right product
                return { transform: 'translateX(300px) scale(0.8)', zIndex: 1, opacity: 0.9 };
            case 2: // Right product
                return { transform: 'translateX(600px) scale(0)', zIndex: 1, opacity: 0 };
            case totalProducts - 2: // Left out of frame (circular)
                return { transform: 'translateX(-600px) scale(0)', zIndex: 1, opacity: 0 };
            case totalProducts - 1: // Left product (circular)
                return { transform: 'translateX(-300px) scale(0.8)', zIndex: 1, opacity: 0.9 };
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


    return (
        <div className="carousel-container">
            <h1>Products</h1>
            <div className="carousel">
                {products.map((product, index) => (
                    <div
                        key={index}
                        className="product"
                        style={getProductPosition(index)}
                        onClick={() => goToProduct(index)}
                    >
                        <Tilt {...getProductTiltProps(index)}>
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="product-image"
                            />
                        </Tilt>

                        <p className="product-name">{product.name}</p>
                        <p className="description">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
