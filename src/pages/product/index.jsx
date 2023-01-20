import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Footer } from '../../components'

const index = () => {
  const { product } = useParams()
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
            <img src="/baskets.jpg" style={{ imageRendering: 'optimizeQuality' }} alt="" />
          </div>
          <div className='w-2/5'>
            <div>
              <p className='product_categories'>
                <span><Link>Decor</Link></span>, <span><Link>Lamps</Link></span>
              </p>
              <h6 className='product_title'>{product}</h6>
              <p className='product_price'>$739.00</p>
            </div>
            <div className='product_details'>
              <p>Nulla pharetra diam sit amet. Lorem donec massa sapien faucibus et molestie ac feugiat sed. Nunc mattis enim ut tellus. Maecenas accumsan lacus vel facilisis volutpat est velit egestas. Nisl nunc mi ipsum faucibus vitae aliquet.</p>
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
            <p>
              Non arcu risus quis varius. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Amet dictum sit amet justo donec enim diam. Massa tempor nec feugiat nisl pretium fusce id velit ut. Nulla pharetra diam sit amet nisl suscipit. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.
            </p>
          </div>
        </div>

        <div className='flex justify-center gap-4 border-y border-gray-300 py-3 mb-16'>
          <div className='flex items-baseline gap-1 border-r border-gray-300 pr-4'>
            <h5 className='font-poppins text-sm uppercase'>SKU:</h5>
            <div className='product_details'>
              <span>006</span>
            </div>
          </div>

          <div className='flex items-baseline gap-1 border-r border-gray-300 pr-4'>
            <h5 className='font-poppins text-sm uppercase'>Categories:</h5>
            <div className='product_details'>
              <span>Decor</span>, <span>Lamps</span>
            </div>
          </div>

          <div className='flex items-baseline gap-1'>
            <h5 className='font-poppins text-sm uppercase'>Tags:</h5>
            <div className='product_details'>
              <span>Chairs</span>, <span>Decoration</span>, <span>Furniture</span>, <span>Gadren Furniture</span>, <span>Lamps</span>, <span>Shelfs</span>, <span>Tables</span>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-4'>
          <h3 className='product_title text-lg my-3'>Related Products</h3>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <div className='product_container flex flex-col relative cursor-pointer'>
              <img src="/lamps.jpg" alt="" style={{ imageRendering: 'optimizeQuality' }} />
              <div className='text-center'>
                <h5 className='font-poppins text-lg uppercase tracking-wider px-4 mt-2 text-black'>Chandelier</h5>
                <span className='font-cormorant text-xl italic mb-4 text-gray-600'>$169.00</span>
              </div>
              {/* Add to cart button overlay */}
              <div className='overlay_add_to_cart_button absolute top-0 left-0 w-full h-[80%] bg-opacity-90 opacity-0 bg-white flex items-center justify-center transition-all duration-500 ease'>
                <button className='product_cart--add_to_cart_button'>Add to cart</button>
              </div>
            </div>

            <div className='flex flex-col'>
              <img src="/tables.jpg" alt="" style={{ imageRendering: 'optimizeQuality' }} />
              <div className='text-center'>
                <h5 className='font-poppins text-lg uppercase tracking-wider px-4 mt-2 text-black'>Chandelier</h5>
                <span className='font-cormorant text-xl italic mb-4 text-gray-600'>$169.00</span>
              </div>
            </div>

            <div className='flex flex-col'>
              <img src="/baskets.jpg" alt="" style={{ imageRendering: 'optimizeQuality' }} />
              <div className='text-center'>
                <h5 className='font-poppins text-lg uppercase tracking-wider px-4 mt-2 text-black'>Chandelier</h5>
                <span className='font-cormorant text-xl italic mb-4 text-gray-600'>$169.00</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}

export default index