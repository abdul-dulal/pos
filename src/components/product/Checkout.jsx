import React, { useContext, useState } from "react";
import { amaountContext, discountContext, productContext } from "../../App";

const Checkout = () => {
  const [cartProduct, setCartProduct] = useContext(productContext);
  const [inputAmaount, setInputAmaount] = useContext(amaountContext);
  const [selectValue, setSelectValue] = useContext(discountContext);
  const [inputValue, setInputValue] = useState(0);
  const [discountType, setDiscountType] = useState("exclusive");

  const priceArray = cartProduct.map((e) => e.price * e.quantity);
  const taxArray = cartProduct.map((tax) => tax.tax * tax.quantity);

  const subTotal = priceArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const tax = taxArray.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
  }, 0);
  const total = discountType === "exclusive" ? subTotal + tax : subTotal;
  const flatTotal = total - inputAmaount;
  const parcentage = (inputAmaount / 100) * total;
  const parcentageTotal = total - parcentage;
  const netPayment =
    selectValue === "flat" ? flatTotal.toFixed(3) : parcentageTotal.toFixed(3);

  return (
    <div>
      <table className="w-full mt-5 bg-[#F3F3F3]">
        <tbody>
          <tr>
            <td className="p-1 text-[#888888] font-normal text-sm w-1/2"></td>
            <td className="p-1 text-[#888888] font-normal text-sm w-1/4 text-right ">
              Sub Total
            </td>
            <td className="p-1 text-[#888888] font-normal text-sm w-1/4 text-right">
              {subTotal.toLocaleString()}.000$
            </td>
          </tr>
          <tr>
            <td className="p-1 text-[#888888] font-normal text-sm"></td>
            <td className="p-1 text-[#888888] font-normal text-sm text-right">
              Tax
            </td>
            <td className="p-1 text-[#888888] font-normal text-sm text-right">
              {tax.toFixed(3)}$
            </td>
          </tr>
          <tr>
            <td className="p-1 text-[#888888] font-normal text-sm"></td>
            <td className="p-1 text-[#888888] font-normal text-sm text-right">
              Shiping
            </td>
            <td className="p-1 text-[#888888] font-normal text-sm text-right">
              <input
                type="text"
                name=""
                value={inputValue}
                onChange={({ target }) => setInputValue(target.value)}
                className="w-20 text-right py-[2px] pr-1 rounded-sm border border-[#888888] focus:outline-0 focus:ring-0"
              />
            </td>
          </tr>
          <tr>
            <td className="p-1 text-[#888888] font-normal text-sm"></td>
            <td className="p-1 text-[#888888] font-normal text-sm text-right">
              Discount Cart
            </td>
            <td className="p-1 text-[#888888] font-normal text-sm text-right">
              {inputAmaount}.000$
            </td>
          </tr>
          <tr>
            <td className="p-1  font-normal text-sm bg-[#FF7A5A] text-white">
              Product Count(
              <span className="px-1 ">{cartProduct.length}</span>)
            </td>
            <td className="p-1  font-normal text-sm bg-[#FF7A5A] text-white text-right">
              Net Payable
            </td>
            <td className="p-1  font-normal text-sm bg-[#FF7A5A] text-white text-right">
              {netPayment}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Checkout;
