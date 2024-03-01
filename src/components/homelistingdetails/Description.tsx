import { ArrowLeft, CheckCircle2, Heart, MapPin, Share2, Star } from "lucide-react";
import { useState } from "react";
import { RoomsRow } from "../dialog/RoomsRow";
import DetailsForm from "../dialog/DetailsForm";
import DetailsFormtwo from "../dialog/DetailsFormtwo";
import { Link } from "react-router-dom";
type PopupId = number | null;

const Description = () => {
  const [currentPopup, setCurrentPopup] = useState<PopupId>(null);

  const openPopup = (popupId: number) => {
    setCurrentPopup(popupId);
  };

  const closePopup = () => {
    setCurrentPopup(null);
  };

  console.log(currentPopup, closePopup)
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

        <dialog id="my_modal_3" className="relative modal border-2 w-full bg-white">
          <div className="modal-box p-5 w-11/12 max-w-5xl h-[90vh]   ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
              </button>
            </form>
            <div className="overflow-y-auto h-[95%] w-full flex flex-col mt-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-left md:text-center">
                Selects Rooms
              </h2>
              <div className=" overflow-hidden flex justify-between items-start flex-col md:flex-row md:items-center gap-5 bg-[#bed4ddbd] w-full  rounded-md p-3 mt-2">
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
              <div className="mt-5 mr-5 flex justify-end items-center">
                <button
                  onClick={() =>
                    (
                      document.getElementById("my_modal_4") as HTMLDialogElement
                    ).showModal()
                  }
                  className="text-white   border border-primary py-1 px-4 w-max focus:outline-none bg-[#0351FC] font-medium rounded text-base"
                >
                  Next Step
                </button>
              </div>
            </div>

          </div>
        </dialog>
        <dialog id="my_modal_4" className="relative modal border-2 w-full bg-white">
          <div className="modal-box p-5 w-11/12 max-w-5xl h-[90vh]  ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
              </button>
            </form>
            <div className="overflow-y-auto h-[95%] flex flex-col mt-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                Enter Your Details
              </h2>
              <div className="flex justify-center items-center  rounded-md p-3 ">
                <div className="text-sm md:text-base text-[#409B19]">
                Almost done! Just fill in the * required info
                </div>
                
              </div>

              <DetailsForm />
              <div className="mt-5 mr-5 flex justify-end items-center">
                <button
                  onClick={() =>
                    (
                      document.getElementById("my_modal_5") as HTMLDialogElement
                    ).showModal()
                  }
                  className="text-white   border border-primary py-1 px-4 w-max focus:outline-none bg-[#0351FC] font-medium rounded text-base"
                >
                  Next Final step
                </button>
              </div>
            </div>

          </div>
        </dialog>
        <dialog id="my_modal_5" className="relative modal border-2 w-full bg-white">
          <div className="modal-box p-5 w-11/12 max-w-5xl h-[90vh]  ">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
              </button>
            </form>
            <div className="overflow-y-auto h-[95%] flex flex-col mt-5">
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                Enter Your Details
              </h2>
              <div className="flex justify-center items-center  rounded-md p-3 ">
                <div className="text-sm md:text-base text-[#409B19]">
                Almost done! Just fill in the * required info
                </div>
                
              </div>

              <DetailsFormtwo />
              <div className="mt-5 mr-5 flex justify-end items-center">
                <button
                  onClick={() =>
                    (
                      document.getElementById("my_modal_6") as HTMLDialogElement
                    ).showModal()
                  }
                  className="text-white   border border-primary py-1 px-4 w-max focus:outline-none bg-[#0351FC] font-medium rounded text-base"
                >
                  Complete Booking
                </button>
              </div>
            </div>

          </div>
        </dialog>
        <dialog id="my_modal_6" className="relative modal border-2 w-full bg-white">
          <div className="modal-box p-5 w-11/12 max-w-5xl h-[90vh]  ">
            <div className="overflow-y-auto h-[95%] gap-5 flex justify-center items-center flex-col mt-5">
            <CheckCircle2 color="white" fill="green" size={80} />
              
              <h2 className="text-2xl md:text-3xl font-semibold text-center">
                Great ! Booking Complete
              </h2>
              <p className="text-sm md:text-base w-full md:w-[60%] text-center">Your booking has been done with "Paris Standard Deluxe" at 12-07-2023 to 14-07-2023</p>
              

                <Link to={"/"}>
                <button
                  
                  className="text-white   border border-primary py-2 px-4 w-max focus:outline-none bg-[#0351FC] font-medium rounded text-base"
                >
                  Go to Home
                </button>
                </Link>
                
            </div>

          </div>
        </dialog>
        {/* <dialog id="my_modal_7" className="modal border-2 w-full">
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
        </dialog> */}
      </div>
    </div>
  );
};

export default Description;
