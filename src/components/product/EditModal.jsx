import { useContext, useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import Close from "../shere/Close";
import { productContext } from "../../App";
const EditModal = ({ product, setModal }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [cartProduct, setCartProduct] = useContext(productContext);

  const { productName, desc, id } = product;
  const initialValues = {
    item: productName,
    desc: desc,
    discount: "0",
    tax: "",
  };
  const closeModal = () => {
    setIsOpen(false);
    setModal(false);
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const onSubmit = (value) => {
    const updatedQuatity = cartProduct.map((item) => {
      if (item.id === id) {
        return {
          ...item,
          productName: value.item,
        };
      }
      return item;
    });

    setCartProduct(updatedQuatity);
    closeModal();
  };
  const style =
    " border border-[#BFBFBF]  w-full h-9  px-3  placeholder:font-normal placeholder:text-[#888888] placeholder:text-sm   focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm";
  return (
    <div className="">
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5  m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title="Edit item information" closeModal={closeModal} />
              <hr />
              <div className="mt-3">
                <div className="px-4 mt-5">
                  <Formik
                    initialValues={initialValues}
                    validationSchema=""
                    onSubmit={onSubmit}
                  >
                    {({ errors }) => (
                      <Form>
                        <div className="space-y-4">
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-3/12 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Item Name
                              </label>
                            </div>

                            <div className="sm:w-9/12 block">
                              <Field
                                name="item"
                                type="text"
                                placeholder="Items name"
                                className={`${style}`}
                              ></Field>
                            </div>
                          </div>
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-3/12 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Description
                              </label>
                            </div>

                            <div className="sm:w-9/12 block">
                              <Field
                                name="desc"
                                as="textarea"
                                rows="2"
                                className=" border border-[#BFBFBF]  w-full  px-3  placeholder:font-normal placeholder:text-[#888888] placeholder:text-sm   focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>

                          <div className="sm:flex block  items-center">
                            <div className="sm:w-3/12 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Discount
                              </label>
                            </div>

                            <div className="flex gap-3">
                              <div className="sm:w-7/12 block">
                                <Field
                                  name="disc"
                                  type="text"
                                  className=" border border-[#BFBFBF] w-full h-9  px-3 focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                                ></Field>
                              </div>
                              <div>
                                <Field
                                  name="discount"
                                  type="text"
                                  as="select"
                                  className=" border border-[#BFBFBF] w-full h-9  px-3 focus:outline-1 focus:ring focus:outline-gray-200 s"
                                >
                                  <option selected value="%">
                                    %
                                  </option>
                                  <option value="flat">Flat</option>
                                </Field>
                              </div>
                            </div>
                          </div>
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-3/12 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Tax
                              </label>
                            </div>

                            <div className="sm:w-9/12 block">
                              <Field
                                name="tax"
                                as="select"
                                className=" border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              >
                                <option value="1.500">Import {1.5}.00</option>
                                <option value="2.30">Exmport {2.3}.00</option>
                              </Field>
                            </div>
                          </div>
                        </div>
                        <div className="flex justify-end gap-3 mt-6">
                          <button
                            onClick={() => closeModal()}
                            className="  rounded h-9 w-[76px]  bg-red-700 text-white"
                          >
                            Close
                          </button>
                          <button
                            type="submit"
                            className="  rounded h-9 px-3  bg-[#038FCF] text-white"
                          >
                            Submit
                          </button>
                        </div>
                      </Form>
                    )}
                  </Formik>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
