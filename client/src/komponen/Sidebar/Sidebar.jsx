import React from 'react'
import { AkunToggle } from './AkunToggle'
import { RouteSelect } from './RouteSelect'

const Sidebar
  = () => {
    return (
      <div>
        <div className='overflow-y-scroll sticky top-4 h-[calc(100vh-32px-48px)]'>
          {/* membuat main sidebar kontem  */}
          <AkunToggle/>
          
          <RouteSelect/>
        </div>
        {/* membuat : rencanan toggle  */}
      </div>
    )
  }

export default Sidebar
