import { useContext, useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import Swal from "sweetalert2";
import Close from "../shere/Close";
import { amaountContext, discountContext, productContext } from "../../App";
const Shiping = ({ setModal }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [cartProduct, setCartProduct] = useContext(productContext);
  const [inputAmaount, setInputAmaount] = useContext(amaountContext);
  const [selectValue, setSelectValue] = useContext(discountContext);
  const initialValues = {
    item: "",
    desc: "",
    price: "",
    quantity: "",
    discount: "",
    tax: "",
  };
  const closeModal = () => {
    setIsOpen(false);
    setModal("");
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  const errorModal = (data) => {
    Swal.fire({
      icon: "error",
      text: data,
    });
  };

  const onSubmit = (value) => {
    console.log(value.disc);
    const tax =
      value.tax == ""
        ? 0
        : ((Number(value.tax) * Number(value.price)) / 100).toFixed(3);

    if (value.item != "" && value.price != "" && value.quantity != "") {
      setCartProduct([
        ...cartProduct,
        {
          productName: value.item,
          price: Number(value.price),
          quantity: Number(value.quantity),
          desc: value.desc,
          id: Math.random().toFixed(2),
          discount: value.disc ? Number(value.disc) : 0,
          disType: value.discount,
          tax: tax,
          isAdd: true,
        },
      ]);

      closeModal();
    } else {
      // eslint-disable-next-line no-unused-expressions
      return value.item === ""
        ? errorModal("Item name can not be empty")
        : value.price === ""
        ? errorModal("Price cant not be zero or empty")
        : value.quantity === ""
        ? errorModal("Quantity cant not be zero or empty")
        : "";
    }
  };
  const style =
    " border border-[#BFBFBF]  w-full h-9  px-3  placeholder:font-normal placeholder:text-[#888888] placeholder:text-sm   focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm";
  return (
    <div className="">
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[99] bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5  m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title=" Add custom item" closeModal={closeModal} />
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
                                className=" border border-[#BFBFBF] w-full px-3  placeholder:font-normal placeholder:text-[#888888] placeholder:text-sm   focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-3/12 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Unit Price
                              </label>
                            </div>

                            <div className="sm:w-9/12 block">
                              <Field
                                name="price"
                                type="text"
                                placeholder="Unit price"
                                className={`${style}`}
                              ></Field>
                            </div>
                          </div>
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-3/12 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Quantity
                              </label>
                            </div>

                            <div className="sm:w-9/12 block">
                              <Field
                                name="quantity"
                                type="text"
                                placeholder="Quantity"
                                className={`${style}`}
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
                                type="text"
                                as="select"
                                className=" border border-[#BFBFBF] w-full h-9  px-3 focus:outline-1 focus:ring focus:outline-gray-200 s"
                              >
                                <option selected value="0">
                                  Not seleceted
                                </option>
                                <option value="1.5"> Import 1.500</option>
                                <option value="2.3"> Export 2.300</option>
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
                            Add Product To Cart
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

export default Shiping;
