import React from 'react';

const CustomInput: React.FC = () =>{

    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <div className="h-[50vh]  flex w-full border-2 border-dashed border-gray-500 bg-white rounded-md items-center flex-col justify-center bg-grey-lighter">
                <h2 className='text-xl text-gray-900 font-semibold my-2'>Upload at least 1 photo</h2>
                <p className='text-gray-400 my-4'>Drag & Drop your photo here</p>
                <label className="flex flex-col items-center px-4 py-6 bg-white text-blue rounded-lg shadow-lg tracking-wide uppercase border border-primary cursor-pointer hover:bg-primary hover:text-white">

                    <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                    </svg>
                    <span className="mt-2 text-base leading-normal">Add Photo</span>
                    <input type='file' className="hidden" />
                </label>
            </div>

            <button className="mt-6 w-full text-white text-center bg-primary border-0 py-3 px-6 focus:outline-none hover:bg-purple-600 rounded">Continue</button>
        </div>
    );
}

export default CustomInput;
