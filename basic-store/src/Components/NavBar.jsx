import { NavLink } from "react-router-dom";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function NavBar() {
  const { cart } = useContext(CartContext);
  return (
    // Good use of flex here to center everything!
    <div className="flex justify-center m-0 bg-gray-900 p-4">
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive
            ? "pr-5 pl-5 text-violet-500 font-bold"
            : "pr-5 pl-5 text-white hover:text-violet-700"
        }>
        Home
      </NavLink>

      <NavLink
        to="/products"
        className={({ isActive }) =>
          isActive
            ? "pr-5 pl-5 text-violet-500 font-bold"
            : "pr-5 pl-5 text-white hover:text-violet-700"
        }>
        Products
      </NavLink>

      <NavLink
        className="pl-30"
        to="/cart"
        className={({ isActive }) =>
          isActive
            ? "pr-9 pl-5 text-violet-500 font-bold"
            : "pr-9 pl-5 text-white hover:text-violet-700"
        }>
        Cart ({cart.length})
      </NavLink>
    </div>
  );
}
