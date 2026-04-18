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
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 py-16 sm:py-4">
      <div
        className="absolute inset-0 bg-black/60 transition-opacity"
        onClick={onClose}
      ></div>

      <div className="relative z-10 w-full max-w-2xl px-5 py-6 bg-white shadow-2xl rounded-2xl flex flex-col max-h-full">
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
            <p className="text-center text-slate-500 py-8">Cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row items-center sm:items-start gap-4 p-4 border border-gray-100 shadow-sm rounded-xl"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="object-cover w-[140px] sm:w-24 h-24 sm:h-16 rounded-lg pointer-events-none"
                  />

                  <div className="flex flex-col items-center sm:items-start flex-1 text-center sm:text-left w-full">
                    <h3 className="font-bold text-slate-900 text-lg sm:text-base">{item.name}</h3>
                    <p className="text-sm text-slate-500">{item.type}</p>

                    <div className="flex items-center justify-center sm:justify-start gap-3 mt-3 sm:mt-2">
                      <button
                        className="px-3 py-1 text-white rounded-lg bg-slate-900 font-bold hover:bg-slate-700 active:scale-95 transition-transform"
                        onClick={() => dispatch(increaseItemQuantity(item.id))}
                      >
                        +
                      </button>

                      <span className="min-w-[30px] text-center font-bold text-lg sm:text-base">
                        {item.quantity}
                      </span>

                      <button
                        className="px-3 py-1 text-white rounded-lg bg-slate-900 font-bold hover:bg-slate-700 active:scale-95 transition-transform"
                        onClick={() => dispatch(decreaseItemQuantity(item.id))}
                      >
                        -
                      </button>
                    </div>
                  </div>

                  <button
                    className="px-4 py-2 mt-4 sm:mt-0 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors w-full sm:w-auto font-medium"
                    onClick={() => dispatch(deleteItem(item.id))}
                  >
                    Remove Item 🗑
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
