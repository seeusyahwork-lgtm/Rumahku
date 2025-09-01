import React from 'react'
import { TopBar } from './TopBar'

import CTKonsumen from './Table/CTKonsumen'

const DKonsumen = () => {
  return (
    <div className='border-b  mb-4 mt-2 pb-4 border-stone-300 shadow h-auto text-black' >
    <TopBar/>
   
    <CTKonsumen/>


    </div>
  )
}

export default DKonsumen