import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




import TopPrimpeCard from './TopPrimpeCard';
import picture1 from "../assets/dami/topp1.png"
import picture2 from "../assets/dami/topp2.png";
import picture3 from "../assets/dami/topp3.png";
import picture4 from "../assets/dami/topp4.png"
import arrowright from "../assets/static/right.png";
import leftarrow from "../assets/static/left.png"


const items = [
    {
        title: "Hotel Arc New York city",
        location: "New York",
        startPrice: 100,
        finalPrice: 80,
        ratings: 3,
        reviews: 120,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "London",
        startPrice: 120,
        finalPrice: 100,
        ratings: 4,
        reviews: 90,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        startPrice: 150,
        finalPrice: 130,
        ratings: 5,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Tokyo",
        startPrice: 110,
        finalPrice: 90,
        ratings: 5,
        reviews: 100,
        picture: `${picture4}`
    }, {
        title: "Hotel Arc New York city",
        location: "Paris",
        startPrice: 150,
        finalPrice: 130,
        ratings: 4,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "New York",
        startPrice: 100,
        finalPrice: 80,
        ratings: 3,
        reviews: 120,
        picture: `${picture1}`
    },
    {
        title: "Hotel Arc New York city",
        location: "London",
        startPrice: 120,
        finalPrice: 100,
        ratings: 4,
        reviews: 90,
        picture: `${picture2}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Paris",
        startPrice: 150,
        finalPrice: 130,
        ratings: 5,
        reviews: 150,
        picture: `${picture3}`
    },
    {
        title: "Hotel Arc New York city",
        location: "Tokyo",
        startPrice: 110,
        finalPrice: 90,
        ratings: 5,
        reviews: 100,
        picture: `${picture4}`
    }, {
        title: "Hotel Arc New York city",
        location: "Paris",
        startPrice: 150,
        finalPrice: 130,
        ratings: 4,
        reviews: 150,
        picture: `${picture3}`
    },
];








interface SampleArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
}


function PrimeProperty() {

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



    var settings = {
        dots: true,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="padding-x">

                <h2 className="text-3xl text-center mb-12 text-black font-bold"><span className='border-b-2 pb-2 border-blue-600'>Our Top Prime Properties</span></h2>


                <div className="slider-container" >

                    <Slider {...settings}  >



                        {
                            items.map((item, ind) => (

                                <div className="mx-2">
                                    <TopPrimpeCard key={ind} title={item.title} picture={item.picture} location={item.location} startPrice={item.startPrice} finalPrice={item.finalPrice} ratings={item.ratings} reviews={item.reviews} />
                                </div>
                            ))
                        }




                    </Slider>
                </div>

<div className="flex justify-center items-center mt-5">
<button className="text-blue-600  mt-5  text-base md:text-lg border border-blue-600 rounded-sm py-2 px-6 cursor-pointer">
                    View All Properties
                </button>

</div>
               








            </div>







        </>
    )
}

export default PrimeProperty




















