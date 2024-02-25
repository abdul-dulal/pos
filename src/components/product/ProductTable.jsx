/* eslint-disable react/jsx-key */
import React, { useContext, useState } from "react";
import { FaRegEdit } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { productContext } from "../../App";

import Swal from "sweetalert2";
import Checkout from "./Checkout";
import EditModal from "./EditModal";

const ProductTable = () => {
  const [cartProduct, setCartProduct] = useContext(productContext);
  const [modal, setModal] = useState(false);
  const [editProduct, setEditProduct] = useState({});

  const handleEdit = (product) => {
    setModal(true);
    setEditProduct(product);
  };
  const handleDeleteClick = (id) => {
    setCartProduct(cartProduct.filter((p) => p.id !== id));
  };
  const handleDecrement = (id) => {
    const updatedQuatity = cartProduct.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity - 1,
        };
      }
      return item;
    });

    setCartProduct(updatedQuatity);
  };
  const handleIncrement = (quantity, id, inStock) => {
    const updatedQuatity = cartProduct.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      }
      return item;
    });

    if (quantity === inStock) {
      return Swal.fire({
        icon: "error",
        text: "Stock not available",
      });
    } else {
      setCartProduct(updatedQuatity);
    }
  };

  return (
    <div>
      <div className=" mt-3 h-[350px]  overflow-y-auto ">
        <div className="relative overflow-x-auto scrollbar-hide">
          <table className=" w-full">
            <thead className="bg-secondary  text-sm text-white font-normal">
              <tr>
                <th scope="col" className="py-3 w-5"></th>
                <th scope="col" className=" py-3 w-64 text-left px-2">
                  Items
                </th>
                <th scope="col" className=" py-3 text-left px-4">
                  Unit Price
                </th>
                <th scope="col" className=" py-3 text-left px-8">
                  Quantity
                </th>
                <th scope="col" className=" py-3 text-left px-4">
                  TotalPrice
                </th>
                <th scope="col" className=" py-3"></th>
              </tr>
            </thead>
            {cartProduct.length <= 0 ? (
              <tr>
                <td></td>
                <td className="text-sm text-[#888888] font-normal pt-3">
                  Please add an item
                </td>
              </tr>
            ) : (
              <tbody className="">
                {cartProduct.map((product) => {
                  const { productName, price, quantity, id, inStock } = product;
                  return (
                    <tr className="space-y-4">
                      <td className="px-1 py-1">
                        <div
                          onClick={() => handleEdit(product)}
                          className="p-2 py-2 bg-[#e9ecef] rounded cursor-pointer"
                        >
                          <FaRegEdit />
                        </div>
                      </td>
                      <td className="rounded-md p-0 py-1">
                        <div className="p-1 px-4 py-1 bg-[#e9ecef] rounded whitespace-nowrap">
                          {productName}
                        </div>
                      </td>
                      <td className="px-3  rounded-md p-0 py-1">
                        <div className="p-1 px-4 py-1 bg-[#e9ecef] rounded whitespace-nowrap">
                          {price}.000
                        </div>
                      </td>
                      <td className="px-2  rounded-md p-0 py-1">
                        <div className="flex items-center p-1 px-4 py-1  rounded whitespace-nowrap">
                          <button
                            onClick={() => handleDecrement(id)}
                            disabled={quantity <= 1}
                            className="w-6 bg-[#e9ecef] flex justify-center items-center text-xl"
                          >
                            -
                          </button>
                          <input
                            type="text"
                            name=""
                            value={quantity}
                            className="w-16 border-0 border-white focus:outline-1 focus:outline-gray-100 focus:ring text-center"
                          />
                          <button
                            onClick={() =>
                              handleIncrement(quantity, id, inStock)
                            }
                            className="w-6 bg-[#e9ecef] flex justify-center items-center text-xl"
                          >
                            +
                          </button>
                        </div>
                      </td>
                      <td className="px-2  rounded-md p-0 py-1">
                        <div className="p-1 px-4 py-1 bg-[#e9ecef] rounded whitespace-nowrap">
                          {price * quantity}.000
                        </div>
                      </td>
                      <td className="px-2  rounded-md p-0 py-1 ">
                        <div
                          onClick={() => handleDeleteClick(id)}
                          className="p-2 bg-[#e9ecef] rounded cursor-pointer"
                        >
                          <RiDeleteBin6Line />
                        </div>
                      </td>
                      {modal && (
                        <EditModal setModal={setModal} product={editProduct} />
                      )}
                    </tr>
                  );
                })}
              </tbody>
            )}
          </table>
        </div>
      </div>
      <Checkout />
    </div>
  );
};

export default ProductTable;
