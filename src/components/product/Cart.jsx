import React, { useState } from "react";
import { TbUserPlus } from "react-icons/tb";
import { CiEdit } from "react-icons/ci";
import { FaTruckMoving } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import CustomerModal from "./AddCustomerModal";
import AddNote from "./AddNote";
import Items from "./Items";
import Shiping from "../product/Shiping";
import ProductTable from "./ProductTable";
import Select from "react-select";
const Cart = () => {
  const [modal, setModal] = useState("");
  const options = [
    { value: "Walking customer (USD)", label: "Walking customer (USD)" },
    { value: "William Jones (USD)", label: "William Jones (USD)" },
    { value: "Agatha wiliam (USD)", label: "Agatha wiliam (USD)" },
    { value: "Harvey Morrison (GBP)", label: "Harvey Morrison (GBP)" },
    { value: "Anke Kaisar (GBP)", label: "Anke Kaisar (GBP)" },
  ];
  const modalComponents = {
    "Add Customer": <CustomerModal setModal={setModal} />,
    Note: <AddNote setModal={setModal} />,
    Shiping: <Shiping setModal={setModal} />,
    Items: <Items setModal={setModal} />,
  };

  return (
    <div className="bg-white shadow-md py-5 w-full">
      <div className="flex flex-wrap items-center ml-5   ">
        <div className=" lg:w-5/12 md:w-7/12 w-5/12 ">
          <Select
            defaultValue={options[0]}
            options={options}
            className="w-full max-w-xs p-2 rounded-md"
          />
        </div>
        <div className="flex py-1 -ml-3">
          {[
            ["Add Customer", <TbUserPlus />],
            ["Note", <CiEdit />],
            ["Shiping", <FaTruckMoving />],
            ["Items", <AiOutlinePlus />],
          ].map(([title, icon]) => (
            <li
              key={title}
              onClick={() => {
                setModal(title);
              }}
              className="flex whitespace-nowrap list-none border lg:border-l-0 border-primary text-primary sm:text-sm text-[13px] items-center px-2 py-2  font-normal hover:bg-primary hover:text-white cursor-pointer transition duration-500"
            >
              <span> {icon}</span> {title}
            </li>
          ))}
        </div>
        {modal && modalComponents[modal]}
      </div>
      <ProductTable />
    </div>
  );
};

export default Cart;
