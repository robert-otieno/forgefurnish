import React from 'react'

const items = [
  { icon: '/icons/icon-4.png', name: 'Couch', description: 'Carefully designed and crafted to express your distinct style and tastes.' },
  { icon: '/icons/icon-1.png', name: 'Bed', description: 'Made from high-quality materials to provide a comfortable and luxurious sleeping experience.' },
  { icon: '/icons/icon-2.png', name: 'Desk', description: 'Includes all the features you need for a productive and comfortable studying environment.' },
  { icon: '/icons/icon-3.png', name: 'Cabinet', description: 'Your living space comes to life with an ever-changing variety of beautiful and functional furniture.' },
  { icon: '/icons/icon-5.png', name: 'TV Bench', description: 'Designed to meet your exact needs. Customized for your confident viewing.' },
  { icon: '/icons/icon-6.png', name: 'Wardrobe', description: 'You can have your dream wardrobe without emptying your bank account.' }
]

const Furniture = () => {
  return (
    <section className='w-11/12 md:w-4/5 mx-auto py-32'>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-10">
        {items.map(({icon, name, description}) => (
          <div key={name} className='flex'>
            <span className="">
              <img className='w-24' src={icon} alt={name} style={{ imageRendering: 'optimizeQuality'}} />
            </span>
            <div className="pl-5 pb-5">
              <h3 className='font-poppins text-gray-900 uppercase pb-2'>{name}</h3>
              <p className='font-cormorant italic text-gray-600 text-xl pb-4'>{description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Furniture