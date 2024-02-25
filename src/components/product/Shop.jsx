import React from "react";
import Cart from "./Cart";
import Product from "./Product";

const Shop = () => {
  return (
    <div className="grid md:grid-cols-2 gap-4">
      <Cart />
      <Product />
    </div>
  );
};

export default Shop;
