import StarRatings from "react-star-ratings";
import { MapPin } from 'lucide-react';

export interface TopPrimepCard {
  title: string;
location: string;
startPrice:number;
finalPrice:number;
ratings:number;
reviews:number;
  picture: string;
}





function TopPrimpeCard({
  title,

  location,
  startPrice,
  finalPrice,
  ratings,
  reviews,
  picture
}: TopPrimepCard) {


  return (
    <>
      <div className=" mx-auto flex flex-col gap-2 w-[90%] justify-between bg-[#FFF]">
        <div className="relative w-full mx-auto h-[220px]">
          <img className='w-full h-full' src={picture} alt="not found"  />
        </div>

        <StarRatings
        
              rating={5}
              starRatedColor="#0351FC"
              numberOfStars={ratings}
              starDimension="20px"
              starSpacing="2px"
              name="rating"
            />


        <h1 className="text-[#000]  text-[18px] font-normal">
        


          {title}
         
        </h1>
        <h2 className="flex text-[12px] text-[#00] items-center gap-2"><MapPin/> {location}</h2>
        
        <hr />
        <h3 className="text-[#000] text-[18px] font-thin">from <del className="text-[#ADADAD] mx-2" >${startPrice}</del> <b> ${finalPrice}</b></h3>
        <h3 className="rating text-[#000]"><b className="mx-2">{ratings}/5</b>wonderful {reviews} reviews</h3>

       

      </div>
    </>
  );
}

export default TopPrimpeCard;