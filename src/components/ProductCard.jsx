import React from 'react'
import { Link } from 'react-router-dom'

const ProductCard = ({ image, name, url, price, sku }) => {
    return (
        <div className='product_container flex flex-col relative cursor-pointer'>
            <img src={image} alt="" style={{ imageRendering: 'optimizeQuality' }} />
            <div className='text-center'>
                <Link to={`/product/${url}`}><h5 className='font-poppins text-lg uppercase tracking-wider px-4 mt-2 text-black'>{name}</h5></Link>
                <span className='font-cormorant text-xl italic mb-4 text-gray-600'>${price}.00</span>
            </div>

            {/* Add to cart button overlay */}
            <div className='overlay_add_to_cart_button absolute top-0 left-0 w-full h-[80%] bg-opacity-90 opacity-0 bg-white flex items-center justify-center transition-all duration-500 ease'>
                <button value={sku} className='product_cart--add_to_cart_button'>Add to cart</button>
            </div>
        </div>
    )
}

export default ProductCard