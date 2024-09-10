/* Noah Klein */

import { useEffect, useState } from "react";
import products from "../../products";

import './ProductCarousel.css'

interface ProductCarouselProps {
    autoSlidePlay: boolean;
}

const ProductCarousel = ({ autoSlidePlay }: ProductCarouselProps) => {
    const [index, setIndex] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const autoSlideIntervalSeconds = 3;
    const autoSlideDirection = 'right';
    const slideDuration = 1;

    const firstProduct = products[0];
    const lastProduct = products[products.length - 1];


    // /* Increment currentIndex every autoSlideIntervalSeconds, reset when isTransitioning changes */
    // useEffect(() => {
    //     const timer = setInterval(() => {
    //         if (autoSlidePlay) {
    //             if (!isTransitioning) {
    //                 if (autoSlideDirection === 'right')
    //                     handleNext();
    //                 else
    //                     handlePrevious();
    //             }
    //         }
    //     }, autoSlideIntervalSeconds * 1000);


    //     return () => {
    //         clearInterval(timer);
    //     };

    // }, [autoSlidePlay, isTransitioning]);


    const handleNext = () => {
        setIsTransitioning(true);
        setIndex(prevIndex => prevIndex + 1);

        setTimeout(() => {
            setIsTransitioning(false);
            if (index === products.length) setIndex(1);
        }, slideDuration * 1000 + 50);
    };


    const handlePrevious = () => {
        setIsTransitioning(true);
        setIndex(prevIndex => prevIndex - 1);

        setTimeout(() => {
            setIsTransitioning(false);
            if (index === 1) setIndex(products.length);
        }, slideDuration * 1000 + 50);
    };


    return (
        <div className="ProductCarousel">
            <div
                className='track'
                style={{
                    transform: `translateX(${-index * 100}%)`,
                    transition: `${isTransitioning ? `transform ${slideDuration}s ease-in-out` : ''}`,
                }}
            >
                <div className="item"> <img src={lastProduct.imageUrl} /></div>
                {products.map((product, index) => (
                    <div className="item" key={index}>
                        <img src={product.imageUrl} />
                    </div>
                ))}
                <div className="item"> <img src={firstProduct.imageUrl} /></div>

            </div>
            <button className="control prev" disabled={isTransitioning} onClick={handlePrevious}>&#x276E;</button>
            <button className="control next" disabled={isTransitioning} onClick={handleNext}>&#x276F;</button>
        </div>
    );
}

export default ProductCarousel;