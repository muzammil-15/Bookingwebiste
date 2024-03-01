interface Country {
  name: string;
  code: string;
}

const DetailsFormtwo = () => {
  const countries: Country[] = [
    { name: "Afghanistan", code: "AF" },
    { name: "Albania", code: "AL" },
    { name: "Algeria", code: "DZ" },
    { name: "Andorra", code: "AD" },
    { name: "Angola", code: "AO" },
    { name: "Argentina", code: "AR" },
    { name: "Armenia", code: "AM" },
    { name: "Australia", code: "AU" },
    { name: "Austria", code: "AT" },
    { name: "Azerbaijan", code: "AZ" },
    { name: "Bahamas", code: "BS" },
    { name: "Bahrain", code: "BH" },
    { name: "Bangladesh", code: "BD" },
    { name: "Barbados", code: "BB" },
  ];

  return (
    <div className="w-full mt-5">
      <form
        action="submit"
        className="flex flex-wrap justify-start items-center gap-7"
      >
        <div className="flex flex-col gap-1 w-[250px]">
          <label htmlFor="contact" className="text-sm">
            Contact Number
          </label>
          <input
            type="number"
            placeholder="Contact Number"
            className="text-sm outline-none border border-gray-200 rounded-md p-2 "
          />
        </div>
        <div className="flex flex-col gap-1 w-[250px] md:w-[450px] ">
          <label htmlFor="region" className="text-sm">
            Country or Region
          </label>
          <select
            id="countrySelect"
            className="text-sm p-2 outline-none border border-gray-200 rounded-md"
          >
            <option value="" disabled selected>
              Select a country
            </option>
            {countries.map((country) => (
              <option key={country.code} value={country.name}>
                {country.name}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-wrap justify-center flex-col items-center w-full ">
          <h2 className="text-center text-xl md:text-2xl font-semibold ">
            How do you want to pay?
          </h2>
          <div className="flex flex-wrap justify-start w-full mt-5 items-center gap-7">
            <div className="flex flex-col gap-1 w-[250px]">
              <label htmlFor="cardHolder" className="text-sm">
                Card Holder's Name
              </label>
              <input
                type="text"
                placeholder="Card Holder's Name"
                className="text-sm outline-none border border-gray-200 rounded-md p-2 "
              />
            </div>
            <div className="flex flex-col gap-1 w-[250px]">
              <label htmlFor="cardTpe" className="text-sm">
                Card type
              </label>
              <select
                id="countrySelect"
                className="text-sm p-2 outline-none border border-gray-200 rounded-md"
              >
                <option value="" disabled selected className="p-1" hidden>
                  Select Card Type
                </option>

                  <option  value="" className="p-2">
                    VISA
                  </option>
                  <option  value="" className="p-2">
                    DEBIT
                  </option>
              </select>
            </div>
            <div className="flex flex-col gap-1 w-[250px]">
              <label htmlFor="cardNumber" className="text-sm">
                Card Number
              </label>
              <input
                type="number"
                placeholder="card number"
                className="text-sm outline-none border border-gray-200 rounded-md p-2 "
              />
            </div>
            <div className="flex flex-col gap-1 w-[250px]">
              <label htmlFor="eDate" className="text-sm">
                Expiration Date
              </label>
              <input
                type="date"
                placeholder="Expiration Date"
                className="text-sm outline-none border border-gray-200 rounded-md p-2 "
              />
              
            </div>
            <div className="flex flex-col gap-1 w-[250px]">
              <label htmlFor="cvcCode" className="text-sm">
                CVC Code
              </label>
              <input
                type="number"
                placeholder="CVC Code"
                className="text-sm outline-none border border-gray-200 rounded-md p-2 "
              />
              
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default DetailsFormtwo;
