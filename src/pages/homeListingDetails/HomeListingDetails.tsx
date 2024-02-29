import Footer from "../../components/Footer";
import { Navbar } from "../../components/Navbar";
import PrimeProperty from "../../components/PrimeProperty";
import BestFeatures from "../../components/homelistingdetails/BestFeatures";
import Description from "../../components/homelistingdetails/Description";
import Faqs from "../../components/homelistingdetails/Faqs";
import ImageGallery from "../../components/homelistingdetails/Gallery";


const HomeListingDetails = () => {
  return (
    <div className="w-full bg-[#F7F7F7]">
      <Navbar bg="bg-[#0351FC]" />
      <ImageGallery/>
      <Description/>
      <BestFeatures/>
      <Faqs/>
      <PrimeProperty/>

      

      
      <Footer />
    </div>
  )
}

export default HomeListingDetails