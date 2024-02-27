
import { Hotel } from "../../constants/data";
import HomeListingMain from "./HomeListingMain";
import Sidebar from "./Sidebar";

const HomeListingHotel = ({hotels}:{hotels: Hotel[]}) => {
  return (
    <div className={`relative w-full mt-10 bg-[#F7F7F7]`}>
      <div className="mx-auto flex max-w-7xl py-10 items-start justify-center gap-10 padding-x">
        <Sidebar/>
        <HomeListingMain hotels={hotels}/>
        
      </div>
      
    </div>
  );
};

export default HomeListingHotel;
