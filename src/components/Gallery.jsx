import React from 'react'

const items = [
  { src: '/gallery/cabinet-2.jpg' },
  { src: '/gallery/cabinet-3.jpg' },
  { src: '/gallery/cabinet.jpg' },
  { src: '/gallery/desk-1.jpg' },
  { src: '/gallery/drawer-doors.jpg' },
  { src: '/gallery/drawer.jpg' },
  { src: '/gallery/dresser-2.jpg' },
  { src: '/gallery/desk-2.jpg' },
  { src: '/gallery/dresser.jpg' }
]

const Gallery = () => {
  return (
    <section className='w-full'>
      <ul className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-9 list-none">
        {items.map((item, idx) => (
          <li key={idx} className='overflow-hidden'>
            <a href="">
              <img className='transform hover:scale-105 transition-all duration-300 ease-in-out' src={item.src} style={{ imageRendering: 'optimizeQuality' }} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default Gallery