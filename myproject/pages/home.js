import Employee from '@/component/Employee'
import Navbar from '@/component/Navbar'
import React from 'react'

const home = () => {
  return (
    <main>
        <div>
          <Navbar/>
          <Employee/>
          </div>
    </main>
  )
}

export default home