import { Star } from "lucide-react"


const Sidebar = () => {
  return (
    <div className="hidden lg:flex flex-col w-1/3 bg-white ">
          <h2 className="text-xl md:text-2xl font-semibold ">
            2443 Hotels Found
          </h2>
          <div className="flex flex-col border border-gray-300 rounded-md mt-4">
            {/* price section */}
            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">
                Price (United State $)
              </span>
              <div className="flex justify-center items-center gap-2 w-full">
                <div className="flex-1 flex justify-between items-center border border-gray-400 rounded-md  py-1 px-2">
                  <input
                    type="number"
                    placeholder="00"
                    className="border-none outline-none w-2/3"
                  />
                  <span className="text-[#0351FC] font-semibold">US $</span>
                </div>
                <div className="flex-1 flex justify-between items-center border border-gray-400 rounded-md  py-1 px-2">
                  <input
                    type="number"
                    placeholder="3000+"
                    className="border-none outline-none w-2/3"
                  />
                  <span className="text-[#0351FC] font-semibold">US $</span>
                </div>
              </div>
              <input
                type="range"
                className="w-full h-1 bg-[#0351FC] mt-2 rounded-lg appearance-none cursor-pointer"
              />
            </div>
            <hr className="mt-2" />

            {/* Stars section */}
            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">Rating with Stars</span>
              <div className="flex justify-center items-center gap-1 w-full">
                <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
                  <span>1</span>
                  <Star size={15} color="#FFC661" fill="#FFC661" />
                </button>
                <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
                  <span>2</span>
                  <Star size={15} color="#FFC661" fill="#FFC661" />
                </button>
                <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
                  <span>3</span>
                  <Star size={15} color="#FFC661" fill="#FFC661" />
                </button>
                <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
                  <span>4</span>
                  <Star size={15} color="#FFC661" fill="#FFC661" />
                </button>
                <button className="flex justify-center items-baseline gap-1 border border-gray-300 rounded-sm py-2 px-2">
                  <span>5</span>
                  <Star size={15} color="#FFC661" fill="#FFC661" />
                </button>
              </div>
            </div>

            <hr className="mt-2" />

            {/* Location */}
            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">By Location</span>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="karachi"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="karachi"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Location 1 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="lahore"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="lahore"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Location 2 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="islamabad"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="islamabad"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Location 3 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="multan"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="multan"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Location 4 name
                  </label>
                </div>
              </div>
            </div>

            <hr className="mt-2" />

            {/*  bed type*/}

            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">Bed Type</span>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="two"
                    name="same"
                    type="radio"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="two"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    2 beds
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="three"
                    type="radio"
                    name="same"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="three"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    3 beds
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="four"
                    type="radio"
                    name="same"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="four"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    4 beds
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="five"
                    type="radio"
                    name="same"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="five"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    5 beds
                  </label>
                </div>
              </div>
            </div>

            <hr  className="mt-2"/>
            {/* payment type */}
            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">Payment</span>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="onlinepay"
                    name="pay"
                    type="radio"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="onlinepay"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Payment Online
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="payPhisically"
                    type="radio"
                    name="pay"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="payPhisically"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Pay at hotel (Physically)
                  </label>
                </div>
              </div>
            </div>

            <hr className="mt-2"/>

            {/* Room facilities and services */}

            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">Room Facilities & Services</span>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="kitchen"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="kitchen"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Kitchen
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="wm"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="wm"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Washing Machine
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="bal"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="bal"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Balcony
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="ac"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="ac"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Air Conditioning
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="sr"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="sr"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Smoking Room
                  </label>
                </div>
              </div>
            </div>
            <hr className="mt-2"/>

            {/* Property Features */}

            <div className="w-full flex flex-col gap-2 p-2">
              <span className="text-lg font-semibold">Property Features</span>
              <div className="flex flex-col gap-2 w-full">
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="f1"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="f1"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Feature 1 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="f2"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="f2"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Feature 2 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="f3"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="f3"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Feature 3 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="f4"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="f4"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Feature 4 name
                  </label>
                </div>
                <div className="flex justify-start items-center gap-2">
                  <input
                    id="f5"
                    type="checkbox"
                    className="w-4 h-4 cursor-pointer"
                  />
                  <label
                    htmlFor="f5"
                    className="text-base text-gray-900 cursor-pointer"
                  >
                    Feature 5 name
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default Sidebar