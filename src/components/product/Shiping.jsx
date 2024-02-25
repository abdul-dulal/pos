import { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import Close from "../shere/Close";

const Shiping = ({ setModal }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const initialValues = {
    fName: "",
    lName: "",
    taxId: "",
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
  const onSubmit = (value) => {
    console.log(value);
    closeModal();
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5  m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title="Add note to the order" closeModal={closeModal} />
              <hr />
              <div className="mt-3">
                <p className="text-sm text-[#000000] font-normal">order note</p>

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
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Name
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="name"
                                type="text"
                                value="Walking Customer"
                                readOnly
                                className=" border border-[#BFBFBF] bg-[#E9ECEF] w-full h-9  px-3  font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>

                          <div className="sm:flex block  items-center">
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Email
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="email"
                                type="email"
                                value="Email"
                                readOnly
                                className="bg-[#E9ECEF] border border-[#BFBFBF] w-full h-9  px-3 text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>

                          <div className="sm:flex block  items-center">
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Street
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="street"
                                type="text"
                                value="864 Sussex Court"
                                readOnly
                                className="bg-[#E9ECEF] border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                City
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="city"
                                type="text"
                                value="Waco"
                                readOnly
                                className="bg-[#E9ECEF] border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>

                          <div className="sm:flex block  items-center">
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                State
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="state"
                                type="text"
                                value="Texas"
                                readOnly
                                className="bg-[#E9ECEF] border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>
                          <div className="sm:flex block  items-center">
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Zip Code
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="zip"
                                type="text"
                                value="76706"
                                readOnly
                                className="bg-[#E9ECEF] border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              ></Field>
                            </div>
                          </div>

                          <div className="sm:flex block  items-center">
                            <div className="sm:w-1/6 block">
                              <label className=" text-sm text-[#888888] font-normal  ">
                                Country
                              </label>
                            </div>

                            <div className="sm:w-4/6 block">
                              <Field
                                name="country"
                                as="select"
                                placeholder="City"
                                readOnly
                                className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                              >
                                <option value="hello">United State</option>
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
                            className="  rounded h-9 w-[88px]  bg-[#038FCF] text-white"
                          >
                            submit
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
