import { useState } from "react";

const YourCart = ({cart, setCart, handleChange, totalPrice}) => {
    //const [price, setPrice] = useState(0);

    // const handlePrcie = () => {
    //     let ans = 0;
    //     cart.map((item) => (
    //         ans += item.price
    //     ));
    //     setPrice(ans);
    // }
    // let ans = 0;
    // cart.map((item) => (
    //     ans += item.price
    // ));
    // setPrice(ans);

    return ( 
        <main id="cart">
            <h2>Your Cart</h2>
            <div className="cart--item-list-container">
            <ul className="item-list cart--item-list">
            
                {
                    cart.map((item) => {
                        return (
    
                            <li key = {item.id}>
                                <img
                                    className="cart--item-icon"
                                    src={`assets/icons/${item.id}.svg`}
                                    alt={item.name}
                                />
                                <p>{item.name}</p>
                                <button className="quantity-btn remove-btn center" >-</button>
                                <span className="quantity-text center">1</span>
                                <button className="quantity-btn add-btn center" >+</button>
                            </li>
                        )
                         
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