import StarRatings from "react-star-ratings";
import { MapPin } from 'lucide-react';
import bedsicon from ".././assets/static/beds.svg";
import adulsicon from ".././assets/static/adults.svg"
export interface TopaApartHprops {
  title: string;
location: string;

finalPrice:number;
ratings:number;
reviews:number;
  picture: string;
  adults:number;
  beds:number;
}





function TopApartHCard({
  title,

  location,
  finalPrice,
  ratings,
  reviews,
  picture,
  adults,
  beds
}: TopaApartHprops) {


  return (
    <>
      <div className=" mx-auto flex flex-col gap-2 w-[90%] border-[1px] rounded-[4px] border-[#ADADAD] justify-between bg-[#FFF]">
        <div className="relative w-full mx-auto h-[220px]">

        <button className="absolute text-blue-600 mx-2 font-normal bg-[#FFF] p-2 mt-[160px]">From ${finalPrice}/<span className="text-[#000]">night</span></button>

          <img className='w-full h-full' src={picture} alt="not found"  />

        </div>
    


        <h1 className="text-[#000] mx-2 text-[18px] font-normal">
        


          {title}
         
        </h1>

   <div className="mx-2 flex items-center text-[14px] text-[#ADADAD] gap-2">
    <div className="flex gap-2">
<img src={bedsicon} className="w-[22px] h-[18px]" alt="" />
<span>{beds} king beds</span>
    </div>
    <div className="flex gap-2">
    <img src={adulsicon} className="w-[22px] h-[18px]" alt="" />
<span>{adults} adults</span>
    </div>
   </div>


        <div className="mx-2 flex gap-2 items-center">
        <StarRatings
        
              rating={5}
              starRatedColor="#D1C900"
              numberOfStars={ratings}
              
              starDimension="20px"
              starSpacing="2px"
              name="rating"
            />

            <span className="text-[#ADADAD] text-[14px] ">reviews {reviews}</span>
            </div>









        <h2 className="flex mx-2 text-[12px] text-[#00] items-center gap-2"><MapPin/> {location}</h2>


        
        <div className="flex justify-end mx-2 mb-2 ">
        <button className="border-blue-600 p-2 rounded-[2px] text-blue-600 border-[1px] text-[18px] font-normal">Book Now</button>


        </div>

       

      </div>
    </>
  );
}

export default TopApartHCard;