import React from 'react'
import { TopBar } from './TopBar'
// import { Grid } from './Grid'
// import CFormProyek from './CFormProyek
import CTPengawas from './Table/CTPengawas'

const DasboardPengawas = () => {
  return (
    <div className='border-b  mb-4 mt-2 pb-4 border-stone-300 shadow h-auto text-black' >
    <TopBar/>
    {/* <Grid/> */}
    {/* <CFormProyek/> */}
    <CTPengawas/>


    </div>
  )
}

export default DasboardPengawas