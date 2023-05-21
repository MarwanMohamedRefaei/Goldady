import React from "react";
import { useLocation } from "react-router-dom";
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const ProductDetails = () => {
    // get the product id from url
    let location = useLocation()
    console.log(`location`, location)


    //get the single product based on id

    const product = location.state.product;

    // if product is not found
    if (!product) {
        return (
            <section className="h-screen flex justify-center items-center">
                Loading...
            </section>
        );
    }

    // destructure product
    const { title, price, description, images } = product;
    return (
        <section className="pt-[450px] md:pt-32 pb-[400px] md:pb-12 lg:py-32 h-screen flex items-center">
            <div className="container mx-auto">
                {/* image and text wrapper */}
                <div className="flex flex-col  items-center">
                    {/* image */}
                    <div className="flex w-[300px] flex-1 justify-center items-center mb-8 lg:mb-0">
                        <Carousel showThumbs={false}  showIndicators={true} showArrows={true} interval={1000}   swipeable={true} showStatus={false} infiniteLoop={true} autoPlay  >
                            {images.map((item,index) => {
                                return (
                                    <img key={index} className="max-w-[200px] lg:max-w-xs" src={item} alt="" />
                                )
                            })}
                        </Carousel>
                    </div>
                    {/* text */}
                    <div className="flex-1 text-center lg:text-left">
                        <h1 className="text-[26px] font-medium mb-2 max-w-[450px] mx-auto lg:mx-0">{title}</h1>
                        <div className="text-2xl text-black font-medium mb-6">$ {price}</div>
                        <p className="mb-8">{description}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
