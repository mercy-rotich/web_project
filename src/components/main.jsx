import { useEffect, useState } from "react";
import ProductCard from "./productCard";
import axios from "axios";
import Loading from "./loading";

/* eslint-disable react/prop-types */
const Main = ({ data }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);

        const data = await response.data;
        console.log(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <div>
        <h2 className="mt-4 font-medium tracking-wider text-xl capitalize">
          Our products
        </h2>
      </div>

      {loading ? (
        <div className="flex justify-center items-center h-screen">
          <Loading />
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-4">
          {data.map((product) => (
            <div key={product.id}>
              <ProductCard items={product} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Main;
