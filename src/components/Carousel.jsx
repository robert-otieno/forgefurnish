import React from 'react'

const testimonials =[
  {
    image: '/carousel/client-h1.png',
    comment: 'I worked with Forge & Furnish to build travel-inspired furniture for my living room. From start to finish, they were truly professional and communicative. Their craftsmanship is second to none and I couldn’t be happier with the finished product. Highly recommended!',
    client: 'Emily Turner'
  },
  {
    image: '/carousel/client-h2.png',
    comment: 'Forge & Furnish provided the perfect custom pieces to tie our newly renovated home together. Their attention to detail and passion for their craft truly shines through in the furniture. We will never go anywhere else for our furniture needs!',
    client: 'Alex and Laila Smith'
  },
  {
    image: '/carousel/client-h3.png',
    comment: 'I decided to give our family heirloom furniture a facelift with Forge & Furnish. They quickly took my old pieces and turned them into modern and stylish showpieces. My family is so impressed by the transformation and we are so grateful for the amazing job they did.',
    client: 'David Logue'
  },
  {
    image: '/carousel/client-h4.png',
    comment: 'My bedroom was in desperate need of an upgrade, so I reached out to Forge & Furnish. They made it so easy to design the bed and dresser of my dreams. The quality is amazing and they also gave me advice on how to care for the furniture. I will definitely be using them again!',
    client: 'Emma Morris'
  },
  {
    image: '/carousel/client-h5.png',
    comment: 'I wanted a statement piece for my living room and Forge & Furnish did not disappoint. They built the perfect coffee table – it’s like a work of art in my house! They took all my ideas and made them a reality. I’m in love with the end result!',
    client: 'Thomas Davis'
  },
  {
    image: '/carousel/client-h6.png',
    comment: 'We needed custom cabinetry for our kitchen and Forge & Furnish made the entire process so easy. We love our cabinetry so much, and we have to thank them for it. We have already recommended them to all of our friends and family!',
    client: 'Jacob and Callie Watson'
  }
]

const Carousel = () => {
  return (
    <section className="pt-24">
      <div className="container max-w-xl mx-auto">
        <div className="flex flex-col items-center w-full p-6 space-y-8 rounded-md lg:h-full lg:p-8 dark:bg-gray-900 dark:text-gray-100">
          <img src="/carousel/client-h1.png" alt="" className='w-full h-20 object-contain' />
          <blockquote className="max-w-lg text-xl italic font-medium font-cormorant text-center">"I worked with Forge & Furnish to build travel-inspired furniture for my living room. From start to finish, they were truly professional and communicative. Their craftsmanship is second to none and I couldn’t be happier with the finished product. Highly recommended!"</blockquote>
          <div className="font-poppins text-center dark:text-gray-400">
            <p>~ Emily Turner ~</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Carousel