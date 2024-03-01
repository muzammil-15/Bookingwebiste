
const PopupPage2 : React.FC = () =>{
    return (
        <div>
            <button className="btn" onClick={() =>
                    (
                      document.getElementById("my_modal_3") as HTMLDialogElement
                    ).showModal()
                  }>open modal</button>
            <dialog id="my_modal_4" className="modal border-2 w-full">
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
        </div>
    )
}

export default PopupPage2