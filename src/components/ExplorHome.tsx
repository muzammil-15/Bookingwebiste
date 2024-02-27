import exp2 from "../assets/images/exp1.png";
import exp1 from "../assets/images/exp2.png";
import exp3 from "../assets/images/exp3.png";
import apimg from "../assets/static/apartement.png";
import tripim from "../assets/static/trip.svg";
import homimg from "../assets/static/home.png";
import ringredimg from "../assets/static/ringred.svg"


const images = [{
    title: "Top Rated",
    img: exp1
}, {
    title: "Best price Selling",
    img: exp2
}, {
    title: "Luxury Hotels",
    img: exp3
},

];

const items = [{
    title: "Find Apartments",
    img: apimg,
    descp: "We speak your language. Apartments. 24/7 Customer Service"
},
{
    title: "Your Trip",
    img: tripim,
    descp: "We speak your language. Apartments. 24/7 Customer Service"
},
{
    title: "Exclusive Deals",
    img: homimg,
    descp: "We speak your language. Apartments. 24/7 Customer Service"
},

]


function ExplorHome() {
    return (
        <>

            <div className="relative ">
                <div className="padding-x relative py-10 lg:h-[500px] bg-blue-600">



                    <div className="flex max-md:flex-col items-center md:justify-between ">
                        <div className="">
                            <h2 className="text-3xl text-center text-[#FFF] font-bold"><span className="border-b-[2px] pb-2 border-b-[#FFF]">Explore top hotels</span></h2>


                        </div>

                        <div className="max-md:mt-5">
                            <button className="text-[20px]   text-center text-[#FFF] font-semibold"><span className="border-b-[2px] pb-2 border-b-[#FFF]">View All Hotels</span></button>

                        </div>



                    </div>



                    <div className="lg:absolute lg:bottom-[-200px] max-lg:bg-blue-600 max-lg:flex-wrap lg:left-0 lg:right-0 flex gap-20 justify-center py-10 padding-x"> {/* Adjust padding and justify-between */}

                        {images.map((item, ind) => (<>
                            <div className="w-[374px] flex justify-end items-center flex-col h-[416px]" key={ind}>
                                <img src={item.img} className="w-full h-full" alt="" />
                                <button className="text-[20px] absolute mb-[-20px] bg-[#FFFFFF] font-semibold p-2 w-[200px] mx-auto shadow-md shadow-[#c7c7ca]">{item.title}</button>
                            </div>

                        </>))}




                    </div>


                </div>

                {/*sevice start  */}

                <div className=" mt-10 lg:mt-[260px] padding-x">
                    <img className="absolute z-20 w-[200px] h-[200px] left-[-100px]" src={ringredimg} alt="" />
                    <div className="  relative padding-x py-10  flex-wrap   bg-[#F7F7F7] flex justify-center items-center gap-10">
                        {
                            items.map((item, ind) => (<>
                                <div className="flex w-[260px] h-[215px] justify-center gap-5 flex-col items-center" key={ind}>

                                    <img src={item.img} className="w-[114px] h-[114px]" alt="" />
                                    <h1 className="text-lg text-center font-bold">{item.title}</h1>
                                    <p className="text-sm font-normal text-[#000000] text-center">{item.descp}</p>

                                </div>


                            </>))
                        }




                    </div>

                </div>
{/* services end */}

            </div>


        </>
    )
}

export default ExplorHome