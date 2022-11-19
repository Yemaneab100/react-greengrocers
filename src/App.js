import './styles/reset.css'
import './styles/index.css'
import CartList from './cartList'
import Footer from './footer'

import { useState } from 'react'
import initialStoreItems from './store-items'

/*
Here's what a store item should look like
{
  id: '001-beetroot',
  name: 'beetroot',
  price: 0.35
}

What should a cart item look like? 🤔
*/

// console.log(initialStoreItems)

export default function App() {
  // Setup state here...
  const [itemList, setItemList] = useState(initialStoreItems)

  return (
    <>
      <CartList itemList = {itemList} setItemList = {setItemList}/>
      <Footer />
    </>
  )
}
