import { AlarmSmoke, Cake, Clock, CookingPot, Dog, Drill, Dumbbell, Fan, Handshake, Heater, Lock,  PartyPopper,  PersonStanding,  Shirt, Tv, Wifi } from "lucide-react";


const BestFeatures = () => {
    const features = [
        {
            title:  "Tv",
            icon: <Tv color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Free Wifi",
            icon: <Wifi color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Heater",
            icon: <Heater color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Laundry",
            icon: <Shirt color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Beauty Spa",
            icon: <Handshake color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "No Smoking",
            icon: <AlarmSmoke color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Security",
            icon: <Lock color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Khichen",
            icon: <CookingPot color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Hair Dresser",
            icon: <Drill color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Gym",
            icon: <Dumbbell color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Restaurant",
            icon: <Cake color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
        {
            title:  "Air Conditionar",
            icon: <Fan color="#ADADAD" size={60} strokeWidth={2.5}/>
        },
    ]
  return (
    <div className="w-full bg-[#e7e7e7] py-10 mb-10">
      <div className="mx-auto max-w-7xl padding-x mt-5 flex flex-col  gap-5">
        <div className="flex justify-center items-center">

        <h2 className="text-2xl font-bold md:text-3xl text-black text-center border-b-2 border-[#0351FC] pb-2 w-full md:w-max ">Best Featured Amenities</h2>
        </div>
        <div className="flex justify-center items-center gap-5 md:gap-10 flex-wrap mt-10">
            {
                features.map((f, ind)=>(

            <div key={ind} className="flex flex-col justify-center items-center border border-[#ADADAD] gap-5 rounded-md bg-white py-5 md:py-10 w-[150px] md:w-[330px]">
                {f.icon}
                <span className="text-xl ">{f.title}</span>
            
            </div>
                ))
            }
        </div>
        <div className="flex flex-col gap-7 mt-5 items-start">
            <h2 className=" tex-2xl md:text-3xl font-semibold">Property Rules / Information</h2>
            <div className="flex justify-between items-center gap-5 flex-wrap ">

            <div className="flex justify-center items-center gap-3 w-1/4">
                <Clock/>
                <span>Check In : 02PM</span>
            </div>
            <div className="flex justify-center items-center gap-3 w-1/4">
                <Clock/>
                <span>Check Out : Until 12:00 PM</span>
            </div>
            <div className="flex justify-center items-center gap-3 w-1/4">
                <PersonStanding/>
                <span>No age restriction</span>
            </div>
            <div className="flex justify-center items-center gap-3 w-1/4">
                <Dog/>
                <span>Pets are not allowed</span>
            </div>
            <div className="flex justify-center items-center gap-3 w-1/4">
                <PartyPopper/>
                <span>Accepted payment methods</span>
            </div>
            <div className="flex justify-center items-center gap-3 w-1/4">
                
                <span>VISA, AMEX , PAYPAL</span>
            </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default BestFeatures;
