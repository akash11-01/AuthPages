import React from 'react'

export default function Account() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <div className='flex flex-col w-[80%] md:w-[40%] mx-auto h-[95%] m-5 border border-gray-300'>
                <div className='p-3 font-semibold border-b-2 h-16 flex items-center'>
                    <h1 className=' border-b-gray-100'>Account Setting</h1>
                </div>
                <div className="bg-slate-50 h-screen">
                    <div className="flex flex-wrap m-8 gap-5">
                        <img src="https://th.bing.com/th/id/OIGP.GpzTJ3WO1HkrCPeCvZmt?pid=ImgGn" alt="img" className='w-16 h-16 rounded-full object-cover' />
                        <div className="mt-[-10px]">
                            <h1 className='font-bold text-xl text-wrap'>Marry Doe</h1>
                            <p className='text-wrap'>Harry@Gmail.com</p>
                        </div>
                    </div>
                    <p className='text-wrap ml-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In laboriosam maxime provident sint recusandae dolorem dicta nostrum nemo illum a doloribus, aspernatur magnam?</p>
                </div>
            </div>
        </div>
    )
}
