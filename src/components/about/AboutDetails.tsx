

const AboutDetails = () => {
    const details =[
        {
            title: "What We Offers",
            desc : "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        },
        {
            title: "Low Rates",
            desc : "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        },
        {
            title: "Instant Confirmation",
            desc : "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        },
        {
            title: "No Reservation Fees",
            desc : "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        },
        {
            title: "Secure Booking",
            desc : "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        },
        {
            title: "Bringing Value to Our Accommodation Partners",
            desc : "Praesent eu dolor eu orci vehicula euismod. Vivamus sed sollicitudin libero, vel malesuada velit. Nullam et maximus lorem. Suspendisse maximus dolor quis consequat volutpat. Donec vehicula elit eu erat pulvinar, vel congue ex egestas. Praesent egestas purus dolor, a porta arcu pharetra quis. Sed vestibulum semper ligula, id accumsan orci ornare ut. Donec id pharetra nunc, ut sollicitudin mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam dapibus nisl at diam scelerisque luctus. Nam mattis, velit in malesuada maximus, erat ligula eleifend eros, et lacinia nunc ante vel odio."
        },
    ]
  return (
    <div className={`relative w-full mt-10`}>
      <div className="mx-auto flex flex-col max-w-7xl py-10 items-start justify-center gap-10 padding-x">
        
        {details.map((d,ind)=>(

        <div className='flex flex-col gap-5' key={ind}>
            <h3 className="text-2xl md:text-3xl font-bold ">{d.title}</h3>
            <p className="text-sm md:text-[16px] leading-7 text-black opacity-[50%]">{d.desc}</p>
        </div>
        ))}
        
      </div>
      
    </div>
  )
}

export default AboutDetails