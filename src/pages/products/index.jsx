import { Link } from 'react-router-dom'
import { Navbar, Footer } from '../../components'

const categories = [
  { name: 'Baskets', count: 4 },
  { name: 'Chairs', count: 4 },
  { name: 'Decor', count: 4 },
  { name: 'Lamps', count: 4 },
  { name: 'Shelfs', count: 4 },
  { name: 'Tables', count: 4 },
  { name: 'Uncategorized', count: 0 }
]

const recent_products = [
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-1-600x366.jpg', product_name: 'Floor Basket', price: 29 },
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-2-600x366.jpg', product_name: 'Wall Lamp', price: 49 },
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-3-600x366.jpg', product_name: 'Floor Decor', price: 179 }
]

const tags = [ 'Chairs', 'Decoration', 'Furniture', 'Garden', 'furniture', 'Lamps', 'Shelfs', 'Tables' ]

const best_sellers = [
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-12-600x366.jpg', product_name: 'Forge Basket', price: 109 },
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-11-600x366.jpg', product_name: 'New Chair', price: 290 },
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-10-600x366.jpg', product_name: 'Chandelier', price: 69 },
]

const products = [
  { image: '/baskets.jpg', url: 'floor-basket', product_name: 'Floor Basket', categories: ['Shelfs', 'Tables'], price: 29 },
  { image: '/lamps.jpg', url: 'wall-lamp', product_name: 'Wall Lamp', categories: ['Shelfs', 'Tables'], price: 49 },
  { image: '/tables.jpg', url: 'floor-decor', product_name: 'Floor Decor', categories: ['Shelfs', 'Tables'], price: 179 },
  { image: '/decor.jpg', url: 'wall-decor', product_name: 'Wall Decor', categories: ['Shelfs', 'Tables'], price: 39 },
  { image: '/chairs.jpg', url: 'day-chair', product_name: 'Day Chair', categories: ['Decor', 'Lamps'], price: 239 },
  { image: '/shelves.jpg', url: 'rattan-shelf', product_name: 'Rattan Shelf', categories: ['Decor', 'Lamps'], price: 179 },
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-7-600x366.jpg', url: 'royal-chair', product_name: 'Royal Chair', categories: ['Decor', 'Lamps'], price: 739 },
  { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-8-600x366.jpg', url: 'rattan-chair', product_name: 'Rattan chair', categories: ['Decor', 'Lamps'], price: 339 },
]

const index = () => {
  return (
    <>
      {/* <Navbar /> */}
      {/* Hero Section */}
      <section>
        <div className='hero--products'></div>
      </section>

      <section className='dark:bg-gray-900 text-gray-900 dark:text-gray-50 w-11/12 md:w-5/6 mx-auto my-28'>
        <div className="flex gap-8">
          {/* Main Content */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            {products.map(({ image, url, product_name, categories, price }, idx) => (
              <div key={idx} className="m-2 space-y-2">
                <img src={image} style={{imageRendering: 'optimizeQuality'}} alt={product_name} />
                <div className='flex justify-between font-cormorant text-xl'>
                  <div className=''>
                    <h4 className='font-poppins text-sm uppercase tracking-wide mb-1'><Link to={url}>{product_name}</Link></h4>
                    <ul className='flex italic text-gray-700 gap-1'>
                      {categories.map((category, idx) => (
                        <Link to={`/product-category/${category.toLowerCase()}`} key={idx} className='hover:text-black'>{idx === categories.length - 1 ? category : `${category}, `}</Link>
                      ))}
                    </ul>
                  </div>
                  <div className=''>
                    <span className='italic text-2xl'>${price}.00</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          {/* Right Side Bar */}
          <div className='space-y-10 w-2/3'>
            {/* Recent Products */}
            <div>
              <h2 className='font-poppins text-xl uppercase tracking-wide mb-4'>Recent Products</h2>
              <div className='flex flex-col gap-4'>
                {recent_products.map(({image, product_name, price}, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img className='w-20 object-cover' style={{imageRendering: 'optimizeQuality'}} src={image} alt="" />
                    <div className='font-cormorant italic text-xl flex-1'>
                      <h4 className='text-gray-700'>{product_name}</h4>
                      <p className='text-black'>${price}.00</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* Tags */}
            <div>
              <h2 className='font-poppins text-xl uppercase tracking-wide mb-4'>Tags</h2>
              <p className='font-cormorant italic text-xl text-gray-700'>
                {tags.map((tag, idx) => (
                  <Link to={`/product-tag/${tag.toLowerCase()}`} key={idx} className='hover:text-black'>{idx === tags.length - 1 ? tag : `${tag}, `}</Link>
                ))}
              </p>
            </div>
            {/* Categories */}
            <div>
              <h2 className='font-poppins text-xl uppercase tracking-wide mb-4'>Categories</h2>
              <ul>
                {categories.map(({ name, count }, idx) => (
                  <li className='font-cormorant italic text-xl text-gray-700 hover:text-black' key={idx}>
                    <span><Link to={name.toLowerCase()}>{name}</Link> ({count})</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Best Sellers */}
            <div>
              <h2 className='font-poppins text-xl uppercase tracking-wide mb-4'>Best Sellers</h2>
              <div className='flex flex-col gap-4'>
                {best_sellers.map(({ image, product_name, price }, idx) => (
                  <div key={idx} className="flex gap-4">
                    <img className='w-20 object-cover' style={{imageRendering: 'optimizeQuality'}} src={image} alt="" />
                    <div className='font-cormorant italic text-xl flex-1'>
                      <h4 className='text-gray-700'>{product_name}</h4>
                      <p className='text-black'>${price}.00</p>
                    </div>
                  </div>
                ))}
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