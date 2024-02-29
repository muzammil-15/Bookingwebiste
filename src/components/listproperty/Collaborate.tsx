import img from "../../assets/dami/city1.png";

const Collaborate = () => {
  const collaborate = [
    {
      title: "Reach a Wide Audience:",
      desc: "By listing your property on our platform, you'll have the opportunity to reach a wide audience of potential renters that you may not have been able to connect with otherwise",
      number: "1",
    },
    {
      title: "Easy Management:",
      desc: "Our platform simplifies the process of managing your property. We provide tools to easily track inquiries, viewings, and rental agreements, all from one centralized location.",
      number: "2",
    },
    {
      title: "Security Measures:",
      desc: "We ensure the safety of your transactions by employing rigorous security measures. Our platform uses secure payment systems to protect you from fraud.",
      number: "3",
    },
    {
      title: "Personalized Support:",
      desc: "Our team is available to assist you with any questions or concerns you may have. We are committed to making the renting process as smooth as possible for you.",
      number: "4",
    },
    {
      title: "Detailed Property Listings:",
      desc: "Our website allows you to create detailed listings, including high-quality images and descriptions, to show your property in the best light. This can attract more potential renters.",
      number: "5",
    },
    {
      title: "Efficient Process:",
      desc: "We make the process of renting out your property efficient and straightforward. This can save you time and effort, making it easier to earn rental income.",
      number: "6",
    },
  ];
  return (
    <div className="w-full my-10">
      <div className="flex justify-center  gap-10 padding-x flex-col items-center mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold md:text-3xl text-black text-center border-b-2 border-[#0351FC] pb-2 w-full md:w-max ">
          Why Collaborate with Us
        </h2>
        <div className="flex flex-col gap-10 mt-10">
          {collaborate.map((c, i) => (
            <div key={i} className="flex flex-col md:flex-row items-start justify-between  md:items-center relative gap-5">
              <div className="w-[100px] h-[100px] rounded-full relative border border-blue-700 overflow-hidden">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover fill-none"
                />
              </div>
              <span className="absolute top-0 flex justify-center items-center left-0 bg-[#0351FC] p-2 w-8 h-8 text-center rounded-full text-white">
                {c.number}
              </span>
              <div className="h-20 border border-[#0351FC] hidden md:block"></div>
              <div className="flex flex-col  gap-3 w-full md:w-2/3 ">
                <h3 className="text-xl md:text-2xl font-semibold">
                  {c.title}
                </h3>
                <p className="opacity-[50%] text-base">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
