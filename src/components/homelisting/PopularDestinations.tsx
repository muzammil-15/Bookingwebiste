import Top1 from "../../assets/dami/topp1.png"
function PopularDestinations() {
    const trendingCard =[
        {
            image: Top1,
            title: "Lake District",
            stay: "Stay places",
            number: "12,6425",
            button: "Starting From $200 / night"
        },
        {
            image: Top1,
            title: "Phuket Province",
            stay: "Stay places",
            number: "12,6425",
            button: "Starting From $200 / night"
        },
        {
            image: Top1,
            title: "Ras Al Khaimah",
            stay: "Stay places",
            number: "12,6425",
            button: "Starting From $200 / night"
        },
        {
            image: Top1,
            title: "Lake District",
            stay: "Stay places",
            number: "12,6425",
            button: "Starting From $200 / night"
        },
        {
            image: Top1,
            title: "Phuket Province",
            stay: "Stay places",
            number: "12,6425",
            button: "Starting From $200 / night"
        },
        {
            image: Top1,
            title: "Ras Al Khaimah",
            stay: "Stay places",
            number: "12,6425",
            button: "Starting From $200 / night"
        }
    ]
  return (
    <div className="w-full bg-[#f0efef] py-10">
        <div className="w-full flex justify-center padding-x items-center mx-auto max-w-7xl py-10">
            <div className="w-full h-full flex flex-col gap-5">
            <h2 className="text-3xl w-full md:w-max mx-auto text-center text-[#000000] font-bold border-b-2 border-blue-600 pb-4">Trending Properties destinations</h2>
            <div className="flex w-full justify-center gap-10 items-center flex-wrap mt-12">
                {trendingCard.map((card , ind)=>(
                    <div key={ind} className="flex flex-col bg-[#FFFFFF] gap-3 justify-center items-center border border-gray-300 rounded-md">
                    <img src={card.image} alt="hotel1" className="w-full h-[390px]"/>
                    <h2 className="text-xl font-[600]">{card.title}</h2>
                    <span className="text-lg ">{card.stay} <span className="text-[#0351FC]">{card.number}</span></span>
                    <button className="flex justify-center items-center py-2 px-4 bg-[#0351FC] rounded-sm text-white mb-5">{card.button}</button>

                </div>
                ))}

            </div>

            </div>

        </div>

    </div>
  )
}

export default PopularDestinations