import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Footer } from '../../components'
import ProductCard from '../../components/ProductCard'
import { useStateContext } from '../../contexts/ContextProvider'

const index = () => {
  const { product } = useParams()
  const { products } = useStateContext()

  const { name, price, categories, short_description, long_description, sku, tags } = products.find(item => item.url === product) // output is an array of product details
  const relatedProducts = products.filter(item => item.categories.includes(categories[0] || categories[1]));

  return (
    <>
      {/* Hero Section */}
      <section>
        {/* <Navbar /> */}
        <div className='hero--products'></div>
      </section>

      <section className='dark:bg-gray-900 text-gray-900 dark:text-gray-50 w-11/12 md:w-4/5 mx-auto my-28'>
        <div className='flex gap-10'>
          <div className='w-2/3'>
            <img className='cursor-pointer' src="/baskets.jpg" style={{ imageRendering: 'optimizeQuality' }} alt="" />
          </div>
          <div className='w-2/5'>
            <div>
              <div className='product_categories'>
                <ul className='flex italic capitalize text-gray-700 gap-1'>
                  {categories.map((category, idx) => (
                    <Link to={`/product-category/${category.toLowerCase()}`} key={idx} className='hover:text-black'>
                      {idx === categories.length - 1 ? category : `${category}, `}
                    </Link>
                  ))}
                </ul>
              </div>
              <h6 className='product_title'>{name}</h6>
              <p className='product_price'>${price}.00</p>
            </div>
            <div className='product_details'>
              <p>{short_description}</p>
            </div>
            <form className="product_cart">
              <div className="product_cart--quantity">
                <input type="button" value="-" className="product_cart--minus" />
                <input type="text" step="1" min="1" max="" name="quantity" title="Qty" className="product_cart--Qty" size="4" pattern="[0-9]*" inputMode="numeric" aria-labelledby={`${product} quantity`} />
                <input type="button" value="+" className="product_cart--plus" />
              </div>
              <button type="submit" className="product_cart--add_to_cart_button">Add to cart</button>
            </form>
          </div>
        </div>

        <div className='mt-24 mb-16'>
          <div className='flex gap-8 items-center justify-center mb-4'>
            <p className='product_title text-sm tracking-wide'>Description</p>
            <p className='product_title text-sm tracking-wide'>Additional Information</p>
            <p className='product_title text-sm tracking-wide'>Reviews (0)</p>
          </div>
          <div className='product_details text-center w-2/3 mx-auto'>
            <p>{long_description}</p>
          </div>
        </div>

        <div className='flex justify-center gap-4 border-y border-gray-300 py-3 mb-16'>
          <div className='flex items-baseline gap-1 border-r border-gray-300 pr-4'>
            <h5 className='font-poppins text-sm uppercase'>SKU:</h5>
            <div className='product_details'>
              <span>{sku}</span>
            </div>
          </div>

          <div className='flex items-baseline gap-1 border-r border-gray-300 pr-4'>
            <h5 className='font-poppins text-sm uppercase'>Categories:</h5>
            <div className='product_details'>
              <ul className='flex italic capitalize text-gray-700 gap-1'>
                {categories.map((category, idx) => (
                  <Link to={`/product-category/${category.toLowerCase()}`} key={idx} className='hover:text-black'>
                    {idx === categories.length - 1 ? category : `${category}, `}
                  </Link>
                ))}
              </ul>
            </div>
          </div>

          <div className='flex items-baseline gap-1'>
            <h5 className='font-poppins text-sm uppercase'>Tags:</h5>
            <div className='product_details'>
              <ul className='flex italic capitalize text-gray-700 gap-1'>
                {tags.map((tag, idx) => (
                  <Link to={`/product-tag/${tag.toLowerCase()}`} key={idx} className='hover:text-black'>
                    {idx === tags.length - 1 ? tag : `${tag}, `}
                  </Link>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className='mt-4'>
          <h3 className='product_title text-lg my-3'>Related Products</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {/* Related Products */}

            {relatedProducts?.length === 0 ? (
              <p className='font-cormorant text-xl italic text-gray-700'>There are no products to display!</p>
            ) : (
              relatedProducts?.map(({ sku, ...details }) => (
                <ProductCard key={sku} {...details} />
              ))
            )}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default index