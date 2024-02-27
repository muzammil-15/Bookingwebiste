import picture1 from "../assets/static/join1.svg"
import picture2 from "../assets/static/join2.svg";
import picture3 from "../assets/static/join3.svg";
import picture4 from "../assets/static/join4.svg";



const items = [{
    title: "Easy registration",
    picture: picture1,
    description: "Help people get to know you by list your business. Showcase your business with your outstanding media gallery."
},
{
    title: "Promote your listing",
    picture: picture2,
    description: "Reach 3x more customers by featuring your listing on top of search results. This will help you grow fast with Us"
},
{
    title: "Get on the map",
    picture: picture3,
    description: "We will show results on the map so your customer can easily finds you."
},
{
    title: "Great sales benefits",
    picture: picture4,
    description: "With the help of standout on the top of result by showing your ads as featured."
},
]

function JoinUs() {
    return (
        <>
            <div className="padding-x mt-10 py-10 bg-[#F2F4FD]">

                <h2 className="text-3xl text-center  text-black font-bold">Join Us Now</h2>

                <p className="text-[#000] mt-5 text-center mx-auto text-[16px] md:w-[550px] font-normal">Embrace the advantages of laterStay directly listing and become a part of our community today.</p>

                <div className="w-[300px] h-[2px] bg-blue-600 mx-auto mt-2 "></div>



                <div className="grid mt-16 grid-cols-1 md:grid-cols-2 gap-5 ">

                    {
                        items.map((item, ind) => (

                            <div className=" p-4 md:h-[210px] flex max-md:flex-col gap-5 items-center rounded-[4px]  bg-[#FFF]">


                                <img src={item.picture} className="w-[106px] h-[106px]" alt="" />




                                <div className="">


                                    <h1 className="text-base text-black  font-bold">{item.title}</h1>
                                    <p className="text-lg text-[#ADADAD] lg:w-[400px] mt-2 ">{item.description}</p>
                                </div>




                            </div>
                        ))
                    }



                </div>

                <div className="flex justify-center items-center mt-5">
                    <button className="text-blue-600  mt-5  text-base md:text-lg border border-blue-600 rounded-sm py-2 px-6 cursor-pointer">
                        Register Now
                    </button>

                </div>

            </div>



        </>
    )
}

export default JoinUs