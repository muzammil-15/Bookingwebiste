import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import logo from '../assets/images/logo.png'
const Footer = () => {
  return (
    <div className={`relative w-full footer mt-10`}>
      <div className="mx-auto flex max-w-7xl py-10 items-center justify-between padding-x">
        <div className="w-full flex flex-col gap-10">
            <div className="flex gap-20 items-center w-full flex-wrap">
                
                <h2 className='text-xl md:text-4xl flex-1 text-white font-bold'>Make your journey Flexible with us</h2>
                <div className='border border-gray-100 h-14 '></div>
                <div className='flex flex-col gap-4 flex-1'>
                    <h2 className='text-xl text-white font-bold'>Join Our Newslatter</h2>
                    <div className='flex justify-start items-center gap-3'>
                        <input type="emial" placeholder='Your Email' className='bg-white text-black outline-none py-2 pl-2 rounded-md w-2/3 '/>
                        <button className='border text-white  border-gray-300 rounded-md py-2 px-6 '>Subscribe</button>

                    </div>
                </div>

            </div>
            <div className='flex justify-center items-start flex-wrap gap-5'>
                <div className='flex flex-col gap-4 w-[200px] md:w-[300px] pr-20'>
                    <img src={logo} alt="" className='w-[160px]'/>
                    <p className='text-white text-sm '>Nulla eleifend pulvinar purus, molestie euismod odio imperdiet ac. Ut sit amet erat nec nibh rhoncus varius in non lorem. Donec interdum,</p>
                </div>
                <div className='flex flex-col gap-3 flex-1 text-white text-sm  '>
                    <li className='cursor-pointer list-none'>Countries</li>
                    <li className='cursor-pointer list-none'>Regions</li>
                    <li className='cursor-pointer list-none'>Cities</li>
                    <li className='cursor-pointer list-none'>Districts</li>
                    <li className='cursor-pointer list-none'>Hotels</li>
                </div>
                <div className='flex flex-col gap-3 flex-1 text-white text-sm '>
                    <li className='cursor-pointer list-none'>Unique places to Stay</li>
                    <li className='cursor-pointer list-none'>Reviews</li>
                    <li className='cursor-pointer list-none'>Discover monthly Stay</li>
                    <li className='cursor-pointer list-none'>Unpacked travel articles</li>
                    <li className='cursor-pointer list-none'>Seasonal and holidays deals</li>
                </div>
                <div className='flex flex-col gap-3 flex-1 text-white text-sm '>
                    <li className='cursor-pointer list-none'>About us</li>
                    <li className='cursor-pointer list-none'>Customers and services helps</li>
                    <li className='cursor-pointer list-none'>Partner helps</li>
                    <li className='cursor-pointer list-none'>Careers</li>
                    <li className='cursor-pointer list-none'>Terms and conditions</li>
                </div>

            </div>
            <hr />
            <div className='flex justify-between items-center gap-5 flex-wrap-reverse '>
                <span className='text-white text-sm'>Copyright © 2023 Booking, All rights reserved.</span>
                <ul className='flex justify-center items-center gap-5 text-white text-sm'>
                    <li className='cursor-pointer list-none'>Terms of use</li>
                    <li className='cursor-pointer list-none'>Privacy policy</li>
                    <li className='cursor-pointer list-none'>Help center</li>
                </ul>
                <ul className='flex justify-center items-center gap-3 text-white text-sm'>
                    <li className='cursor-pointer list-none w-8 h-8 border border-white rounded-full flex justify-center items-center'><Facebook size={20}/></li>
                    <li className='cursor-pointer list-none w-8 h-8 border border-white rounded-full flex justify-center items-center'><Instagram size={20}/></li>
                    <li className='cursor-pointer list-none w-8 h-8 border border-white rounded-full flex justify-center items-center'><Linkedin size={20}/></li>
                    <li className='cursor-pointer list-none w-8 h-8 border border-white rounded-full flex justify-center items-center'><Twitter size={20}/></li>
                </ul>

            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Footer