
const DetailsForm = () => {
  return (
    <div className='w-full mt-5'>
        <form action="submit" className='flex flex-wrap justify-start items-center gap-7'>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="fName" className='text-sm'>First Name</label>
                <input type="text" placeholder='First Name' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="lName" className='text-sm'>Last Name</label>
                <input type="text" placeholder='Last Name' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="email" className='text-sm'>Email Address</label>
                <input type="text" placeholder='Email Address' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="fullGuest" className='text-sm'>Full Guest Name</label>
                <input type="text" placeholder='Full Guest Name' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="checkin" className='text-sm'>Check In date & Time</label>
                <input type="datetime-local" placeholder='Check In date & Time' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="checkout" className='text-sm'>Check Out date & Time</label>
                <input type="datetime-local" placeholder='Check Out date & Time' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="stay" className='text-sm'>Total Length of Stay</label>
                <input type="number" placeholder='Total Length of Stay' className='text-sm outline-none border border-gray-200 rounded-md p-2 '/>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="adults" className='text-sm'>Adults And Childs</label>
                <select name="" id="" className="text-sm p-2 outline-none border border-gray-200 rounded-md">
                    <option value="">Select People</option>
                    <option value="">2 People</option>
                    <option value="">3 People</option>
                    <option value="">4 People</option>
                    <option value="">5 People</option>
                </select>
            </div>
            <div className='flex flex-col gap-1 w-[250px]'>
                <label htmlFor="rooms" className='text-sm'>Rooms</label>
                <select name="" id="" className="text-sm p-2 outline-none border border-gray-200 rounded-md">
                    <option value="">01</option>
                    <option value="">2 rooms</option>
                    <option value="">3 rooms</option>
                    <option value="">4 rooms</option>
                    <option value="">5 rooms</option>
                </select>
            </div>
            <div className='flex flex-col gap-1 w-full'>
                <label htmlFor="rooms" className='text-sm'>Please write your requests in English. (optional)</label>
                <textarea name="" id="" placeholder='Write here...' className='text-sm outline-none border border-gray-200 rounded-md p-2 '>
                </textarea>
            </div>
            
        </form>
    </div>
  )
}

export default DetailsForm