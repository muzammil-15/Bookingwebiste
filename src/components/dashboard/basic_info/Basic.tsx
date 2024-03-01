import React from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
const BasicPage: React.FC = () => {
    return (
        <div className="">
            <div className='md:w-[80%] w-full '>
                <div className="my-6 bg-white rounded-md px-2 py-4 w-full">
                    <label className="form-control w-full max-w-xs ">
                        <div className="label">
                            <span className="label-text font-semibold text-lg">What's the name of your property?</span>
                        </div>

                        <input type="text" placeholder="2" className="input input-bordered input-md w-full max-w-xs" />

                        <div className="label">
                            <span className="label-text-alt text-base text-gray-400">Guests will see this name when they search for a place to stay.</span>
                        </div>
                    </label>
                    <label className="form-control w-full max-w-xs ">
                        <div className="label">
                            <span className="label-text font-semibold text-lg">Star rating</span>
                        </div>
                        <select className="select select-bordered">
                            <option disabled selected>N/A</option>
                            <option>No</option>
                            <option>Yes</option>
                            <option>Other</option>
                        </select>

                    </label>
                    <label className="form-control w-full max-w-lg ">
                        <div className="label">
                            <span className="label-text font-semibold text-lg">About Property</span>
                        </div>

                        <textarea placeholder="Write property description..." className="textarea textarea-bordered textarea-lg w-full max-w-lg" ></textarea>


                    </label>
                </div>
                <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">What are the contact details for this property?</h1>
                <div className="md:flex">
                    <div className="w-full px-6 py-8 md:p-8 bg-white shadow-lg">

                        <form className="">
                            <div className="mb-6">
                                <label className="mt-4 mb-6 text-gray-900 font-semibold">Contact name</label>
                                <div className="mt-2"></div>
                                <input type="text" name="cardNumber" className="w-full p-2 shadow-sm rounded-md border border-gray-300 focus:outline-none focus:ring focus:ring-indigo-200 focus:border-indigo-300 focus:ring-opacity-20" placeholder="Enter Name" />
                            </div>

                            <div className="flex md:flex-row flex-col mb-0 gap-4 w-full">
                                <div className="w-1/2">
                                    <label className="mt-4 mb-6 text-gray-900 font-semibold">Contact name</label>
                                    <div className="mt-2"></div>

                                    <PhoneInput
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                    />
                                </div>

                                <div className="w-1/2 mb-2">
                                    <label className="mt-4 mb-6 text-gray-900 font-semibold">Alternate Contact Number (Optional)</label>
                                    <div className="mt-2"></div>
                                    <PhoneInput
                                        inputProps={{
                                            name: 'phone',
                                            required: true,
                                            autoFocus: true
                                        }}
                                    />

                                </div>

                            </div>
                            <p className='text-gray-400'>Contact number (so we can assist with your registration when needed)</p>
                            <div className="my-2">
                                <div className="w-full mx-auto">
                                    <h4 className="font-semibold">
                                        Do you own multiple property, or are you part of a property management company or group?
                                    </h4>

                                    <div>
                                        <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                                            <input type="radio" name="yes" />
                                            <i className="pl-2">Yes</i>
                                        </label>

                                        <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                                            <input type="radio" name="yes" />
                                            <i className="pl-2">No</i>
                                        </label>

                                    </div>
                                </div>
                            </div>

                        </form>
                    </div>
                </div>

                <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">Do you use a channel manager?</h1>
                <div className="my-6 bg-white rounded-md px-4 py-4 w-full">
                    <p className='text-gray-400'>A channel manager is a tool that lets you choose what you sell across all the different sites you list your place on. You can then set your prices and open/close dates in your calendar on all of these sites in one place.</p>
                    <div className="my-2">
                        <div className="w-full mx-auto">
                            <h4 className="font-semibold my-4">
                                If you use a channel manager, tell us below. We’ll use this info to help you connect it to Booking.com in the future. The brand name of your channel manager is also helpful.
                            </h4>

                            <div>
                                <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                                    <input type="radio" name="yes" />
                                    <i className="pl-2">I USE A CHANNEL MANAGER</i>
                                </label>

                                <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                                    <input type="radio" name="yes" />
                                    <i className="pl-2">I DON&quot;T USE A CHANNEL MANAGER</i>
                                </label>

                            </div>
                        </div>
                    </div>
                </div>
                <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">Where&apos;s your property located?</h1>
                <div className="my-6 bg-white rounded-md px-4 py-4 w-full">
                    <p className='py-3 px-4 my-4 bg-gray-100 rounded-md'>You have multiple properties you want to list. Remember to fill in the information that corresponds to this property registration.</p>
                    <div className="space-y-6 my-4">
                        <form action="#">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-semibold text-gray-900 block mb-2">Street address</label>
                                    <input type="text" name="product-name" id="product-name" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g. 123 street”"  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Address line 2</label>
                                    <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Unit number, suite floor, building etc."  />
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Country/Region</label>
                                    <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                                        <option className="font-semibold text-slate-300">Please Select</option>
                                    </select>
                                </div>
                                <div className="col-span-6 sm:col-span-3">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">City</label>
                                    <input type="number" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="e.g. New York"  />
                                </div>
                                <div className="col-span-full">
                                    <label className="text-sm font-medium text-gray-900 block mb-2">Zip Code</label>
                                    <input id="product-details"  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block md:w-[49%] w-full p-2.5" placeholder="Enter zip code" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

                <div className="md:w-[97%] mx-auto w-full md:px-[31px] px-4 my-4 md:py-[33px] py-4 bg-white border-4 border-primary">
                    <h2 className='text-primary text-2xl font-semibold my-4'>Your Address Matters</h2>
                    <p className='text-gray-500 my-2'>Make sure you enter the full address of your property including building name, number, etc. Based on the info you provide, we might send a letter to verify this address.</p>
                </div>

                <div className="flex pl-4 mt-4 w-full mx-auto">

                    <button className="w-full text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Continue</button>
                </div>
            </div>
        </div>
    )
}

export default BasicPage;