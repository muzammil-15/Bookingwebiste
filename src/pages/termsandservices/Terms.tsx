import Footer from "../../components/Footer"
import { Navbar } from "../../components/Navbar"
import TermsDetails from "../../components/termsandservices/TermsDesc"

const TermsAndServices = () => {
  return (
    <div className="w-full bg-[#F7F7F7]">
      <Navbar bg="bg-[#0351FC]" />
      <header className="w-full footer ">
        <div className="flex justify-center items-center mx-auto max-w-7xl py-20">
          <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white">
          Customer terms of service
          </h1>
        </div>
      </header>
      <TermsDetails/>    
      <Footer />
    </div>
  )
}

export default TermsAndServices