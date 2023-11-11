import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="text-center m-4 p-4 ">
      <div>
        <h1 className="font-bold">Cart</h1>
        <button
          onClick={handleClearCart}
          className="bg-green-300 rounded-md text-white px-3 py-1"
        >
          Clear cart
        </button>
        <div className="m-10 bg-green-300 text-white">
          {cartItems.length === 0 ? `Please add items to Cart` : ""}{" "}
          <Link to={"/"}>Home</Link>
        </div>
        <div className="m-auto w-6/12 mt-10">
          {cartItems.map((item) => (
            <ItemList list={item} key={item?.card?.info?.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Cart;

/** onClick = {()=> handleChange()} -> executes when called as an call back function
 * onClick = {handleChange} -> executes the fn when called (reference to the function)
 * onClick = {handleChange()} -> immeditaley executed as the component renders
 */
