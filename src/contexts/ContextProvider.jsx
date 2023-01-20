import { createContext, useContext, useState } from "react";

const StateContext = createContext({
    products: null,
})

// const categories = [
//     { name: 'Baskets', count: 4 },
//     { name: 'Chairs', count: 4 },
//     { name: 'Decor', count: 4 },
//     { name: 'Lamps', count: 4 },
//     { name: 'Shelfs', count: 4 },
//     { name: 'Tables', count: 4 },
//     { name: 'Uncategorized', count: 0 }
//   ]
  
//   const recent_products = [
//     { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-1-600x366.jpg', product_name: 'Floor Basket', price: 29 },
//     { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-2-600x366.jpg', product_name: 'Wall Lamp', price: 49 },
//     { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-3-600x366.jpg', product_name: 'Floor Decor', price: 179 }
//   ]
  
//   const tags = ['Chairs', 'Decoration', 'Furniture', 'Garden', 'furniture', 'Lamps', 'Shelfs', 'Tables']
  
//   const best_sellers = [
//     { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-12-600x366.jpg', product_name: 'Forge Basket', price: 109 },
//     { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-11-600x366.jpg', product_name: 'New Chair', price: 290 },
//     { image: 'https://bridge383.qodeinteractive.com/wp-content/uploads/2020/07/prod-img-10-600x366.jpg', product_name: 'Chandelier', price: 69 },
//   ]

export const ContextProvider = ({ children }) => {
    const [products, setProducts] = useState([
        { image: '/baskets.jpg', url: 'floor-basket', name: 'Floor Basket', categories: ['shelfs', 'tables'], price: 29, sku: '006', short_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rem, non veritatis sit tempore nobis quod dolorum minus cum quasi numquam odit sint ab cupiditate.', long_description: 'Non arcu risus quis varius. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Amet dictum sit amet justo donec enim diam. Massa tempor nec feugiat nisl pretium fusce id velit ut. Nulla pharetra diam sit amet nisl suscipit. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.', tags: ['Chairs', 'Decoration', 'Furniture', 'Gadren Furniture', 'Lamps', 'Shelfs', 'Tables'] },
        { image: '/lamps.jpg', url: 'wall-lamp', name: 'Wall Lamp', categories: ['shelfs', 'tables'], price: 49, sku: '0046', short_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rem, non veritatis sit tempore nobis quod dolorum minus cum quasi numquam odit sint ab cupiditate.', long_description: 'Non arcu risus quis varius. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Amet dictum sit amet justo donec enim diam. Massa tempor nec feugiat nisl pretium fusce id velit ut. Nulla pharetra diam sit amet nisl suscipit. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.', tags: ['Chairs', 'Decoration', 'Furniture', 'Gadren Furniture', 'Lamps', 'Shelfs', 'Tables'] },
        { image: '/chairs.jpg', url: 'day-chair', name: 'Day Chair', categories: ['decor', 'lamps'], price: 239, sku: '0123', short_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rem, non veritatis sit tempore nobis quod dolorum minus cum quasi numquam odit sint ab cupiditate.', long_description: 'Non arcu risus quis varius. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Amet dictum sit amet justo donec enim diam. Massa tempor nec feugiat nisl pretium fusce id velit ut. Nulla pharetra diam sit amet nisl suscipit. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.', tags: ['Chairs', 'Decoration', 'Furniture', 'Gadren Furniture', 'Lamps', 'Shelfs', 'Tables'] },
        { image: '/shelves.jpg', url: 'rattan-shelf', name: 'Rattan Shelf', categories: ['decor', 'lamps'], price: 179, sku: '01237', short_description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor rem, non veritatis sit tempore nobis quod dolorum minus cum quasi numquam odit sint ab cupiditate.', long_description: 'Non arcu risus quis varius. Aliquet nibh praesent tristique magna sit amet purus gravida quis. Amet dictum sit amet justo donec enim diam. Massa tempor nec feugiat nisl pretium fusce id velit ut. Nulla pharetra diam sit amet nisl suscipit. Faucibus purus in massa tempor nec feugiat nisl pretium fusce. Aliquet porttitor lacus luctus accumsan tortor posuere ac ut.', tags: ['Chairs', 'Decoration', 'Furniture', 'Gadren Furniture', 'Lamps', 'Shelfs', 'Tables'] },
    ])

    return (
        <StateContext.Provider value={{
            products
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)