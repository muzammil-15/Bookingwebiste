import React, { useState, ReactElement } from "react";
import BasicPage from "../../components/dashboard/basic_info/Basic";
import LayoutPricing from "../../components/dashboard/layoutAndPricing/Prising";
import AmenitiesPage from "../../components/dashboard/Amenities/Amenities";
import CustomInput from "../../components/dashboard/Photos/Photos";
import PoliciesPage from "../../components/dashboard/Policies/Policies";
import PaymentPage from "../../components/dashboard/Payments/Payment";

interface Menu {
    title: string;
    component: ReactElement;
    gap?: string;
}

const DashboardPage: React.FC = () => {
    const [selectedComponent, setSelectedComponent] = useState<ReactElement | null>(null);

    const Menus: Menu[] = [
        { title: "BASIC INFORMATION", component: <BasicPage /> },
        { title: "LAYOUT & PRICING", component: <LayoutPricing /> },
        { title: "AMENITIES ", component: <AmenitiesPage /> },
        { title: "PHOTOS", component: <CustomInput /> },
        { title: "POLICIES", component: <PoliciesPage /> },
        { title: "PAYMENTS ", component: <PaymentPage /> },
    ];

    const handleClick = (component: ReactElement) => {
        setSelectedComponent(component);
    };

    return (
        <div className="bg-gray-100">
            <div className="bg-[#002D8F] w-full py-24 sm:px-24 px-6 text-white text-center">
                <h2 className='font-bold md:text-4xl sm:text-3xl text-xl '>Welcome Muhammad Kashif!</h2>
                <p className='w-full my-6 sm:text-xl text-sm'>Start by telling us your property&apos;s name, contact details, and address.</p>
            </div>
            <div className="max-w-[85rem] mx-auto flex md:flex-row flex-col bg-gray-100 mt-5">
                <div
                    className=' md:w-72 w-full bg-white rounded-md md:h-screen h-auto p-5  pt-8 relative duration-300'
                >
                    <ul className="pt-4">
                        {Menus.map((Menu, index) => (
                            <li
                                key={index}
                                className={`flex  rounded-md p-1 cursor-pointer hover:bg-light-white text-gray-900 text-sm items-center gap-x-4 
                                  ${Menu.gap ? "mt-1" : "mt-1"} ${index === 0 && "bg-light-white"
                                    } `}
                            >
                                <span className={`${Menu.title === selectedComponent?.props?.children ? "bg-green-600 text-white" : "text-base font-semibold hover:bg-green-600 hover:text-white"} w-full duration-200 px-3 py-2 rounded-sm`} onClick={() => handleClick(Menu.component)}>
                                    {Menu.title}
                                </span>
                            </li>
                        ))}

                        <p className="text-white bg-primary px-4 py-4 rounded-md mt-5">
                            After you complete registration you&apos;ll be able to make changes to your listing before it goes live.
                        </p>
                    </ul>
                </div>
                <div className="h-auto ml-6 my-4 flex-1 ">
                    {selectedComponent}
                </div>
            </div>
        </div>
    )
}

export default DashboardPage;
