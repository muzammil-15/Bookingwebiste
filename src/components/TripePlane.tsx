import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TopApartHCard from './TopApartHCard';
import arrowright from '../assets/static/right.png';
import leftarrow from '../assets/static/left.png';
import bulingimg from '../assets/static/building.png';
import caricon from '../assets/static/car.svg';
import romanceIcon from '../assets/static/2hearts.svg';
import picture1 from '../assets/dami/city1.png';
import picture2 from '../assets/dami/outdoor.png';
import picture3 from '../assets/dami/romance.png';


interface Item{
    title: string;
    location: string;
    adults: number;
    finalPrice: number;
    category: string;
    beds: number;
    ratings: number;
    reviews: number;
    picture: string;
}







const items: Item[] = [
    {
        title: "Hotel Arc New York city",
        location: "New York",
        adults: 10,
        finalPrice: 80,
        category: "city",
        beds: 4,
        ratings: 3,
        reviews: 120,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "London",
        adults: 12,
        finalPrice: 100,
        category: "city",
        beds: 3,
        ratings: 4,
        reviews: 90,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "London",
        adults: 12,
        finalPrice: 100,
        category: "city",
        beds: 3,
        ratings: 4,
        reviews: 90,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "London",
        adults: 12,
        finalPrice: 100,
        category: "city",
        beds: 3,
        ratings: 4,
        reviews: 90,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 1,
        finalPrice: 130,
        category: "city",
        ratings: 5,
        beds: 6,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Tokyo",
        adults: 11,
        finalPrice: 90,
        beds: 16,
        category: "city",
        ratings: 5,
        reviews: 100,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 3,
        finalPrice: 130,
        beds: 4,
        category: "outdoor",
        ratings: 4,
        reviews: 150,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "New York",
        adults: 12,
        finalPrice: 80,
        category: "outdoor",
        beds: 23,
        ratings: 3,
        reviews: 120,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "London",
        adults: 4,
        beds: 3,
        finalPrice: 100,
        category: "outdoor",
        ratings: 4,
        reviews: 90,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 1,
        beds: 5,
        category: "outdoor",
        finalPrice: 130,
        ratings: 5,
        reviews: 150,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 1,
        beds: 5,
        category: "outdoor",
        finalPrice: 130,
        ratings: 5,
        reviews: 150,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 1,
        beds: 5,
        category: "outdoor",
        finalPrice: 130,
        ratings: 5,
        reviews: 150,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Tokyo",
        adults: 110,
        beds: 3,
        category: "romance",
        finalPrice: 90,
        ratings: 5,
        reviews: 100,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 150,
        beds: 5,
        category: "romance",
        finalPrice: 130,
        ratings: 4,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Tokyo",
        adults: 110,
        beds: 3,
        category: "romance",
        finalPrice: 90,
        ratings: 5,
        reviews: 100,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 150,
        beds: 5,
        category: "romance",
        finalPrice: 130,
        ratings: 4,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 150,
        beds: 5,
        category: "romance",
        finalPrice: 130,
        ratings: 4,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Tokyo",
        adults: 110,
        beds: 3,
        category: "romance",
        finalPrice: 90,
        ratings: 5,
        reviews: 100,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        adults: 150,
        beds: 5,
        category: "romance",
        finalPrice: 130,
        ratings: 4,
        reviews: 150,
        picture: `${picture3}`
    }
];












interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}

const TripePlane: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState<string>('city');

    const handleCategoryClick = (category: string) => {
        setSelectedCategory(category);
    };

    const SampleNextArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} onClick={onClick}>
                <div className="relative bg-[#0351FC] md:flex items-center justify-center  hidden  w-[30px] rounded-[50%]  h-[30px]" onClick={onClick}>
                    <img src={arrowright} alt='not found' className='w-[20px] mx-auto   h-[20px]' />
                </div>

            </div>
        );
    };

    const SamplePrevArrow: React.FC<SampleArrowProps> = ({
        className,
        style,
        onClick,
    }) => {
        return (
            <div className={className} style={{ ...style }} >
                <div className="relative bg-[#0351FC] md:flex items-center justify-center  hidden  w-[30px] rounded-[50%]  h-[30px]" onClick={onClick}>
                    <img src={leftarrow} alt='not found' className='w-[20px] mx-auto   h-[20px]' />
                </div>
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />, // Custom Next Arrow component
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <>
            <div className="padding-x bg-[#F2F4Fd] mt-10 py-10">
                <h2 className="text-3xl text-center text-black font-bold">Quick and easy trip planner</h2>
                <p className="text-[#000] mt-5 text-center mx-auto text-[16px] font-normal">Pick a vibe and explore the top destinations in USA</p>
                <div className="mt-5 flex max-md:flex-wrap gap-5">
                    <div className={`p-5 w-full h-[283px] gap-5 flex flex-col items-center justify-center bg-[#FFF] text-[#000] cursor-pointer ${selectedCategory === 'city' && 'bg-blue-600'}`} onClick={() => handleCategoryClick('city')}>
                        <img src={bulingimg} className="w-[77px] h-[83px]" alt="" />
                        <h1 className="text-xl font-bold text-center">CITY</h1>
                    </div>
                    <div className={`p-5 w-full h-[283px] flex flex-col gap-5 items-center justify-center bg-[#FFF] text-[#000] cursor-pointer ${selectedCategory === 'outdoor' && 'bg-blue-600'}`} onClick={() => handleCategoryClick('outdoor')}>
                        <img src={caricon} className="w-[87px] h-[68px]" alt="" />
                        <h1 className="text-xl font-bold text-center">OUTDOOR</h1>
                    </div>
                    <div className={`p-5 w-full h-[283px] flex flex-col gap-5 items-center justify-center bg-[#FFF] text-[#000] cursor-pointer ${selectedCategory === 'romance' && 'bg-blue-600'}`} onClick={() => handleCategoryClick('romance')}>
                        <img src={romanceIcon} className="w-[85px] h-[85px]" alt="" />
                        <h1 className="text-xl font-bold text-center">ROMANCE</h1>
                    </div>
                </div>
                <div className="slider-container mt-16">
                    <Slider {...settings}>
                        {items
                            .filter(item => item.category === selectedCategory)
                            .map((item, ind) => (
                                <div className="mx-2" key={ind}>
                                    <TopApartHCard
                                        title={item.title}
                                        picture={item.picture}
                                        location={item.location}
                                        beds={item.beds}
                                        adults={item.adults}
                                        finalPrice={item.finalPrice}
                                        ratings={item.ratings}
                                        reviews={item.reviews}
                                    />
                                </div>
                            ))}
                    </Slider>
                </div>
            </div>
        </>
    );
};

export default TripePlane;
