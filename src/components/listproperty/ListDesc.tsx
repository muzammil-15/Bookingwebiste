import romance from "../../assets/dami/romance.png"

const ListDesc = () => {
  return (
    <div className={`relative w-full mt-10`}>
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl py-10 items-start justify-center gap-10 padding-x">
        <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold ">Your peace of mind is our top priority</h2>
            <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold">Broad Exposure:</h3>
                <span className="text-base opacity-[50%]">our property will be visible to a wide audience of potential renters, increasing the likelihood of finding a tenant quickly.</span>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold">Detailed Listings:</h3>
                <span className="text-base opacity-[50%]">You can provide detailed information about your property, including high-quality photos and videos, making your property stand out to potential renters.</span>
            </div>
            <div className="flex flex-col gap-3">
                <h3 className="text-base font-bold">Flexible Scheduling:</h3>
                <span className="text-base opacity-[50%]">Our platform allows you to set your own schedule for availability, giving you full control over when your property is available for rent.</span>
            </div>
            <button className="flex justify-center items-center py-3 px-8 border border-[#0351FC] rounded-sm text-[#0351FC] w-max mt-5">Add Property Now</button>
        </div>
        <div className="flex-1">
            <img src={romance} alt="image" className="w-full h-full"/>
        </div>
      </div>
      
    </div>
  )
}

export default ListDesc