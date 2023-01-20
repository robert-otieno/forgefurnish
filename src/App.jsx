import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Essentials, Footer, Furniture, Gallery, Header } from './components'

const App = () => {
  return (
    <>
      {/* Header */}
      <Header />
      <Essentials />
      <Carousel />
      <Furniture />
      <Gallery />
      <Footer />
    </>
  )
}

export default App