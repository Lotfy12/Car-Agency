import { useSelector } from "react-redux";

function CartList() {
  const cartItems = useSelector((state) => state.cars.cartItems);

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id}>
            <h3>{item.name}</h3>
            <p>Qty: {item.quantity}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartList;
