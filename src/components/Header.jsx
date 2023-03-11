import React from "react";
import { Link } from "react-router-dom";
import { FiShoppingBag } from "react-icons/fi";
import { useSelector } from "react-redux";
import image from "../assets/cart.png";
const Header = () => {
  const { cartItems } = useSelector((state) => state.cart);
  return (
    <nav>
      <img src={image} alt="logo" className="logoIcon" />
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/cart"}>
          <FiShoppingBag />
          <p>{cartItems.length}</p>
        </Link>
      </div>
    </nav>
  );
};
export default Header;
