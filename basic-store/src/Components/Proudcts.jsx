import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function Products() {
  const [products, setProudcts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function getProucts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProudcts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }
    getProucts();
  }, []);
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
        <div className="grid grid-cols-3 gap-4 p-4 rounded">
          {products.map((product) => (
            <div key={product.id} className="flex flex-col items-center p-4">
              <img
                src={product.image}
                alt={product.title}
                className="h-64 w-full object-contain bg-white rounded-xl border border-gray-300 p-4 shadow-sm"
              />
              <Link
                to={`${product.id}`}
                className="mt-4 text-center font-semibold text-white   hover:underline decoration-solid">
                {product.title}
              </Link>
              <p className="flex=auto">${product.price}</p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
