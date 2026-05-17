import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function getProducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");
        const data = await response.json();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
        console.log(error);
      }
    }
    getProducts();
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
        <Link to="products" className="p-10">
          <div className="flex flex-wrap justify-center gap-10">
            <div className="flex flex-col items-center gap-4 w-[300px]">
              <img
                className="aspect-square w-full object-contain bg-white rounded-2xl border border-gray-300 p-6 shadow-lg hover:scale-105 transition-transform"
                src={products[2]?.image}
                alt="Men's clothing"
              />
              <div className="text-white font-semibold text-2xl">
                Men's clothing
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-[300px]">
              <img
                className="aspect-square w-full object-contain bg-white rounded-2xl border border-gray-300 p-6 shadow-lg hover:scale-105 transition-transform"
                src={products[19]?.image}
                alt="Women's clothing"
              />
              <div className="text-white font-semibold text-2xl">
                Women's clothing
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-[300px]">
              <img
                className="aspect-square w-full object-contain bg-white rounded-2xl border border-gray-300 p-6 shadow-lg hover:scale-105 transition-transform"
                src={products[13]?.image}
                alt="Electronics"
              />
              <div className="text-white font-semibold text-2xl">
                Electronics
              </div>
            </div>

            <div className="flex flex-col items-center gap-4 w-[300px]">
              <img
                className="aspect-square w-full object-contain bg-white rounded-2xl border border-gray-300 p-6 shadow-lg hover:scale-105 transition-transform"
                src={products[6]?.image}
                alt="Jewelery"
              />
              <div className="text-white font-semibold text-2xl">Jewelery</div>
            </div>
          </div>
        </Link>
      )}
    </>
  );
}
