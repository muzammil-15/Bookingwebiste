import Footer from "../../components/Footer";
import HomeApartmentCard from "../../components/HomeApartmentCard";
import { Navbar } from "../../components/Navbar";
import HomeListingHotel from "../../components/homelisting/HomeListingHotel";
import IdealProperties from "../../components/homelisting/IdealProperties";
import PopularDestinations from "../../components/homelisting/PopularDestinations";
import { havhcards } from "../home/Home";
import elipes from "../../assets/images/elipes.png"
import { hotels } from "../../constants/data";
import ExplorHome from "../../components/ExplorHome";


const HomeListing = () => {

  
  return (
    <div className="w-full bg-[#F7F7F7]">
      <Navbar bg="bg-[#0351FC]" />
      <header className="w-full bg-[#002D8F] ">
        <div className="flex justify-center items-center mx-auto max-w-7xl py-12">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            Best Properties Near You
          </h1>
        </div>
      </header>
      <HomeListingHotel hotels={hotels}/>
      <PopularDestinations />
      <ExplorHome/>
      <IdealProperties />
      <section className="w-full py-10 bg-[#F2F4FD]  relative">
        <img
          src={elipes}
          alt="elipes"
          className="absolute hidden md:block top-20 right-10 w-[250px]"
        />
        <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:px-6 lg:px-8 z-10 bg-[#F2F4FD] ">
          <div className="w-full flex flex-col justify-center items-center gap-10">
            <h2 className="text-3xl text-center text-black font-bold border-b-2 border-blue-600 pb-4">
              Find home, Apartment, Villa and mush more
            </h2>
            <hr />
            <div className="flex w-full justify-center gap-5 items-center flex-wrap">
              {havhcards.map((card, ind: number) => (
                <HomeApartmentCard card={card} key={ind} />
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeListing;
