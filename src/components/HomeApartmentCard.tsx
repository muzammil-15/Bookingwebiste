
interface HavhCard {
    image: string;
    title: string;
    desc: string;
  }
const HomeApartmentCard: React.FC<{ card: HavhCard }> = ({ card })=> {
  return (
    <div className=" bg-white z-10 p-10 border border-[#ADADAD] rounded-md flex flex-col justify-center items-center gap-2 text-center w-[277px] h-[308px]">
        <img src={card.image} alt=""  className="w-[110px] h-[110px]"/>
        <h2 className="text-base text-black font-bold mt-2">{card.title}</h2>
        <p className="text-sm text-black opacity-[50%]">{card.desc}</p>
    </div>
  );
};

export default HomeApartmentCard;
