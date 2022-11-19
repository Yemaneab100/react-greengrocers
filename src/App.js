import './styles/reset.css'
import './styles/index.css'
import CartList from './cartList'
import YourCart from "./yourCart";
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
  // const emptyCart =  [
  //   {
  //     id: "",
  //     name: "",
  //     price: null
  //   }]
  const [itemList, setItemList] = useState(initialStoreItems)
  const [cart, setCart] = useState([])
  let [totalPrice, setTotalPrice] = useState(0);

  const addTocart = (item, price) =>{
    if(cart.indexOf(item) !== -1) return
    setCart([...cart, item])

    setTotalPrice(totalPrice+ price)
  }

  const handleChange = (item, d) => {
    const ind = cart.indexOf(item);
    const arr = cart;
    arr[ind].amount += d
    
    if(arr[ind].amount === 0) arr[ind].amount = 1;
    setCart([...arr]);
  }
  console.log(cart)
  return (
    <>
      <CartList itemList = {itemList} addTocart = {addTocart}/>\
      <YourCart cart={cart} setCart = {setCart} handleChange={handleChange} totalPrice ={totalPrice}/>
      <Footer />
    </>
  )
}
