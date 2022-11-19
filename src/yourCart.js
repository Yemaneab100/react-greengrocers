import { useState } from "react";

const YourCart = ({cart, handlAddItem, totalPrice, handlRemoveItem}) => {
    

    return ( 
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
            
                {
                    cart.map((item, index) => {
                        return (
                            <li key = {index}>
                                <img
                                    className="cart--item-icon"
                                    src={`assets/icons/${item.id}.svg`}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button className="quantity-btn remove-btn center" onClick={() => handlRemoveItem(item)}>-</button>
                                <span className="quantity-text center">{item.quantity}</span>
                                <button className="quantity-btn add-btn center" onClick={() => handlAddItem(item)}>+</button>
                            </li>
                        )
                         ß
                    })

                }

            </ul>
            </div>
            <div className="total-section">
            <div>
                <h3>Total</h3>
            </div>
            <div>
                <span className="total-number">£{totalPrice}</span>
            </div>
            </div>
      </main>
     );
}
 
export default YourCart;