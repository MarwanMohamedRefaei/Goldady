import React from "react";
import { Link } from "react-router-dom";
import {  BsEyeFill } from "react-icons/bs";


const ProductCard = ({ product }) => {

    // destructure product
    const { images, category, title, price } = product;
    return (
        <div>
            <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
                <div className="w-full h-full flex justify-center items-center">
                    {/* image */}
                    <Link  to={`/product`} state={{ product: product }} className="w-[200px] mx-auto flex justify-center items-center cursor-pointer">
                        <img
                            className="max-h-[160px] group-hover:scale-110 transition duration-300"
                            src={images[0]}
                            alt=""
                        />
                    </Link>
                </div>
                {/* buttons */}
                <div className="absolute top-6 -right-11 group-hover:right-5 p-2 flex flex-col justify-center items-center gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <Link
                        to={`/product`} state={{ product: product }}
                        className="w-12 h-12 bg-white flex justify-center items-center text-primary drop-shadow-xl"
                    >
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            {/* category, title & price */}
            <div className=" flex flex-col justify-center items-start">
                <div className="tex-sm capitalize text-gray-500 mb-1">{category}</div>
                <Link to={`/product`} state={{ product: product }} >
                    <h2 className="font-semibold mb-1">{title}</h2>
                </Link>
                {/* <span class="text-dark_grayish_blue line-through text-xs"><del class="sr-only">$169.99</del></span> */}
                <div className="flex flex-row gap-4">
                    <h2 className="font-semibbold">$ {price}</h2>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
