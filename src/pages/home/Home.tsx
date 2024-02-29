import { Navbar } from "../../components/Navbar";
import headerbg from "../../assets/images/headerbg.png";
import RecentCard from "../../components/RecentCard";
import recentCardImg from "../../assets/images/recentCardImg.png"
import HomeImage from "../../assets/images/home.png"
import Apartment from "../../assets/images/apartement.png"
import Villa from "../../assets/images/villa.png"
import Hotel from "../../assets/images/hotel.png"
import HomeApartmentCard from "../../components/HomeApartmentCard";
import elipes from "../../assets/images/elipes.png"
import PrimeProperty from "../../components/PrimeProperty";
import FiveStrHomeApart from "../../components/FiveStrHomeApart";
import TopApartHome from "../../components/TopApartHome";
import JoinUs from "../../components/JoinUs";
import TripePlane from "../../components/TripePlane";
import TrendingDestinationHoem from "../../components/TrendingDestinationHoem";
import ExplorHome from "../../components/ExplorHome";
import Footer from "../../components/Footer";
import { Link } from "react-router-dom";

interface Card {
  image: string;
  title: string;
  price: string;
  location: string;
  ratings: string;
  reviews: string;
}
interface HavhCard {
  image: string;
  title: string;
  desc: string;
}
const cards:Card[] = [
  {
  image: recentCardImg,
  title: "Hotel Arc New York City",
  price: "$243.00",
  location: "New York",
  ratings: "4.5/5",
  reviews: "Wonderful . 228 reviews",
},
  {
  image: recentCardImg,
  title: "Hotel Arc New York City",
  price: "$243.00",
  location: "New York",
  ratings: "4.5/5",
  reviews: "Wonderful . 228 reviews",
}
];
export const havhcards:HavhCard[] = [
  {
  image: HomeImage,
  title: "Luxury Home For Stay",
  desc: "Available 15,35469"
},
  {
  image: Apartment,
  title: "Luxury Apartment For Stay",
  desc: "Available 15,35469",
},
  {
  image: Villa,
  title: "Luxury Villa For Stay",
  desc: "Available 15,35469",
},
  {
  image: Hotel,
  title: "Luxury Hotel For Stay",
  desc: "Available 15,35469",
},
];

function Home() {
  return (
    <>
    {/* header starts */}
      <header
        className="w-full relative h-screen"
      >
        <img src={headerbg} alt="bg" className="absolute w-full h-full z-0" />
        <Navbar bg="bg-transparent" />
        <hr className="z-10 bg-white"/>
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 h-[90%]">
          <div className="flex flex-col justify-center items-center gap-5 md:gap-10 z-10 w-full lg:w-2/3 text-center">
            <h1 className="text-[36px] md:text-[56px] font-800 text-white">
              Trace your upcoming stay
            </h1>
            <p className="text-base md:text-lg text-white">
              Search millions of apartments, houses, and private office suites
              for rent with our exclusive hotels & apartments Platform
            </p>
            <Link to={"/homelisting"}>
            <button className="text-white text-base md:text-lg border border-white rounded-sm py-2 px-6 cursor-pointer">
              View All Hotels
            </button>
            </Link>
          </div>
        </div>
      </header>
    {/* header ends */}

    {/* your recents searches */}
    <section className="w-full bg-white my-20 py-10">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 ">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <h2 className="text-3xl text-black font-bold border-b border-blue-600 pb-4">Your Recent Searches</h2>
          <hr />
          <div className="flex w-full justify-center gap-10 items-center flex-wrap">
            {cards.map((card , ind:number)=>(

            <RecentCard card={card} key={ind}/>
            ))}
          </div>
        </div>

      </div>

    </section>
    {/* your recents searches */}
    {/* Home Apartments section */}
    <section className="w-full py-10 bg-[#F2F4FD] my-20 relative">
      <img src={elipes} alt="elipes"  className="absolute hidden md:block top-20 right-10 w-[250px]"/>
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
        <div className="w-full flex flex-col justify-center items-center gap-10">
          <h2 className="text-3xl text-center text-black font-bold border-b border-blue-600 pb-4">Find home, Apartment, Villa and mush more</h2>
          <hr />
          <div className="flex w-full justify-center gap-5 items-center flex-wrap">
            {havhcards.map((card , ind:number)=>(

            <HomeApartmentCard card={card} key={ind}/>
            ))}
          </div>
        </div>

      </div>

    </section>
    {/* Home Apartments section */}



    <PrimeProperty/>
<TopApartHome/>
<TripePlane/>
<TrendingDestinationHoem/>
<ExplorHome/>
<JoinUs/>

<Footer/>



    </>
  );
}

export default Home;
