const Button = ({ closeModal }) => {
  return (
    <div>
      <div className="flex justify-end gap-3">
        <button
          onClick={() => closeModal()}
          className=" my-10 rounded h-9 w-[76px]  bg-red-700 text-white"
        >
          Close
        </button>
        <button
          type="submit"
          onClick={() => closeModal()}
          className=" mt-10 rounded h-9 w-[88px]  bg-[#038FCF] text-white"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Button;
