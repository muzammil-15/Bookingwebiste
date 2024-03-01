import React from 'react'

const PoliciesPage: React.FC = () => {
    return (
        <div>
            <h1 className="py-5 text-2xl font-semibold title-font mb-2 text-gray-900">Policies</h1>
            <div className="my-4 md:mx-4 mx-0 bg-white rounded-md px-6 py-4 w-full">
                <h2 className='text-gray-600 py-5 text-2xl font-semibold title-font mb-2'>Cancellation</h2>
                <div className="flex md:flex-row flex-col justify-between items-start">
                    <div className="md:w-3/5 w-full">
                        <label className="form-control w-full max-w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-lg">How many days in advance can guests cancel free of charge?</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>Day of arrival (6pm)</option>
                                <option>option1</option>
                                <option>option2</option>
                            </select>

                        </label>
                        <label className="form-control w-full max-w-full ">
                            <div className="label">
                                <span className="label-text font-semibold text-lg">or guests will pay 100%</span>
                            </div>
                            <select className="select select-bordered">
                                <option disabled selected>of the first night</option>
                                <option>option1</option>
                                <option>option2</option>
                            </select>

                        </label>
                    </div>
                    <div className="md:w-1/3 w-full bg-gray-50 md:mt-0 mt-4 rounded-md py-4 px-4">
                        <p className='text-gray-400 bg-gray-50 font-semibold '>The guest must cancel by 6:00 PM on the day of arrival or pay 100% of the price for the first night.
                            <br /> <br /> You&rsquo;ll be able to make changes to your policies later on – this is just to get you started.</p>
                    </div>
                </div>
            </div>
            <div className="my-4 md:mx-4 mx-0 bg-white rounded-md px-6 py-4 w-full">
                <div className="flex sm:flex-row flex-col ">
                    <div className="">
                        <h2 className='text-gray-700 py-5 text-2xl font-semibold mb-2'>Protect Against Accidental Bookings</h2>
                        <p className='text-base text-gray-500 font-semibold '>To save you time handling accidental bookings, we automatically waive cancellation fees for guests who cancel within the first 24 hours of a booking being made. You can change this period of time later in your property management platform.</p>
                    </div>
                    <div className="toggles">
                        <div className="form-control w-52">
                            <label className="cursor-pointer label">
                                <input type="checkbox" className="toggle toggle-primary" />
                            </label>
                        </div>
                    </div>
                </div>


            </div>
            <div className="my-4 rounded-md px-6 py-4 w-full">
                <div className="flex sm:flex-row flex-col justify-between ">
                    <div className="flex flex-col rounded-md bg-white md:px-6 px-3 md:py-6 py-3">
                        <h2 className='text-gray-700 py-5 text-2xl font-semibold mb-2'>Check-out</h2>
                        <div className="join">
                            <div>
                                <label htmlFor="" className='font-semibold mb-4'>from (optional):</label>
                                <div className='space-x-2 lg:space-y-0 space-y-2'>
                                    <input className="mt-3 input bg-primary text-white input-bordered join-item sm:w-24 w-full px-1"
                                        value="12:00PM" placeholder="12:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="2:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="3:00PM" />
                                    <select className=" sm:w-24 w-full px-1 select select-bordered join-item">
                                        <option disabled selected>others</option>
                                        <option>Sci-fi</option>
                                        <option>Drama</option>
                                        <option>Action</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="join mt-5">
                            <div>
                                <label htmlFor="" className='font-semibold mb-4'>to:</label>
                                <div className='space-x-2 lg:space-y-0 space-y-2'>
                                    <input className="mt-3 input input-bordered join-item sm:w-24 w-full px-1 text-white bg-primary"
                                        value="12:00PM"
                                        placeholder="12:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="10:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="12:00PM" />
                                    <select className=" sm:w-24 w-full px-1 select select-bordered join-item">
                                        <option disabled selected>others</option>
                                        <option>Sci-fi</option>
                                        <option>Drama</option>
                                        <option>Action</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col rounded-md bg-white md:px-6 px-3 md:py-6 py-3">
                        <h2 className='text-gray-700 py-5 text-2xl font-semibold mb-2'>Check-in</h2>
                        <div className="join">
                            <div>
                                <label htmlFor="" className='font-semibold mb-4'>From:</label>
                                <div className='space-x-2 lg:space-y-0 space-y-2'>
                                    <input className="mt-3 input input-bordered join-item sm:w-24 w-full px-1 text-white bg-primary"
                                        value="12:00PM" placeholder="12:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="2:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="3:00PM" />
                                    <select className=" sm:w-24 w-full px-1 select select-bordered join-item">
                                        <option disabled selected>others</option>
                                        <option>Sci-fi</option>
                                        <option>Drama</option>
                                        <option>Action</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="join mt-5">
                            <div>
                                <label htmlFor="" className='font-semibold mb-4'>to:</label>
                                <div className='space-x-2 lg:space-y-0 space-y-2'>
                                    <input className="mt-3 input input-bordered join-item sm:w-24 w-full px-1 text-white bg-primary"
                                        value="12:00PM" placeholder="12:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="10:00PM" />
                                    <input className="input input-bordered join-item sm:w-24 w-full px-1" placeholder="12:00PM" />
                                    <select className=" sm:w-24 w-full px-1 select select-bordered join-item">
                                        <option disabled selected>others</option>
                                        <option>Sci-fi</option>
                                        <option>Drama</option>
                                        <option>Action</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="flex flex-col rounded-md bg-white md:px-6 px-3 md:py-6 py-3 my-6">
                    <h2 className='text-gray-700 text-2xl font-semibold mb-2'>Children</h2>
                    <p className='font-semibold text-gray-500'>Can you accommodate children? (You can specify the ages and prices later)</p>
                    <div className='flex space-x-3'>
                        <label className="flex flex-wrap sm:space-y-0 space-y-1 text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                            <input type="radio" name="yes" />
                            <i className="pl-2">Yes</i>
                        </label>

                        <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                            <input type="radio" name="yes" />
                            <i className="pl-2">No</i>
                        </label>
                    </div>
                </div>
                <div className="flex flex-col rounded-md bg-white md:px-6 px-3 md:py-6 py-3 my-3">
                    <h2 className='text-gray-700 text-2xl font-semibold mb-2'>Pets  </h2>
                    <p className='font-medium text-gray-300'>Some guests like to travel with their furry friends. Indicate if you allow pets and if any charges apply.</p> <br />
                    <p className='font-medium text-gray-300'>Do you allow pets?</p>
                    <div className='flex flex-wrap sm:space-y-0 space-y-1 space-x-3 sm:mt-4 mt-2'>
                        <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">

                            <input type="radio" name="yes" />
                            <i className="pl-2">YES</i>
                        </label>

                        <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                            <input type="radio" name="yes" />
                            <i className="pl-2">NO</i>
                        </label>
                        <label className="flex text-gray-900 font-semibold py-1 my-1 cursor-pointer ">
                            <input type="radio" name="yes" />
                            <i className="pl-2">UPON REQUEST</i>
                        </label>

                    </div>
                </div>
            </div>
            <div className="flex pl-4 mt-2 w-full mx-auto">
                <button className="w-full text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Continue</button>
            </div>
        </div>
    )
}

export default PoliciesPage;