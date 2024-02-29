import { ArrowLeft, Heart, MapPin, Share2, Star } from "lucide-react";
import { useState } from "react";
import { RoomsRow } from "../dialog/RoomsRow";
type PopupId = number | null;

const Description = () => {
  const [currentPopup, setCurrentPopup] = useState<PopupId>(null);

  const openPopup = (popupId: number) => {
    setCurrentPopup(popupId);
  };

  const closePopup = () => {
    setCurrentPopup(null);
  };
  return (
    <div className="w-full">
      <div className="mx-auto max-w-7xl padding-x py-10 flex flex-col  gap-5">
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="flex flex-col gap-4 ">
            <h2 className="text-2xl font-semibold md:text-4xl text-black">
              Paris Standard Deluxe
            </h2>
            <div className="flex justify-start items-center gap-2 flex-wrap">
              <div className="flex gap-1">
                <Star color="yellow" fill="yellow" size={18} />
                <Star color="yellow" fill="yellow" size={18} />
                <Star color="yellow" fill="yellow" size={18} />
                <Star color="yellow" fill="yellow" size={18} />
                <Star color="yellow" fill="yellow" size={18} />
              </div>
              <div className="text-sm md:text-base font-semibold text-[#0351FC]">
                4.5/5
                <span className="text-sm md:text-base text-black pl-3 font-normal">
                  Wonderfull. 228 reviews
                </span>
              </div>
            </div>
            <div className="flex justify-start items-center flex-wrap gap-2">
              <MapPin size={18} />
              <span className="text-sm md:text-base">
                Francisco Román Alarcón1060 W Addison St #13 Chicago, IL 60613
              </span>
              <button className="font-semibold underline text-[#0351FC]">
                Show On map
              </button>
            </div>
          </div>
          <div className="flex flex-row md:flex-col justify-center items-center gap-10">
            <div className="flex gap-5">
              <Heart color="gray" fill="gray" className="cursor-pointer" />
              <Share2 color="#0351FC" className="cursor-pointer" />
            </div>
            <button
              onClick={() => {
                (
                  document.getElementById("my_modal_3") as HTMLDialogElement
                ).showModal();
                openPopup(1);
              }}
              className="text-white bg-[#0351FC] rounded-md py-2 px-6"
            >
              Book Now
            </button>
          </div>
        </div>
        <hr className="my-5" />
        <p className="text-sm md:text-[16px] leading-7 text-[#000000]">
          Welcome to our hotel! We are pleased to offer a variety of rooms that
          are designed to provide a comfortable and relaxing stay for our
          guests. Whether you are traveling for business or leisure, we have the
          perfect room to meet your needs. Our standard rooms are spacious and
          well-appointed, with comfortable beds, plush pillows, and luxurious
          linens to ensure a good night’s sleep. The rooms also come equipped
          with modern amenities such as flat-screen TVs, mini-fridges, and
          high-speed internet access to keep you connected during your stay.
          Each room has a private bathroom with fresh towels, complimentary
          toiletries, and hairdryers for your convenience. The rooms also come
          equipped with modern amenities such as flat-screen TVs, mini-fridges,
          and high-speed internet access to keep you connected during your stay.
          Each room has a private bathroom with fresh towels, complimentary
          toiletries, and hairdryers for your convenience.
        </p>
        {/* dialog section */}

        <dialog id="my_modal_3" className="modal ml-[5%] mt-[5%] border-2 ">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="blue" size={28} />
              </button>
            </form>
            <div className="overflow-y-auto">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                Selects Rooms
              </h2>
              <div className="flex justify-between items-center bg-[#bed4ddbd]  rounded-md p-3 mt-2">
                <div className="text-sm md:text-base text-black">
                  Save up to 10% off by login or registration
                </div>
                <div className="flex justify-center items-center gap-5 ">
                  <button className="border border-[#0351FC] rounded-md text-[#0351FC] py-2 px-4">
                    Sign Up
                  </button>
                  <button className=" bg-[#0351FC] rounded-md text-[#FFFFFF] py-2 px-4">
                    Sign In
                  </button>
                </div>
              </div>

              <RoomsRow />
            </div>

            <div className="absolute bottom-1 right-1 flex justify-end items-center">
              <button
                onClick={() =>
                  (
                    document.getElementById("my_modal_4") as HTMLDialogElement
                  ).showModal()
                }
                className="text-white   border border-primary py-2 px-6 w-max bg-primary focus:outline-none bg-[#0351FC] font-semibold rounded text-lg"
              >
                Next Step
              </button>
            </div>
          </div>
        </dialog>
        <dialog id="my_modal_4" className="modal border-2 w-full">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h1 className="font-bold text-2xl text-gray-900"></h1>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl text-gray-900 text-center sm:my-9 my-4">
                How many hotel are you listing?
              </h1>
              <div className="px-32 flex flex-row justify-center items-center gap-5 my-5">
                <div className="border-2 hover:border-primary border-gray-400 cursor-pointer  rounded-md flex px-9 py-9 flex-col">
                  <img
                    className="sm:h-[76px] h-[20px] "
                    src="assets/images/popup/logo1.svg"
                    alt=""
                  />
                  <p className="text-gray-400 text-center my-4">
                    One hotel with one or multiple rooms that guests can book
                  </p>
                </div>
                <div className="border-2 hover:border-primary border-gray-400 cursor-pointer  rounded-md flex px-9 py-9 flex-col">
                  <img
                    className="sm:h-[76px] h-[20px]"
                    src="assets/images/popup/logo3.svg"
                    alt=""
                  />
                  <p className="text-gray-400 text-center my-4">
                    Multiple hotels with one or multiple rooms that guests can
                    book
                  </p>
                </div>
              </div>
              <button
                onClick={() =>
                  (
                    document.getElementById("my_modal_5") as HTMLDialogElement
                  ).showModal()
                }
                className="text-white hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full bg-primary focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </dialog>
        <dialog id="my_modal_5" className="modal border-2 w-full">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h1 className="font-bold text-2xl text-gray-900"></h1>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl text-gray-900 text-center sm:my-9 my-4">
                How many hotel are you listing?
              </h1>
              <div className="px-28 flex flex-row justify-center items-start gap-5 my-5">
                <div className="border-2 hover:border-primary border-gray-400 cursor-pointer  rounded-md flex px-9 py-9 flex-col">
                  <img
                    className="sm:h-[76px] h-[20px] "
                    src="assets/images/popup/logo1.svg"
                    alt=""
                  />
                  <p className="text-gray-400 text-center my-4">
                    One hotel with one or multiple rooms that guests can book
                  </p>
                </div>
                <div className="">
                  <div className="border-2 hover:border-primary border-gray-400 cursor-pointer  rounded-md flex px-9 py-9 flex-col">
                    <img
                      className="sm:h-[76px] h-[20px]"
                      src="assets/images/popup/logo3.svg"
                      alt=""
                    />
                    <p className="text-gray-400 text-center my-4">
                      Multiple hotels with one or multiple rooms that guests can
                      book
                    </p>
                  </div>
                  <label className="leading-7 mt-4 text-sm text-gray-900 font-semibold ">
                    Number of properties
                  </label>
                  <input
                    type="number"
                    id="name"
                    name="name"
                    placeholder="Enter Email Address"
                    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <button
                onClick={() =>
                  (
                    document.getElementById("my_modal_6") as HTMLDialogElement
                  ).showModal()
                }
                className="text-white hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full bg-primary focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg"
              >
                Continue
              </button>
            </div>
          </div>
        </dialog>
        <dialog id="my_modal_6" className="modal border-2 w-full">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h1 className="font-bold text-2xl text-gray-900"></h1>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl text-gray-900 text-center sm:my-9 my-4">
                Multiple properties where guests can book a room
              </h1>
              <div className="sm:px-28 px-6 flex flex-row justify-center items-start gap-5 my-5">
                <div className="">
                  <div className="border-2 border-primary cursor-pointer  rounded-md flex sm:px-9 px-2 sm:py-16 py-3 flex-col">
                    <img
                      className="sm:h-[76px] h-[20px]"
                      src="assets/images/popup/logo3.svg"
                      alt=""
                    />
                    <p className="text-gray-400 text-center my-4">
                      Multiple hotels with one or multiple rooms that guests can
                      book
                    </p>
                  </div>
                </div>
              </div>
              <button
                onClick={() =>
                  (
                    document.getElementById("my_modal_7") as HTMLDialogElement
                  ).showModal()
                }
                className="text-white hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full bg-primary focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg"
              >
                Continue
              </button>
              <button className="text-primary hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full transition-all  hover:bg-primary focus:outline-none font-semibold rounded text-lg">
                No, I need to make a change
              </button>
            </div>
          </div>
        </dialog>
        <dialog id="my_modal_7" className="modal border-2 w-full">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            </form>
            <div className="">
              <h1 className="font-bold text-2xl text-gray-900"></h1>
            </div>

            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl text-gray-900 text-center sm:my-9 my-4">
                Multiple properties where guests can book a room
              </h1>
              <div className="sm:px-28 px-6 flex flex-row justify-center items-start gap-5 my-5">
                <div className="">
                  <div className="border-2 border-primary cursor-pointer  rounded-md flex sm:px-9 px-2 sm:py-16 py-3 flex-col">
                    <img
                      className="sm:h-[76px] h-[20px] "
                      src="assets/images/popup/logo1.svg"
                      alt=""
                    />
                    <p className="text-gray-400 text-center my-4">
                      Multiple hotels with one or multiple rooms that guests can
                      book
                    </p>
                  </div>
                </div>
              </div>
              <button className="text-white hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full bg-primary focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg">
                Continue
              </button>
              <button className="text-primary hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full transition-all  hover:bg-primary focus:outline-none font-semibold rounded text-lg">
                No, I need to make a change
              </button>
            </div>
          </div>
        </dialog>
      </div>
    </div>
  );
};

export default Description;
