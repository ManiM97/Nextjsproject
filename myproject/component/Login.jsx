"use-client"
import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

const Login = () => {



  return (
    <div className="indexbg">
      <div className="logincon">
        <div>
          <h1>First Name</h1>
          <input />
          <h1>Last Name</h1>
          <input />
        </div>
        <div>
        <Link className='linkbutton' href={'/home'}>Login</Link>
      </div>
      </div>     
    </div>
  )
}

export default Login