import React from 'react'

export default function LoadingCard() {
  return (
    <>

    <div className='w-full p-4 rounded bg-white flex flex-col gap-2 ' >
        <div className={`w-full h-44 bg-gray-300 bg-linear-to-r from-gray-300 via-gray-200 to-gray-300 rounded-md flex items-center justify-center`}>
            <i className="fa fa-image text-7xl text-gray-50 "></i>
        </div>
        <div className="w-[85%] h-4 bg-gray-300 rounded-lg"></div>
        <div className="w-[85%] h-4 bg-gray-300 rounded-lg"></div>

        <div className="w-[35%] h-4  bg-linear-to-r from-gray-300 via-red-500 to-gray-300 rounded-lg loading"></div>
 
    </div>
    
    </>
  )
}
