import { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";

const ShipingAddress = ({ closeModal }) => {
  const [countries, setCountries] = useState([]);
  const initialValues = {
    fName: "",
    lName: "",
    taxId: "",
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => {
        setCountries(data);
      });
  }, []);

  const onSubmit = (values) => {
    console.log(values);
    closeModal();
  };
  return (
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
                    City
                  </label>
                </div>

                <div className="sm:w-4/6 block">
                  <Field
                    name="city"
                    type="text"
                    placeholder=" city"
                    className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
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
                    placeholder=" state"
                    className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                  ></Field>
                </div>
              </div>

              <div className="sm:flex block  items-center">
                <div className="sm:w-1/6 block">
                  <label className=" text-sm text-[#888888] font-normal  ">
                    Zip
                  </label>
                </div>

                <div className="sm:w-4/6 block">
                  <Field
                    name="zip"
                    type="text"
                    placeholder=" Zip code"
                    className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
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
                    className="bg-white border border-[#BFBFBF] w-full h-9  px-3 placeholder:text-sm font-normal text-[#888888]    focus:outline-1 focus:ring focus:outline-gray-200  rounded-sm"
                  >
                    {countries.map((country, index) => (
                      <option key={index} value={country.name.common}>
                        {country.name.common}
                      </option>
                    ))}
                  </Field>
                </div>
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
                className=" mt-10 rounded h-9 w-[88px]  bg-[#038FCF] text-white"
              >
                submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ShipingAddress;
