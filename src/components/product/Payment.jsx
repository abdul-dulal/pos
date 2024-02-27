import { useRef, useState } from "react";
import Close from "../shere/Close";
import Cash from "./Cash";
import Card from "../Card";

const Payment = ({ setModal, netPayment }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [selectedValue, setSelectedctValue] = useState("cash");

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
          className="fixed inset-0 flex items-center justify-center z-[99] bg-[rgba(0,0,0,0.4)] overflow-y-scroll"
          onClick={handleOutsideClick}
        >
          <div className="xl:w-2/6 lg:w-3/6 md:w-3/5 w-4/5 m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title="Payment" closeModal={closeModal} />
              <hr />
              <div className="mt-3">
                <div className="sm:flex block  items-center">
                  <div className="sm:w-2/6 block">
                    <label className=" text-sm text-[#888888] font-normal  ">
                      Discount Type
                    </label>
                  </div>
                  <div className="sm:w-2/6 block">
                    <select
                      onChange={({ target }) =>
                        setSelectedctValue(target.value)
                      }
                      className="bg-white border border-[#BFBFBF] w-full h-9  px-3 text-sm text-[#888888] font-normal focus:outline-0 focus:ring-0   "
                    >
                      <option value="cash">Cash</option>
                      <option value="card">Card</option>
                      <option value="cheque">Cheque</option>
                    </select>
                  </div>
                </div>
              </div>
              {selectedValue === "cash" && (
                <Cash netPayment={netPayment} closeModal={closeModal} />
              )}
              {selectedValue === "card" && (
                <Card
                  netPayment={netPayment}
                  closeModal={closeModal}
                  selectedValue={selectedValue}
                  setSelectedctValue={setSelectedctValue}
                />
              )}
              {selectedValue === "cheque" && (
                <Card
                  netPayment={netPayment}
                  closeModal={closeModal}
                  selectedValue={selectedValue}
                  setSelectedctValue={setSelectedctValue}
                />
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Payment;
