import Image1 from "../../assets/dami/topp1.png"
import Image2 from "../../assets/dami/topp2.png"
import Image3 from "../../assets/dami/topp3.png"
import Image4 from "../../assets/dami/topp4.png"
import Image5 from "../../assets/dami/outdoor.png"

const ImageGallery = () => {
  return (
    <div className="w-full">
        <div className="mx-auto max-w-7xl padding-x mt-5 flex flex-col gap-5">
            <div className="flex flex-col w-full md:flex-row gap-5 rounded-md">
                <div className="relative w-full h-[300px] md:w-1/2 md:h-[400px]">
                    <img src={Image1} alt="image1"  className="w-full h-full"/>
                </div>
                <div className="relative w-full h-[300px] md:w-1/2 md:h-[400px] rounded-md">
                    <img src={Image2} alt="image2"  className="w-full h-full"/>
                </div>
            </div>
            <div className="flex flex-col w-full md:flex-row gap-5">
                <div className="relative w-full h-[300px] md:w-1/2 md:h-[400px] rounded-md">
                    <img src={Image3} alt="image1"  className="w-full h-full"/>
                </div>
                <div className=" relative w-full h-[300px] md:w-1/2 md:h-[400px] rounded-md">
                    <img src={Image4} alt="image2"  className="w-full h-full"/>
                </div>
                <div className="relative w-full h-[300px] md:w-1/2 md:h-[400px] rounded-md">
                    <img src={Image5} alt="image2"  className="w-full h-full"/>
                    <span className="w-full h-full flex justify-center items-center text-white text-5xl cursor-pointer font-semibold absolute top-0 left-0 bg-[#0000008f] rounded-md">
                        +6
                    </span>
                </div>
            </div>
        </div>
    
</div>
  );
};

export default ImageGallery;
