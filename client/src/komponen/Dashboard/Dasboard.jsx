import React from 'react'
import { TopBar } from './TopBar'
import { Grid } from './Grid'

const Dasboard = () => {
  return (
    <div className='border-b  mb-4 mt-2 pb-4 border-stone-300 shadow h-[200vh] text-black' >
    <TopBar/>
    <Grid/>
    </div>
  )
}

export default Dasboard