import React from "react";
import { Formik, Field, Form } from "formik";

import { ErrorModal } from "./shere/ErrorModal";
import { Voucher } from "./product/Voucher";

const Card = ({
  netPayment,
  closeModal,
  selectedValue,
  setSelectedctValue,
}) => {
  const initialValues = {
    number: "",
    additional: "",
  };

  const onSubmit = (value) => {
    if (value.number === "") {
      return ErrorModal("Card number can not be empty");
    }

    if (value.additional === "") {
      return ErrorModal("Additional data can not be empty");
    }
    if (value.amaount >= parseFloat(netPayment)) {
    } else {
      return ErrorModal("Paid amaount can not be less than bil");
    }
    Voucher(netPayment);
    window.location.reload();
    closeModal();
  };
  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        <Form>
          <div className="sm:flex block  items-center mt-3">
            <div className="sm:w-2/6 block">
              <label className="print:text-3xl text-sm text-[#888888] font-normal  after:content-['_*'] after:content-mt-2  after:text-red-700  after:text-sm ">
                {selectedValue === "card" ? "Card Number" : "Cheque number"}
              </label>
            </div>
            <div className="flex sm:w-3/6 ">
              <Field
                name="number"
                className="bg-white border border-[#BFBFBF] w-full h-9  px-3 text-sm text-[#888888] font-normal focus:outline-1 focus:ring focus:outline-gray-200  "
              />
            </div>
          </div>

          <div className="sm:flex block  items-center mt-3">
            <div className="sm:w-2/6 block">
              <label className=" text-sm text-[#888888] font-normal  after:content-['_*'] after:content-mt-2  after:text-red-700  after:text-sm  ">
                Additional Data
              </label>
            </div>
            <div className="flex sm:w-3/6 ">
              <Field
                name="additional"
                className="bg-white border border-[#BFBFBF] w-full h-9  px-3 text-sm text-[#888888] font-normal focus:outline-1 focus:ring focus:outline-gray-200  "
              />
            </div>
          </div>

          <div className="sm:flex block  items-center mt-3">
            <div className="sm:w-2/6 block">
              <label className="print:text-3xl text-sm text-[#888888] font-normal  ">
                Order Amaount
              </label>
            </div>
            <div className="flex sm:w-3/6 ">
              <Field
                value={netPayment}
                className="bg-gray-200 border border-[#BFBFBF] w-full h-9  px-3 text-sm text-[#888888] font-normal focus:outline-1 focus:ring focus:outline-gray-200  "
              />
            </div>
          </div>
          <div className="sm:flex block  items-center mt-3">
            <div className="sm:w-2/6 block">
              <label className=" text-sm text-[#888888] font-normal  ">
                Paid
              </label>
            </div>
            <div className="flex sm:w-3/6 ">
              <Field
                name="amaount"
                className="bg-white border border-[#BFBFBF]  w-full h-9  px-3 text-sm text-[#888888] font-normal focus:outline-1 focus:ring focus:outline-gray-200   "
              />
            </div>
          </div>
          <div className="sm:flex block  items-center mt-3">
            <div className="sm:w-2/6 block">
              <label className=" text-sm text-[#888888] font-normal  ">
                Return
              </label>
            </div>
            <div className="flex sm:w-3/6 ">
              <Field
                type="text"
                name="return"
                value="000"
                className="bg-gray-200 border border-[#BFBFBF] w-full h-9  px-3 text-sm text-[#888888] font-normal focus:outline-1 focus:ring focus:outline-gray-200   "
              />
            </div>
          </div>
          <div className="flex justify-end gap-3">
            <button
              onClick={() => closeModal()}
              className=" my-10 rounded h-9 w-[76px]  bg-red-700 text-white"
            >
              Close
            </button>
            <button
              type="submit"
              className="print:text-xl mt-10 rounded h-9 w-[88px]  bg-[#038FCF] text-white"
            >
              submit
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default Card;
