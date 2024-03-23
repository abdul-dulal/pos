/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from "react";
import { LuAlertOctagon } from "react-icons/lu";
import Swal from "sweetalert2";
import { productContext } from "../../App";

const CategoryProduct = ({ category, searchTerm }) => {
  const [products, setProduct] = useState([]);
  const [cartProduct, setCartProduct] = useContext(productContext);

  let result;

  useEffect(() => {
    fetch("/product.json")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  if (category !== "Refresh") {
    result = products.filter((element) => element.category === category);
  } else {
    result = products;
  }
  if (searchTerm) {
    const searchData = products.filter((item) =>
      item.productName.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    result = searchData;
  }

  const handleClick = (product) => {
    if (product.quantity === 0) {
      return Swal.fire({
        icon: "error",
        text: "Stock not available",
      });
    } else {
      const existItem = cartProduct?.find((item) => item.id === product.id);
      if (existItem) {
        const updatedQuatity = cartProduct.map((item) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: item.quantity + 1,
            };
          }
          return item;
        });
        const checkStock = updatedQuatity.find((e) => e.id === product.id);

        if (checkStock.quantity === checkStock.inStock + 1) {
          return Swal.fire({
            icon: "error",
            text: "Stock not available",
          });
        } else {
        }
        setCartProduct(updatedQuatity);
      } else {
        setCartProduct([...cartProduct, product]);
      }
    }
  };

  return (
    <div>
      {result.length <= 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center">
          <img src="/img/pos-cart.png" className="h-[250px] w-[250px]" alt="" />
          <h1 className="text-3xl text-[#B2B2B2]">No products available</h1>
        </div>
      ) : (
        <div className="grid  lg:grid-cols-5  md:grid-cols-3 grid-cols-4 gap-[10px] ">
          {result.map((product) => (
            <div
              onClick={() => handleClick(product)}
              key={product.id}
              className="relative border border-[#aaa] rounded-lg cursor-pointer"
            >
              <img src={product.productImg} className="h-36 p-2" alt="" />
              <div className="absolute top-2 right-2">
                {product.quantity === 0 ? (
                  <LuAlertOctagon color="red" className="" />
                ) : (
                  ""
                )}
                {cartProduct.map((e) =>
                  e.id == product.id && e.quantity == product.inStock ? (
                    <p key={e.id}>
                      {" "}
                      <LuAlertOctagon color="red" className="" />
                    </p>
                  ) : (
                    ""
                  )
                )}
              </div>
              <div className="absolute  bottom-0 left-0 bg-[#f3f4f5] opacity-80  w-full p-[2px] ">
                <p className="text-[#000] whitespace-nowrap overflow-hidden text-center">
                  {product.productName}
                </p>
                <p className=" text-center text-[#000]">{product.price}.000</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryProduct;
