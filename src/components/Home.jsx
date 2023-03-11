import React from "react";
import { toast } from "react-hot-toast";
import { useDispatch } from "react-redux";
import ProductCard from "./ProductCard";
import productList from "../assets/dummyItems";

const Home = () => {
  const dispatch = useDispatch();

  const addToCartHandler = (options) => {
    dispatch({ type: "addToCart", payload: options });
    dispatch({ type: "calculatePrice" });
    toast.success("Item added to Cart.");
  };
  return (
    <div className="home">
      {productList.map((i) => (
        <ProductCard
          key={i.id}
          imgSrc={i.imgSrc}
          name={i.name}
          price={i.price}
          id={i.id}
          handler={addToCartHandler}
        />
      ))}
    </div>
  );
};

export default Home;
