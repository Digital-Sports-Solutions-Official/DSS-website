import React, { useState } from 'react';
import products from "../../products";

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
            <h1 className="title">Products</h1>
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
                    </div>
                ))}

                <button className="prev-btn" onClick={prevProduct}>
                    Prev
                </button>
                <button className="next-btn" onClick={nextProduct}>
                    Next
                </button>
            </div>

            <div className="product-description">
                <h2 className="product-title">{products[currentIndex].name}</h2>
                <p className="product-blurb">{products[currentIndex].description}</p>
            </div>

            <style>{`
        .carousel-container {
          padding: 20px;
          background-color: #f5f5f5;
          border-radius: 15px;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
          max-width: 1200px;
          margin: auto;
          text-align: center;
        }

        .title {
          font-size: 2.5rem;
          margin-bottom: 40px;
          color: #333;
          letter-spacing: 1px;
        }

        .carousel {
          position: relative;
          height: 350px;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }

        .product {
          position: absolute;
          transition: transform 0.8s ease-in-out, opacity 0.8s ease-in-out;
          cursor: pointer;
        }

        .product-image {
          width: 250px;
          height: 250px;
          object-fit: cover;
          border-radius: 15px;
          transition: transform 0.3s ease;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }

        .product-name {
          margin-top: 10px;
          font-size: 1.2rem;
          color: #555;
        }

        .prev-btn,
        .next-btn {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          background-color: #333;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
          font-size: 1rem;
          z-index: 100;
        }

        .prev-btn {
          left: 10px;
        }

        .next-btn {
          right: 10px;
        }

        .prev-btn:hover,
        .next-btn:hover {
          background-color: #555;
        }

        .product-description {
          transition: opacity 0.5s ease;
          opacity: 1;
        }

        .product-title {
          font-size: 2rem;
          color: #333;
        }

        .product-blurb {
          font-size: 1rem;
          color: #666;
          max-width: 600px;
          margin: 0 auto;
          line-height: 1.6;
        }

        .product-description {
          margin-top: 20px;
          padding: 20px;
          background-color: white;
          border-radius: 10px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
        }

        .product-description {
          animation: fadeIn 0.5s ease-in-out;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
        </div>
    );
};

export default ProductCarousel;
