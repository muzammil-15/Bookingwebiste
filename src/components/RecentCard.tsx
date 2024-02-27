import React from 'react';
import "../index.css"

interface Card {
  image: string;
  title: string;
  price: string;
  location: string;
  ratings: string;
  reviews: string;
}

const RecentCard: React.FC<{ card: Card }> = ({ card }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-start gap-5 md:gap-8 items-center w-[90%] sm:w-[500px] bg-white border border-[#ADADAD] rounded-md ">
      <img src={card.image} alt="img" className=" h-[250px] w-full sm:w-[206px] sm:h-[206px]" />
      <div className="h-full flex flex-col py-5 pr-1 gap-3 ">
        <h3 className="text-base md:text-lg font-bold text-black">{card.title}</h3>

        <span className="text-base md:text-lg font-bold text-black">{card.price}</span>
        <div className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-map-pin"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          <span className="text-sm md:text-base text-black">{card.location}</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-base md:text-lg font-bold text-black">{card.ratings}</span>
          <span className="text-sm md:text-base text-black">{card.reviews}</span>
        </div>
      </div>
    </div>
  );
};

export default RecentCard;
