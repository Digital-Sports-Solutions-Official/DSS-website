/* Noah Klein */

import React, { useState } from 'react';
import products from "../../products";

import './ProductCarousel.css'

interface Product {
    name: string;
    imageUrl: string;
    description: string;
}

const ProductCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? products.length - 1 : prevIndex - 1
        );
    };

    const nextProduct = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === products.length - 1 ? 0 : prevIndex + 1
        );
    };

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
            case totalProducts - 1: // Left product (circular)
                return { transform: 'translateX(-300px) scale(0.8)', zIndex: 1, opacity: 0.9 };
            default: // Teleport the farthest products to the sides
                return { transform: 'translateX(1000px) scale(0.4)', opacity: 0 };
        }
    };

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
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className="product-image"
                        />
                        <p className="product-name">{product.name}</p>
                        <p className="product-name">{product.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductCarousel;
