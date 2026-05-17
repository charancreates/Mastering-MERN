import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { CartContext } from "./CartContext";
import { useContext } from "react";

export default function ProductDetails() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { cart, setCart } = useContext(CartContext);
  let { id } = useParams();
  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    getProducts();
  }, [id]);
  let currid = parseInt(id, 10) || 0;
  let next = currid === 20 ? 1 : currid + 1;
  let prev = currid === 1 ? 20 : currid - 1;
  return (
    <>
      {loading ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          Loading...
        </div>
      ) : error ? (
        <div className="flex justify-center items-center min-h-[70vh]">
          Something went Wrong...
        </div>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-1 gap-4 p-4 rounded">
          <img
            className="h-64 w-full object-contain bg-white rounded-xl border border-gray-300 p-4 shadow-sm"
            src={product.image}
            alt="{proget.title}"
          />
          <div>
            <p className="text-white font-bold">{product.title}</p>
            <p className=" mt-4 text-grey text-xs">{product.description}</p>
            <p className=" mt-3 text-white/90 font-semi-bold">
              Category: {product.category}
            </p>
            <p className=" mt-3 text-white/90 font-bold">
              MRP: $ {product.price}
            </p>
            <p className=" mt-3 text-orange-400 text-xl;">
              Rating : {product.rating?.rate}★ ({product.rating?.count})
            </p>
          </div>
          <div className="flex justify-between items-center w-full mt-8 px-4">
            <Link
              to={`/products/${prev}`}
              className="w-28 py-2 text-center text-white font-semibold bg-orange-400 rounded-xl hover:bg-orange-500 transition-colors">
              Prev
            </Link>

            <button
              onClick={() => setCart([...cart, { product }])}
              className="w-56 py-3 text-center text-white font-bold bg-orange-500 rounded-xl hover:bg-orange-600 shadow-md transition-all hover:scale-105 sm:text-xs sm:w-35 sm:m-4">
              Add to Cart ({cart.length})
            </button>

            <Link
              to={`/products/${next}`}
              className="w-28 py-2 text-center text-white font-semibold bg-orange-400 rounded-xl hover:bg-orange-500 transition-colors">
              Next
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
