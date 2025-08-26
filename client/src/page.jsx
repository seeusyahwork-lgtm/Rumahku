import React from 'react'
import Sidebar from './komponen/Sidebar/Sidebar'
import Dasboard from './komponen/Dashboard/Dasboard'

export const Page = () => {
  return (
    <main className='grid gap-4 p-4 grid-cols-[250px_minmax(900px,_1fr)]'>
    <Sidebar/>
    <Dasboard/>
    </main>
  )
}
