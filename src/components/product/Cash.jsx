import React, { useState } from "react";
import { Formik, Field, Form } from "formik";

import { Voucher } from "./Voucher";
import { ErrorModal } from "../shere/ErrorModal";

const Cash = ({ netPayment, closeModal }) => {
  const initialValues = {
    amaount: "",
  };
  const onSubmit = (value) => {
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

export default Cash;
