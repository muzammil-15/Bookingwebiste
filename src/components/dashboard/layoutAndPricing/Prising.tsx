import React from "react";
const PrisingPage: React.FC = () =>{

  return (
    <div className="">

      <div className="flex flex-col justify-center text-center items-center bg-white rounded-lg lg:py-12 py-6 lg:px-72 px-6 lg:h-[70vh] h-auto ">
        <div className="py-6 px-5 bg-gray-300 rounded-full">
          <img className='h-[52px]' src="assets/images/popup/double-bed-icon.svg" alt="img" />
        </div>
        <p className='my-6'>No rooms have been added to your property – start adding rooms to describe bed options, layout, and pricing for guests.</p>

        <button onClick={() =>
                    (
                      document.getElementById("my_modal_8") as HTMLDialogElement
                    ).showModal()
                  } className="w-full text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Add Room</button>
      </div>
      <dialog id="my_modal_8" className="modal border-2 w-full">
        <div className="modal-box px-11 py-9 w-11/12 max-w-5xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
          <div className="flex flex-row justify-center items-center gap-5">
            <img className="sm:h-[130px] h-[20px] " src="assets/images/popup/logo1.svg" alt="" />
            <img className="sm:h-[208px] h-[20px]" src="assets/images/popup/logo4.svg" alt="" />
            <img className="sm:h-[130px] h-[20px]" src="assets/images/popup/logo3.svg" alt="" />
          </div>
          <div className="flex justify-center items-center flex-col">
            <h1 className="font-bold text-2xl text-gray-900 text-center my-4">Hotel, B&Bs & More</h1>
            <p className="text-gray-400 sm:my-6 my-3 text-center">Whether it&apos;s hotels, B&Bs, guest houses, hostels, or condo hotels, our comprehensive platform caters to a diverse range of properties, serving varied accommodation needs all in one place.</p>
            <button className="text-white hover:text-white mt-6 border border-primary py-2 px-6 sm:w-[60%] w-full bg-primary focus:outline-none hover:bg-indigo-600 font-semibold rounded text-lg">List Your Property</button>
          </div>
        </div>
      </dialog>
      <div id='my_modal_8' className="">
        <div className="space-y-6 my-4 bg-white px-4 py-6 rounded-md">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-semibold text-gray-900 block mb-2">Room type</label>

                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option className="font-semibold text-slate-300">Double </option>
                  <option className="font-semibold text-slate-300">Single </option>
                </select>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Number of rooms (of this type)</label>
                <input type="text" name="category" id="category" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="1"  />

              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Room name</label>
                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option className="font-semibold text-slate-300">Select</option>
                  <option className="font-semibold text-slate-300">single</option>
                  <option className="font-semibold text-slate-300">double</option>
                </select>
                <label htmlFor="">
                  <p className="text-gray-400 my-3">This is the name guests will see on the Booking.com website.</p>
                </label>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Custom name (optional)</label>
                <input type="text" name="price" id="price" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5" placeholder="Room name custom"  />
                <label htmlFor="">
                  <p className="text-gray-400 my-3">Create an optional, custom name for your reference.</p>
                </label>
              </div>

            </div>
          </form>
        </div>

        <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">What are the contact details for this property?</h1>

        <div className="space-y-6 my-4 bg-white px-4 py-6 rounded-md">
          <form action="#">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-semibold text-gray-900 block mb-2">What kind of beds are available in this room?</label>

                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option className="font-semibold text-slate-300">Twin bed(s) / 19-130cm wide </option>
                  <option className="font-semibold text-slate-300">more </option>
                </select>
                <button className="py-3 px-4 bg-primary text-white rounded-lg mt-4">+ Add Another Bed</button>
              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Number of beds</label>

                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option className="font-semibold text-slate-300">Select the number of beds</option>
                  <option className="font-semibold text-slate-300">1 </option>
                  <option className="font-semibold text-slate-300">2 </option>
                  <option className="font-semibold text-slate-300">3 </option>
                </select>

              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">How many guests can stay in this room?</label>
                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option className="font-semibold text-slate-300">0</option>
                  <option className="font-semibold text-slate-300">1</option>
                  <option className="font-semibold text-slate-300">2</option>
                </select>

              </div>
              <div className="col-span-6 sm:col-span-3">
                <label className="text-sm font-medium text-gray-900 block mb-2">Room size (optional)</label>
                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <option className="font-semibold text-slate-300">0 <span className="text-primary text-end">Square Meter</span>
                  </option>
                  <option className="font-semibold text-slate-300">1</option>
                  <option className="font-semibold text-slate-300">2</option>
                </select>

              </div>
            </div>
          </form>
        </div>
        <h1 className="py-5 text-2xl font-medium title-font mb-2 text-gray-900">Base price per night</h1>

        <div className="space-y-6 my-4 bg-white px-4 py-6 rounded-md">
          <form action="#">
            <p className="py-4 px-4 my-6 mx-4 bg-gray-100 text-gray-400 rounded-md">This is the lowest price that we automatically apply to this room for all dates. Before your property goes live, you can set seasonal pricing on your property dashboard.</p>
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6">
                <label className="text-sm font-semibold text-gray-900 block mb-2">Price for 0 people</label>

                <select name="select" id="select" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-cyan-600 focus:border-cyan-600 block w-full p-2.5">
                  <span>USD$ / per night</span>
                  <option className="font-semibold text-slate-300">0 USD$ / per night</option>
                  <option className="font-semibold text-slate-300">1  $12 </option>
                </select>
              </div>
           
            </div>
          </form>
        </div>
        <button className="w-full sm:mt-6 mt-2 text-white text-center bg-primary border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded">Continue</button>
      </div>
    </div>
  )
}

export default PrisingPage