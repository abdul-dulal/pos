import { useRef, useState } from "react";
import CustomerInfo from "./CustomerInfo";
import ShipingAddress from "./ShipingAddress";
import Close from "../shere/Close";
const AddCustomerModal = ({ setModal }) => {
  const modalRef = useRef();
  const [isOpen, setIsOpen] = useState(true);
  const [address, setAddress] = useState("customer info");
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
          0
          <div className="xl:w-6/12 lg:w-8/12 md:w-4/5 m-auto mt-10 ">
            <div ref={modalRef} className="bg-white p-4 rounded shadow-lg">
              <Close title="Add Customer" closeModal={closeModal} />
              <hr />

              <div className="bg-white rounded-md shadow-lg my-3 px-4">
                <div className="flex gap-8 ">
                  <button
                    onClick={() => setAddress("customer info")}
                    className={`cursor-pointer uppercase text-[#000000] text-sm font-medium h-11 px-4 rounded-sm ${
                      address === "shiping" ? "bg-[#04A9F5] text-white" : ""
                    }`}
                  >
                    customer information
                  </button>
                  <button
                    onClick={() => setAddress("shiping")}
                    className={`cursor-pointer uppercase text-[#000000] text-sm font-medium ${
                      address === "shiping" ? "" : "flex-grow"
                    } text-left h-11 pl-4 rounded-sm ${
                      address === "customer info"
                        ? "bg-[#04A9F5] text-white"
                        : ""
                    }`}
                  >
                    shiping address
                  </button>
                  <button
                    className={`${
                      address === "shiping" ? "bg-[#04A9F5] flex-grow" : ""
                    }`}
                  />
                </div>
                {address === "customer info" ? (
                  <CustomerInfo closeModal={closeModal} />
                ) : (
                  <ShipingAddress closeModal={closeModal} />
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddCustomerModal;
