

const items = [
  {
    image: '/baskets.jpg',
    category: 'Garden Furniture',
    item: 'Baskets',
    price: 109
  },
  {
    image: '/lamps.jpg',
    category: 'Interior Furniture',
    item: 'Lamps',
    price: 139
  },
  {
    image: '/tables.jpg',
    category: 'Indoor & Outdoor',
    item: 'Tables',
    price: 169
  },
  {
    image: '/decor.jpg',
    category: 'Decoration for walls',
    item: 'Decor',
    price: 29
  },
  {
    image: '/chairs.jpg',
    category: 'Indoor Furniture',
    item: 'Chairs',
    price: 690
  },
  {
    image: '/shelves.jpg',
    category: 'Innovative decoration',
    item: 'Shelfs',
    price: 290
  }
]

const Essentials = () => {
  return (
    <div className="w-11/12 md:w-4/5 mx-auto">
      <div className="pb-12 pt-32">
        <h2 className="font-poppins text-gray-900 text-3xl uppercase pb-2">Forge & Furnish Essentials</h2>
        <h3 className="font-cormorant text-gray-600 text-xl italic">Interior Decor</h3>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-12'>
        {items.map((e, i) => (
          <div key={i}>
            <div className="overflow-hidden"><img className="hover:scale-105 hover:translate-x-3 transition-all duration-300 ease-in-out" src={e.image}  style={{ imageRendering: 'optimizeQuality' }} alt="" /></div>
            <div className="font-cormorant flex pt-7">
              <div className="flex-1">
                <h6 className="font-poppins uppercase">{e.item}</h6>
                <p className="italic text-gray-600 text-xl">{e.category}</p>
              </div>
              <div className="flex items-end">
                <h3 className="italic text-xl">from Kshs.{e.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Essentials