import { useSelector } from "react-redux";

function CartList() {
  const cartItems = useSelector((state) => state.cars.cartItems);

  return (
    <div className="flex flex-col gap-4 p-4 md:p-6 lg:p-8 w-full">
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500 font-medium py-8 bg-gray-50 rounded-xl">Cart is empty</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="flex flex-col sm:flex-row items-center justify-between p-4 bg-white shadow-md hover:shadow-lg transition-shadow duration-300 rounded-xl border border-gray-100">
            <h3 className="text-lg font-bold text-gray-800 mb-2 sm:mb-0">{item.name}</h3>
            <p className="font-semibold text-red-800 bg-red-50 border border-red-100 px-4 py-2 rounded-lg tracking-wide shadow-sm">
              Quantity: {item.quantity}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default CartList;
