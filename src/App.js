import './styles/reset.css'
import './styles/index.css'
import CartList from './cartList'
import YourCart from "./yourCart";
import Footer from './footer'
import { useState } from 'react'
import initialStoreItems from './store-items'

export default function App() {
  
  const itemList = initialStoreItems
  const [cart, setCart] = useState([])
  let [totalPrice, setTotalPrice] = useState(0);
  
  
  
  
  
  const handlAddItem = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if(productExist){
      setCart(cart.map((item) => item.id === product.id 
      ? {...productExist, quantity: productExist.quantity + 1}
      :item
      )
      );
      
    }
    else {
      setCart([...cart, {...product, quantity: 1}])
    }
    
  }

  const handlRemoveItem = (product) => {
    const productExist = cart.find((item) => item.id === product.id);
    if(productExist.quantity === 1){
      setCart(cart.filter((item) => item.id !== product.id))
    }
    else{
      setCart(cart.map((item) => item.id === product.id ? {...productExist, quantity: productExist.quantity -1}: item))
    }
  }
  console.log(cart)

  return (
    <>
      <CartList itemList = {itemList} handlAddItem = {handlAddItem}/>\
      <YourCart cart={cart}  handlAddItem ={handlAddItem} handlRemoveItem = {handlRemoveItem}/>
      <Footer />
    </>
  )
}
