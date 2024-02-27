
import RecentCard from "../RecentCard";
import recentCardImg from "../../assets/images/recentCardImg.png"
import { useState } from "react";
interface Card {
    image: string;
    title: string;
    price: string;
    location: string;
    ratings: string;
    reviews: string;
  }
const cards:Card[] = [
    {
    image: recentCardImg,
    title: " Arc New York City",
    price: "$243.00",
    location: "New York",
    ratings: "4.5/5",
    reviews: "Wonderful . 228 reviews",
  },
    {
    image: recentCardImg,
    title: " Arc New York City",
    price: "$243.00",
    location: "New York",
    ratings: "4.5/5",
    reviews: "Wonderful . 228 reviews",
  },
    {
    image: recentCardImg,
    title: " Arc New York City",
    price: "$243.00",
    location: "New York",
    ratings: "4.5/5",
    reviews: "Wonderful . 228 reviews",
  },
    {
    image: recentCardImg,
    title: " Arc New York City",
    price: "$243.00",
    location: "New York",
    ratings: "4.5/5",
    reviews: "Wonderful . 228 reviews",
  },
  ];
  interface Tab {
    title: string;
  }

const IdealProperties = () => {

    const tabs: Tab[] = [
        { title: "USA" },
        { title: "North America" },
        { title: "South America" },
        { title: "India" },
        { title: "Pakistan" },
        { title: "Africa" },
      ];
      const [selectedTab, setSelectedTab] = useState<number | null>(0);
    
      const handleClick = (index: number) => {
        setSelectedTab(index);
      };
  return (
    <div className="w-full bg-[#f0efef] py-10">
      <div className="w-full flex justify-center padding-x items-center mx-auto max-w-7xl py-10">
        <div className="w-full h-full flex flex-col gap-5">
          <h2 className="text-3xl w-full mx-auto text-center text-[#000000] font-bold border-b border-blue-600 pb-4">
          Get Inspiration for finding your ideal Property
          </h2>
          <div className="w-full mt-3 border-b border-gray-300 overflow-x-auto  rounded-md overflow-hidden flex justify-stretch items-center">
        {tabs.map((tab, index) => (
          <span
            key={index}
            className={` text-base font-normal flex-1 text-center py-2 cursor-pointer ${
              selectedTab === index ? "text-blue-500 font-bold border-b-[3px] text-xl border-blue-600" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            {tab.title}
          </span>
        ))}
      </div>
          <div className="flex w-full justify-center gap-10 items-center flex-wrap mt-12">
            {cards.map((card, ind: number) => (
              <RecentCard card={card} key={ind} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IdealProperties;
