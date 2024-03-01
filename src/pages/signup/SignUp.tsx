import { useState } from "react";
import loginImg from "../../assets/images/loginImage.jpg"
import logo1 from "../../assets/popup/logo1.svg"
import logo2 from "../../assets/popup/logo2.svg"
import logo3 from "../../assets/popup/logo3.svg"
import { ArrowLeft } from "lucide-react";
type PopupId = number | null;
const SignUp = () => {
  const [currentPopup, setCurrentPopup] = useState<PopupId>(null);

  const openPopup = (popupId: number) => {
    setCurrentPopup(popupId);
  };

  const closePopup = () => {
    setCurrentPopup(null);
  };

  console.log(currentPopup, closePopup);
  return (
    <div>
      <section className="text-gray-600 max-w-[80rem] mx-auto body-font relative">
        <div className="container   mx-auto flex justify-center  sm:flex-nowrap flex-wrap">
          <div className="lg:w-2/5 md:w-1/2 rounded-lg overflow-hidden flex justify-start relative">
            <img src={loginImg} alt="image is her!!" />
          </div>
          <div
            className="lg:w-2/4 md:w-1/2 bg-white flex flex-col  w-full md:py-8 mt-8 md:mt-0 px-16 border"
            style={{ boxShadow: "rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px" }}
          >
            <h2 className="flex items-center font-bold text-2xl text-primary">
              {/* <BsHandbagFill /> */}
              <span className="ml-3">Laterstay.com</span>
            </h2>
            <h2 className="text-gray-900 text-xl mb-1 sm:mt-6 mt-2 title-font font-bold">
              Create your partner account
            </h2>
            <p className="leading-relaxed mb-5 text-gray-900 font-semibold">
              Create an account to list and manage your property.
            </p>

            <div className="relative sm:mb-9">
              <label className="leading-7 text-sm text-gray-900 font-semibold ">
                Email
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Enter Email Address"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <button
              onClick={() => {
                (
                  document.getElementById("my_modal_3") as HTMLDialogElement
                ).showModal();
                openPopup(1);
              }}
              className="text-white bg-[#0351FC] border-0 sm:mt-0 mt-6 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
            >
              Continue
            </button>
            <div className="border my-3"></div>
            <p className="font-semibold text-gray-900 mt-3">
              Questions about your property or the Extranet? Check out{" "}
              <span className="cursor-pointer text-primary">Partner Help </span>{" "}
              or ask another partner in the{" "}
              <span className="cursor-pointer text-primary">
                Partner Community.
              </span>
            </p>

            <button className="text-primary hover:text-white mt-6 border border-primary py-2 px-6 focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg">
              Sign In
            </button>
            <div className="border my-6"></div>
            <p className="font-semibold text-gray-900 mt-3">
              By signing in or creating an account, you agree with our{" "}
              <span className="cursor-pointer text-primary">
                Terms & Conditions{" "}
              </span>{" "}
              and{" "}
              <span className="cursor-pointer text-primary">
                Privacy Statement.{" "}
              </span>
            </p>
          </div>
        </div>
        {/* dialog */}

        <dialog id="my_modal_3" className="modal border-2 w-full">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
          <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
              </button>
            </form>
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                className="sm:h-[130px] h-[20px] "
                src={logo1}
                alt=""
              />
              <img
                className="sm:h-[208px] h-[20px]"
                src={logo2}
                alt=""
              />
              <img
                className="sm:h-[130px] h-[20px]"
                src={logo3}
                alt=""
              />
            </div>
            <div className="flex justify-center items-center flex-col">
              <h1 className="font-bold text-2xl text-gray-900 text-center my-4">
                Hotel, B&Bs & More
              </h1>
              <p className="text-gray-400 sm:my-6 my-3 text-center">
                Whether it&apos;s hotels, B&Bs, guest houses, hostels, or condo
                hotels, our comprehensive platform caters to a diverse range of
                properties, serving varied accommodation needs all in one place.
              </p>
              <button
                onClick={() =>
                  (
                    document.getElementById("my_modal_4") as HTMLDialogElement
                  ).showModal()
                }
                className="text-white hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full bg-primary focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg"
              >
                List Your Property
              </button>
            </div>
          </div>
        </dialog>
        <dialog id="my_modal_4" className="modal border-2 w-full">
          <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
            <form method="dialog">
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
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
                    src={logo1}
                    alt=""
                  />
                  <p className="text-gray-400 text-center my-4">
                    One hotel with one or multiple rooms that guests can book
                  </p>
                </div>
                <div className="border-2 hover:border-primary border-gray-400 cursor-pointer  rounded-md flex px-9 py-9 flex-col">
                  <img
                    className="sm:h-[76px] h-[20px]"
                    src={logo3}
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
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
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
                    src={logo1}
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
                      src={logo3}
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
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
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
                      src={logo3}
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
              <button className="btn btn-sm btn-circle btn-ghost absolute left-2 top-2">
                <ArrowLeft color="#0351FC" size={28} />
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
                      src={logo1}
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
      </section>
    </div>
  );
};

export default SignUp;
