import { CheckCircle2 } from "lucide-react";
import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import ListDesc from "../../components/listproperty/ListDesc";
import ListBanner from "../../components/listproperty/ListBanner";
import Collaborate from "../../components/listproperty/Collaborate";
import Faqs from "../../components/homelistingdetails/Faqs";

const ListProperty = () => {
  return (
    <div className="w-full bg-[#F7F7F7] ">
      <Navbar bg="bg-[#0351FC]" />
      <header className="w-full bg-[#002D8F] ">
        <div className="flex justify-center flex-col gap-5 items-center mx-auto max-w-7xl py-16 padding-x">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            List your Property with Comfort
          </h1>
          <p className="text-white tracking-wide">
            Create a partner account to get started:
          </p>
          <button className="bg-[#0351FC] text-white py-2 px-6 rounded-md">
            Get Started
          </button>
        </div>
      </header>
      <div className="flex justify-center items-center gap-10 flex-wrap mt-[-40px]">
        <div className="flex justify-center items-center flex-col py-10 px-10 gap-4 rounded-lg border border-gray-200 bg-white w-[300px]">
          <CheckCircle2 color="white" fill="green" size={40} />
          <span className="text-black text-sm text-center">
            More than 6.4 million vacation <br /> rentals already listed
          </span>
        </div>
        <div className="flex justify-center items-center flex-col py-10 px-10 gap-4 rounded-lg border border-gray-200 bg-white w-[300px]">
          <CheckCircle2 color="white" fill="green" size={40} />
          <span className="text-black text-sm text-center">
            Over 1 billion vacation rental
            <br /> guest arrivals
          </span>
        </div>
        <div className="flex justify-center items-center flex-col py-10 px-10 gap-4 rounded-lg border border-gray-200 bg-white w-[300px]">
          <CheckCircle2 color="white" fill="green" size={40} />
          <span className="text-black text-sm text-center">
            More than 6.4 million vacation <br /> rentals already listed
          </span>
        </div>
      </div>
      <ListDesc/>
      <ListBanner/>
      <Collaborate/>
      <Faqs/>
      <Footer />
    </div>
  );
};

export default ListProperty;
