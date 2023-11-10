import React, { useEffect,useState } from "react";
import { useFilterContext } from "../context/filter_context";
import GridView from "./GridView";
import axios from "axios";

const ProductList = () => {
  const [filter_products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get("http://localhost:3001/products");
        setProducts(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Couldn't fetch products", error);
      }
    };

    getProducts();
  }, []);


    return <GridView products={filter_products} />;
};

export default ProductList;