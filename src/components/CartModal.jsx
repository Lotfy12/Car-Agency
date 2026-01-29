import { useDispatch, useSelector } from "react-redux";
import {
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearItems,
} from "./CarsSlice";

function CartModal({ isOpen, onClose }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cars.cartItems);

  const totalQuantity = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center px-4">
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      ></div>

      <div className="relative z-10 w-full max-w-xl p-5 bg-white shadow-2xl rounded-2xl">
        <div className="flex items-center justify-between pb-3 border-b">
          <h2 className="text-xl font-bold text-slate-900">
            Cart Items ({totalQuantity})
          </h2>

          <button
            onClick={onClose}
            className="px-3 py-1 font-bold rounded-lg bg-slate-100 hover:bg-slate-200"
          >
            ✕
          </button>
        </div>

        <div className="mt-4 max-h-[400px] overflow-auto pr-1">
          {cartItems.length === 0 ? (
            <p className="text-center text-slate-500">Cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-3 p-3 border rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-24 h-16 rounded-lg"
                  />

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.type}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        className="px-3 py-1 text-white rounded-lg bg-slate-900"
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                      >
                        +
                      </button>

                      <span className="min-w-[30px] text-center font-bold">
                        {item.quantity}
                      </span>

                      <button
                        className="px-3 py-1 text-white rounded-lg bg-slate-900"
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <button
                    className="px-3 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700"
                    onClick={() => dispatch(deleteItem(item.id))}
                  >
                    🗑
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="flex items-center justify-between pt-4 mt-5 border-t">
          <button
            onClick={() => dispatch(clearItems())}
            className="px-4 py-2 text-white bg-red-600 rounded-xl hover:bg-red-700"
          >
            Clear Cart
          </button>

          <button
            onClick={onClose}
            className="px-4 py-2 text-white rounded-xl bg-slate-900 hover:bg-slate-800"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default CartModal;
