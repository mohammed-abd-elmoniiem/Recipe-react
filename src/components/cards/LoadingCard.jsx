import React from 'react'

export default function LoadingCard() {
  return (
    <>

    <div className=' p-2  rounded-lg bg-white flex flex-col gap-2 border border-gray-200 ' >
        <div className={`w-full h-44 animating rounded-md flex items-center justify-center`}>
            <i className="fa fa-image text-7xl text-gray-50 "></i>
        </div>
        <div className="w-[85%] h-4 animating rounded-lg"></div>
        <div className="w-[85%] h-4 animating rounded-lg"></div>

        <div className="w-[35%] h-4  animating rounded-lg"></div>

    </div>
    
    </>
  )
}
