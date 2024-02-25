import { useRef, useState } from "react";
import { Formik, Field, Form } from "formik";
import Close from "../shere/Close";

const AddNote = ({ setModal }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const closeModal = () => {
    setIsOpen(false);
    setModal("");
  };

  const handleOutsideClick = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      closeModal();
    }
  };

  return (
    <div>
      {isOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center z-[9999] bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5 m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title=" Add note to the order" closeModal={closeModal} />
              <hr />
              <div className="mt-3">
                <p className="text-sm text-[#000000] font-normal">order note</p>

                <Formik
                  initialValues={{ description: "" }}
                  onSubmit={(values, actions) => {
                    closeModal();
                  }}
                >
                  <Form>
                    <Field
                      as="textarea"
                      name="description"
                      rows="7"
                      cols="55"
                      className="border rounded border-gray-300 focus:outline-1 focus:ring focus:outline-gray-200  "
                    />
                    <p className="text-sm font-normal text-[#888888] mb-6">
                      This note will be attached to the current order.
                    </p>
                    <hr />
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={() => closeModal()}
                        className=" my-10 rounded h-9 w-[76px]  bg-red-700 text-white"
                      >
                        Close
                      </button>
                      <button
                        type="submit"
                        className=" mt-10 rounded h-9 w-[88px]  bg-[#038FCF] text-white"
                      >
                        submit
                      </button>
                    </div>
                  </Form>
                </Formik>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
