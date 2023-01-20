import { Link, useParams } from 'react-router-dom'
import { Footer } from '../../components'
import ProductCard from '../../components/ProductCard'
import { useStateContext } from '../../contexts/ContextProvider'

const index = () => {
  const { category } = useParams()
  const { products } = useStateContext()

  const categoryItems = products.filter(item => item.categories.includes(category));

  return (
    <>
      {/* Header */}
      {/* Content */}
      <section className='dark:bg-gray-900 text-gray-900 dark:text-gray-50 w-11/12 md:w-4/5 mx-auto my-28'>
        <div className="flex flex-col gap-5 py-8">
          <p className='font-cormorant text-xl italic text-gray-700 '>Showing all {categoryItems.length} results</p>
          
          {/* Products */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            {categoryItems?.length === 0 ? (
              <p className='font-cormorant text-xl italic text-gray-700'>There are no products to display!</p>
            ) : (
              categoryItems?.map(({ sku, ...details }) => (
                <ProductCard key={sku} {...details} />
              ))
            )}
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  )
}

export default index