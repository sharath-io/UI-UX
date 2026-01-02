import { useEffect, useState } from "react";
import { PRODUCTS_URL } from "../utils/app.constants";

export const TopProducts = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await fetch(PRODUCTS_URL);
      const data = await res.json();
      console.log(data.products);
      setProducts(data.products);
    } catch (e) {
      console.log("Error occurred: ", e);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="flex flex-col w-[80%] mx-auto mt-28">
      <div className="text-4xl font-bold">Top Products</div>
      <ul className="my-5 flex gap-8 overflow-x-scroll no-scrollbar">
        {products.map((product) => (
          <li
            key={product.id}
            className="flex flex-col justify-center items-center h-80 p-4 rounded-lg
              whitespace-nowrap min-w-70 max-w-70 bg-wild-sand"
          >
            <img
              src={product.thumbnail}
              alt={product.name}
              className="w-full h-full object-fit"
            />
            <div>{product.title}</div>
            <p classname="font-medium">{product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
