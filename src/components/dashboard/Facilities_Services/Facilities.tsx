import React from 'react'

const FacilitiesPage: React.FC = () =>{
    return (
        <div>
            <div className="">
                <div className='md:w-[80%] w-full '>
                    <p className='text-base text-gray-500 bg-gray-200 py-3 px-3 rounded-sm'>Now let us know some general details about your property like facilities available, internet, parking, and the languages you speak.</p>
                    <div className="my-6 bg-white rounded-md px-2 py-4 w-full">
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text font-semibold text-lg">Is parking available to guests?</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>No</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Other</option>
                            </select>
                            <div className="label">
                                <span className="label-text-alt text-base text-gray-400">This information is especially important for those traveling to your property by car.</span>
                            </div>
                        </label>
                    </div>
                    <div className="my-6 bg-white rounded-md px-2 py-4 w-full">
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text font-semibold text-lg">Is breakfast available to guests?</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>No</option>
                                <option>Yes</option>
                                <option>No</option>
                                <option>Other</option>
                            </select>

                        </label>
                    </div>
                    <div className="my-6 bg-white rounded-md px-2 py-4 w-full">
                        <label className="form-control w-full max-w-xs ">
                            <div className="label">
                                <span className="label-text font-semibold text-lg">Languages Spoken</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Language</option>
                                <option>English</option>
                                <option>Urdu</option>
                                <option>Other</option>
                            </select>
                            <div className="label">
                                <span className="label-text-alt text-base text-gray-400">What languages do you or your staff speak?</span>
                            </div>
                        </label>
                    </div>
                    <section className="text-gray-600 body-font">
                        <div className="container px-5 bg-white rounded-md py-6 mx-auto">
                            <div className="flex flex-col text-center w-full mb-10">
                                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Facilities That Are Popular With Guests</h1>

                            </div>
                            <div className="w-full mx-auto overflow-auto">
                                <table className="table-auto overflow-x-auto w-full text-left whitespace-no-wrap">

                                    <tbody>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm rounded-tl rounded-bl">

                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Free WiFi</span>
                                                </label>


                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Non-smoking rooms</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Free WiFi</span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Restaurant</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Airport shuttle</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Restaurant</span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Restaurant</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Family rooms</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Restaurant</span>
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Bar</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Spa</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Bar</span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">24-hour front desk</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Hot tub/Jacuzzi</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">24-hour front desk</span>
                                                </label>
                                            </td>

                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Sauna</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Air conditioning</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Sauna</span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Fitness center</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Water park</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Fitness center</span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Garden</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Swimming pool</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Garden</span>
                                                </label>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Terrace</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Terrace</span>
                                                </label>
                                            </td>
                                            <td className="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm ">
                                                <label className="inline-flex items-center">
                                                    <input id="redCheckBox" type="checkbox" className="w-4 h-4 accent-red-600" />
                                                    <span className="ml-2">Terrace</span>
                                                </label>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                        </div>
                        <div className="flex pl-4 mt-4 w-full mx-auto">

                            <button className="w-full text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Continue</button>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

export default FacilitiesPage;