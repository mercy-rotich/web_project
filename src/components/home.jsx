import { useEffect, useState } from "react";
import Header from "./header";
import Main from "./main";
import axios from "axios";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);

        const data = await response.data;
        setData(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {/* <Header /> */}

      <Main data={data} />
    </div>
  );
};

export default Home;
