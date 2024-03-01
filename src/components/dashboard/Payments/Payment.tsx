import React from 'react'

const PaymentPage: React.FC = () => {
    return (
        <form>
            <h1 className="py-5 text-2xl font-semibold title-font mb-2 text-gray-900">Policies</h1>
            <div className="mb-5 bg-white rounded-md px-4 py-4">
                <h2 className='text-gray-400 text-2xl font-semibold'>Guest Payment Options</h2>
                <label className="mb-3 mt-4 block text-base font-medium text-[#07074D]">
                    Can you charge credit cards at the property?
                </label>
                <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center border-2 px-6 py-3 rounded-md">
                        <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                        <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#07074D]">
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center border-2 px-6 py-3 rounded-md">
                        <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                        <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">
                            No
                        </label>

                    </div>

                </div>
                <label htmlFor="" className='text-gray-400'>
                    We will inform guests that you only accept cash.
                </label>
            </div>
            <div className="mb-5 bg-white rounded-md px-4 py-4">
                <h2 className='text-gray-800 text-2xl font-semibold'>Commission Payments</h2>
                <p className='text-gray-400 mt-4'>At the beginning of each month, we&apos;ll send you an invoice for all complete bookings in the previous month.</p>
                <label className="form-control w-full max-w-full ">
                    <div className="label">
                        <span className="label-text font-semibold text-lg text-gray-900
                                ">What name should be placed on the invoice (e.g. legal/company name)?</span>
                    </div>
                    <select className="select select-bordered max-w-sm">
                        <option disabled selected>Property name</option>
                        <option>Yes</option>
                        <option>No</option>
                        <option>Other</option>
                    </select>

                </label>
                <label className="mb-3 mt-4 block text-base font-medium text-[#07074D]">
                    Does this recipient have the same address as your property?
                </label>
                <div className="flex items-center space-x-6 mb-4">
                    <div className="flex items-center border-2 px-6 py-3 rounded-md">
                        <input type="radio" name="radio1" id="radioButton1" className="h-5 w-5" />
                        <label htmlFor="radioButton1" className="pl-3 text-base font-medium text-[#07074D]">
                            Yes
                        </label>
                    </div>
                    <div className="flex items-center border-2 px-6 py-3 rounded-md">
                        <input type="radio" name="radio1" id="radioButton2" className="h-5 w-5" />
                        <label htmlFor="radioButton2" className="pl-3 text-base font-medium text-[#07074D]">
                            No
                        </label>
                    </div>
                </div>
            </div>

            <div className="mb-5 bg-white rounded-md px-4 py-4">
                <h2 className='py-2 text-2xl font-semibold title-font mb-2 text-gray-900'>You’re almost done – just a couple last things to consider</h2>
                <h2 className='text-2xl font-semibold title-font mb-2 text-gray-900'>Your availability to guests</h2>
                <p className='text-base font-semibold title-font mb-2 text-gray-900'>To help you start earning, we automatically open your property for bookings for the next 18 months. To make changes to your availability before opening, select &quot;Complete registration and open later.&quot; Your availability can also be adjusted after you open for bookings.</p>
                <h2 className='py-3 text-2xl font-semibold title-font mb-2 text-gray-900'>To complete your registration, check the boxes below:</h2>
                <div className="mt-3 flex items-start">
                    <input type="checkbox" className="checkbox mr-4" />
                    <label htmlFor="af-submit-application-privacy-check" className="text-base font-semibold title-font mb-2 text-gray-900">I certify that this is a legitimate accommodation business with all necessary licenses and permits, which can be shown upon first request. Booking.com B.V. reserves the right to verify and investigate any details provided in this registration.</label>
                </div>
                <div className="mt-3 flex items-start">
                    <input type="checkbox" className="checkbox mr-4" />
                    <label htmlFor="af-submit-application-privacy-check" className="text-base font-semibold title-font mb-2 text-gray-900">I have read, accepted, and agreed to the <span className='text-primary cursor-pointer'>General Delivery Terms</span> and <span className='text-primary cursor-pointer '>Privacy Statement</span> . Booking.com enables accommodations and guests to communicate through Booking.com, which receives and processes communications in accordance with the Booking.com Privacy Statement and General Delivery Terms.</label>
                </div>
            </div>
            <div className="flex flex-col pl-4 mt-4 w-full mx-auto">

                <button className="w-full text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Complete Registration & Open for booking</button>
                <button className="mt-6 w-full border-2 border-primary text-primary text-center bg-white py-2 px-6 focus:outline-none hover:bg-primary hover:text-white rounded">Complete Registration & Open later</button>
                <p className='my-6 text-center font-semibold text-gray-700'>Almost done! You can always change the info even after you complete the registration.</p>
            </div>
        </form>
    )
}

export default PaymentPage;