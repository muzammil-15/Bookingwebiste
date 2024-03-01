const detail = [
  {
    Room: "Delux Double Room",
    Guest: "2 Guest",
    Price: "USD 250",
    Refund: "Non Refundable",
  },
  {
    Room: "Delux Double Room",
    Guest: "2 Guest",
    Price: "USD 250",
    Refund: "Non Refundable",
  },
  {
    Room: "Delux Double Room",
    Guest: "2 Guest",
    Price: "USD 250",
    Refund: "Non Refundable",
  },
  {
    Room: "Delux Double Room",
    Guest: "2 Guest",
    Price: "USD 250",
    Refund: "Non Refundable",
  },

  
  
];

export function RoomsRow() {
  return (
    <>
      <section className=" ">
        <div className="mt-6 flex flex-col">
          <div className=" overflow-x-auto ">
            <div className="inline-block min-w-full py-2 align-middle ">
              <div className=" border-b border-gray-200 md:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {detail.map((d, i) => (
                      <tr key={i}>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm  text-black font-medium md:font-bold">
                            {d.Room}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-black font-medium md:font-bold">
                            {d.Guest}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-black font-medium md:font-bold">
                            {d.Price}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <div className="text-sm text-black font-medium md:font-bold">
                            {d.Refund}
                          </div>
                        </td>
                        <td className="whitespace-nowrap px-4 py-4">
                          <select name="" id="" className="text-sm text-black p-2 outline-none border border-gray-600 rounded-md">
                            <option value="">Select rooms 0</option>
                            <option value="">2 rooms</option>
                            <option value="">3 rooms</option>
                            <option value="">4 rooms</option>
                            <option value="">5 rooms</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
