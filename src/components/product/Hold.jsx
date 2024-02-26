import { useRef, useState } from "react";
import Close from "../shere/Close";
import Button from "../shere/Button";

const Hold = ({ setModal, netPayment }) => {
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
              <Close title="Order On Hold" closeModal={closeModal} />
              <hr />
              <div className="mt-3">
                <div className="sm:flex block items-center">
                  <div className="sm:w-2/6 block ">
                    <label className=" text-sm text-[#888888] font-normal ">
                      Order title
                    </label>
                  </div>

                  <div className="sm:w-4/6 block">
                    <input
                      name="fName"
                      placeholder="Order Title"
                      className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                    />
                  </div>
                </div>
                <div className="sm:flex block items-center mt-4">
                  <div className="sm:w-2/6 block ">
                    <label className=" text-sm text-[#888888] font-normal ">
                      Order Amaount
                    </label>
                  </div>

                  <div className="sm:w-2/6 block">
                    <input
                      name="fName"
                      value={netPayment}
                      className="bg-gray-200 border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                    />
                  </div>
                </div>
                <Button closeModal={closeModal} />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Hold;
