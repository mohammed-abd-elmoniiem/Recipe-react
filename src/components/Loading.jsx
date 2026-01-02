import React from 'react'
import LoadingCard from './cards/LoadingCard'

function Loading() {
  return (
    <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-4 w-full '>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>
        <LoadingCard/>


    </div>
  )
}

export default Loading