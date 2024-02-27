import arrow from "../assets/static/arrow.svg";
import image from "../assets/dami/city1.png"

const destinations = [{
    name: "Pakistan"
},

{
    name: "South Africa"
},
{
    name: "Dubai"
},
{
    name: "India"
}
];
function TrendingDestinationHoem() {
    return (
        <>

            <div className="padding-x py-10 mt-16">


                <h2 className="text-3xl   text-black font-bold"> Top Trending destinations</h2>

                <div className="border-blue-600 w-[250px] mt-2 border-b-[2px]">





                </div>
                <div className="flex max-md:flex-col mt-16 gap-20">

                    <div className="w-[270x]">
                        <button className='bg-blue-600 text-xl font-normal text-[#FFF] rounded-[4px] p-3 w-[160px]'>North Usa</button>

                        <div className="">
                            {
                                destinations.map((item, ind) => (
                                    <>
                                        <div className="flex mt-20 justify-between items-center" key={ind}>
                                            <h5 className='text-xl  font-normal text-[#000]'>{item.name}</h5>
                                            <img src={arrow} className="w-[19px] h-[15px]" alt="" />



                                        </div>
                                        <hr className="mt-2" />

                                    </>

                                ))
                            }

                        </div>


                    </div>
                    <div className="relative w-full h-[300px] md:h-[550px]">
                        <div className="absolute bottom-[10px] right-[10px] p-4 bg-white text-sm rounded-lg shadow-md z-10">
                            Stay places: <span className="text-blue-600 font-bold">12,6425</span>
                        </div>
                        <div className="absolute top-[-50px] sm:top-[-20px] sm:left-[-50px] p-4 w-[120px] h-[120px] gap-2 flex items-center justify-center flex-col bg-[#FFF] text-[#000] text-sm rounded-full shadow-[#d7d4d4] shadow-md z-20">
                            Started At <br />
                            <b>$500</b>
                        </div>
                        <img src={image} className="w-full h-full" alt="" />
                    </div>




                </div>




            </div>




        </>
    )
}

export default TrendingDestinationHoem