import romance from "../../assets/dami/romance.png"

const AboutDesc = () => {
  return (
    <div className={`relative w-full mt-10`}>
      <div className="mx-auto flex flex-col md:flex-row max-w-7xl py-10 items-start justify-center gap-10 padding-x">
        <div className="flex flex-col gap-4 flex-1">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold ">Find The Best Accommodation</h2>
            <p className="text-sm md:text-[16px] leading-6 text-black opacity-[50%]">Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio.</p>
        </div>
        <div className="flex-1">
            <img src={romance} alt="image" className="w-full h-full"/>
        </div>
      </div>
      
    </div>
  )
}

export default AboutDesc