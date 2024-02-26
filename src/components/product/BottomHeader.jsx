/* eslint-disable react/jsx-key */
import { useContext, useState } from "react";
import { LuRefreshCcw, LuSettings } from "react-icons/lu";
import { FaHandPaper, FaRegMoneyBillAlt } from "react-icons/fa";
import { AiFillGift } from "react-icons/ai";
import Discount from "./Discount";
import Payment from "./Payment";
import { productContext } from "../../App";
import Tax from "./Tax";
import Cancel from "./Cancel";
import Hold from "./Hold";

const BottomHeader = ({ total, netPayment, discountType, setDiscountType }) => {
  const [modal, setModal] = useState("");
  const [cartProduct, setCartProduct] = useContext(productContext);

  const modalComponents = {
    Cancel: <Cancel />,
    Setting: (
      <Tax
        setModal={setModal}
        discountType={discountType}
        setDiscountType={setDiscountType}
      />
    ),
    Hold: <Hold setModal={setModal} netPayment={netPayment} />,
    Discount: <Discount setModal={setModal} total={total} />,
    Pay: <Payment setModal={setModal} netPayment={netPayment} />,
  };

  return (
    <div className=" py-5 w-full">
      <div className=" ml-5  ">
        <div className="flex  border-l border-[#888888] ">
          {[
            ["Cancel", <LuRefreshCcw />],
            ["Setting", <LuSettings />],
            ["Hold", <FaHandPaper />],
            ["Discount", <AiFillGift />],
            ["Pay", <FaRegMoneyBillAlt />],
          ].map(([title, icon]) => (
            <div>
              {cartProduct.length <= 0 ? (
                <li
                  key={title}
                  className="flex gap-1 items-center whitespace-nowrap list-none border border-l-0 border-primary text-primary sm:text-sm text-[13px]  px-[34px] py-3 rounded-sm  font-normal"
                >
                  <span> {icon}</span> {title}
                </li>
              ) : (
                <buttton
                  key={title}
                  disabled={true}
                  onClick={() => {
                    setModal(title);
                  }}
                  className="flex gap-1 items-center whitespace-nowrap list-none border border-l-0 border-primary text-primary sm:text-sm text-[13px]  px-[34px] py-3 rounded-sm  font-normal hover:bg-primary hover:text-white cursor-pointer transition duration-500"
                >
                  <span> {icon}</span> {title}
                </buttton>
              )}
            </div>
          ))}
        </div>
        {modal && modalComponents[modal]}
      </div>
    </div>
  );
};

export default BottomHeader;
