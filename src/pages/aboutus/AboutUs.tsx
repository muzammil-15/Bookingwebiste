import Footer from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import AboutDesc from "../../components/about/AboutDesc"
import AboutDetails from "../../components/about/AboutDetails"
import Faqs from "../../components/homelistingdetails/Faqs"

const AboutUs = () => {
  return (
    <div className="w-full bg-[#F7F7F7]">
      <Navbar bg="bg-[#0351FC]" />
      <header className="w-full footer ">
        <div className="flex justify-center items-center mx-auto max-w-7xl py-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
            About Us
          </h1>
        </div>
      </header>
      <AboutDesc/>
      <AboutDetails/>
      <Faqs/>
      
      <Footer />
    </div>
  )
}

export default AboutUs