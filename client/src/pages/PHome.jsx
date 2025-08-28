import React from 'react'
import NavbarHome from '../komponen/NavbarHome'
import Panel from '../komponen/Panel'
import Panel2 from '../komponen/Panel2'
import Panel3 from '../komponen/Panel3'
import Footer from '../komponen/footer'
import Panel1 from '../komponen/Panel1'

const PHome = () => {
  return (
    <div className='container m-auto'>
      <NavbarHome />
      <Panel/>
      <Panel1/>
      <Panel2/>
      <Panel3/>
      <Footer/>
    </div>
  )
}

export default PHome