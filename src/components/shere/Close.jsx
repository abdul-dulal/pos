/* eslint-disable react/prop-types */

import { RxCross2 } from "react-icons/rx";

const Close = ({ title, closeModal }) => {
  return (
    <div className="flex justify-between">
      <h2 className="text-lg font-normal mb-4 text-[#000000]">{title} </h2>
      <span className="cursor-pointer" onClick={() => closeModal()}>
        <RxCross2 size={20} />
      </span>
    </div>
  );
};

export default Close;
