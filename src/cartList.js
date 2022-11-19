import YourCart from "./yourCart";

const CartList = ({itemList, setItemList}) => {

  

  console.log(itemList)

    return ( 
      <>
        <header id="store">
        <h1>Greengrocers</h1>
        <ul className="item-list store--item-list">
          {/* Wrtite some code here... */}
          {
            itemList.map((item) => {
              return (<li key={item.id}>
                <div class="store--item-icon">
                  <img src={`/assets/icons/${item.id}.svg`} alt={item.name}/>
                </div>
                <button>Add to cart</button>
            </li>)
            })
          }
        </ul>
        </header>

        <YourCart />
      </>
     )  
}
 
export default CartList;