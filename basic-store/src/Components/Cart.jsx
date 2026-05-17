import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  console.log(cart);
  const removeCart = (remove_id) => {
    setCart((prevCart) =>
      prevCart.filter((item) => item.product.id !== remove_id)
    );
  };
  const Totalprice = cart.reduce((sum, item) => sum + item.product.price, 0);

  return (
    <>
      {cart.map((item) => (
        <div className="grid grid-cols-2 gap-4 m-7" key={item.product.id}>
          <img
            className="h-56 w-full object-contain bg-white rounded-xl border border-gray-300 p-4 shadow-sm"
            src={item.product.image}
            alt={item.product.title}
          />
          <div>
            <div className="mt-2.5 text-center font-bold text-white text-sm hover:underline decoration-solid">
              {item.product.title}
            </div>
            <div className="mt-3 text-grey text-xs">
              {item.product.description.substring(0, 100)}...
            </div>
            <div className="mt-2 text-white">
              Category: {item.product.category}
            </div>
            <div className="mt-2 text-orange-400 stroke-slate-100 font-bold">
              Price: ${item.product.price}
            </div>
            <div className="mt-2 text-orange-300 stroke-slate-100 font-semibold">
              Rating: {item.product.rating.rate}★({item.product.rating.count})
            </div>
            <button
              onClick={() => removeCart(item.product.id)}
              className="w-56 py-2 mt-3 text-center text-white font-bold bg-orange-500 rounded-xl hover:bg-orange-600 shadow-md transition-all hover:scale-105">
              Remove from Cart
            </button>
          </div>
        </div>
      ))}
      <hr />
      <h2 className="text-bold mt-2"> Cart summary</h2>
      <hr />
      <div className="mt-2 text-white">No of Items: {cart.length}</div>
      <div className="mt-2 text-white">Total Amount: $ {Totalprice}</div>
      <div className="flex justify-center items-center">
        <button className="w-56 py-2 m-3 mb-5 text-white font-bold bg-green-500 rounded-xl hover:bg-green-600 shadow-md transition-all hover:scale-105">
          Pay using UPI
        </button>
      </div>
    </>
  );
}
