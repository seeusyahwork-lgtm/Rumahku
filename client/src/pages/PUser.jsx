import React from 'react'
import { HeaderUser } from '../komponen/User/HeaderUser'
import { TopHeader } from '../komponen/User/TopHeader'
import { TimeLine } from '../komponen/User/TimeLine'
import Footer from '../komponen/footer'

function PUser() {
  return (
    <div className='container m-auto w-7xl'>
        <TopHeader/>
        <HeaderUser/>
        <TimeLine/>
        <Footer/>
    </div>
  )
}

export default PUser