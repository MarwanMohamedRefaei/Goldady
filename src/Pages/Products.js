import React, { useEffect, useState } from 'react'
import ProductCard from '../Components/ProductCard';
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../redux/actions/productActions';
import ReactPaginate from "react-paginate";

const Products = () => {
    const products = useSelector((state) => state.medsReducer.Products)
    const Categories = useSelector((state) => state.medsReducer.Categories)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [dispatch])

    const [selected, setSelected] = useState(`All`)
    
    let filteredProducts = products?.filter((item) => {
        return (
            selected === `All` ? item : item.category === selected
        );
    });

    const [FilteredData,setFilteredData]=useState([...filteredProducts.slice(0,10)])

    useEffect(()=>{
        setFilteredData([...filteredProducts.filter((item) => {
            return (
                selected === `All` ? item : item.category === selected
            )
        }).slice(0,10)])
    },[selected])

    const handlePageClick = (event) => {
        setFilteredData([...filteredProducts.slice((event.selected)*10,(event.selected+1)*10)])
    }

    return (
        <div>
            <section className="py-20">
                <div className="container mx-auto">
                    <h1 className="text-3xl font-semibold mb-10 text-center">Explore Our Products</h1>
                        <div className='flex flex-wrap justify-start items-center gap-5 pl-3 py-4 '>
                            {Categories?.length>0 && Categories?.map((item,index)=>{
                                return(
                                    <p key={index} onClick={() => { setSelected(item) }} className={`sm:text-sm md:text-md lg:text-lg p-2 rounded-xl border cursor-pointer ${selected === item ? `bg-black text-white animate-pulse` : ``} border-black border-solid hover:text-white hover:bg-black`}>{item}</p>
                                )
                            })}
                        </div>
                    <div className='grid grid-cols-12'>
                        <div className='col-span-11'>
                            <div className="grid grid-cols-1 pl-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 lg:mx-8 gap-[30px] max-w-sm mx-auto md:max-w-none md:mx-0">
                                {FilteredData?.map((product) => {
                                    return (
                                        <ProductCard product={product} key={product.id} />
                                    );
                                })}
                            </div>
                        </div>
                        <div className='col-span-1'>
                        <ReactPaginate
                                previousLabel={"\u2227"}
                                nextLabel={"\u2228"}
                                breakLabel={"..."}
                                pageCount={Math.ceil((filteredProducts?.length) / 10)}
                                marginPagesDisplayed={2}
                                pageRangeDisplayed={2}
                                onPageChange={handlePageClick}
                                containerClassName={"fixed flex flex-col gap-[8px] justify-center items-center"}
                                pageClassName={"flex justify-center items-center w-[40px] h-[40px] hover:bg-black bg-white rounded-full border-[1px] border-[#ced4da] "}
                                pageLinkClassName={"w-full h-full flex flex-row justify-center items-center text-[14px] font-semibold hover:text-white"}
                                previousClassName={" flex justify-center items-center w-[32px] h-[32px] hover:bg-black bg-white border-[1px] border-[#ced4da] rounded-md "}
                                previousLinkClassName={"w-full h-full flex flex-row justify-center items-center font-medium hover:text-white "}
                                nextClassName={" flex justify-center items-center w-[32px] h-[32px] hover:bg-black bg-white border-[1px] border-[#ced4da] rounded-md "}
                                nextLinkClassName={"w-full h-full flex flex-row justify-center items-center font-medium hover:text-white "}
                                breakClassName={"flex justify-center items-center"}
                                breakLinkClassName={"text-lg font-black text-black"}
                                activeClassName={"bg-[#000000] text-white"}
                                disabledClassName={"flex justify-center items-center w-[32px] h-[32px] text-[#ced4da]  hover:bg-white border-[1px] border-[#ced4da] rounded-md "}
                                disabledLinkClassName={"w-full h-full flex flex-row justify-center items-center font-medium hover:text-[#ced4da] text-[#ced4da] "}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Products
