import React from 'react'
import Signup from '../components/SignupContent'
import Navbar from '../components/Navbar'

const SignupPage = () => {
  return (
    <div className='w-full h-screen'>
      <Navbar signup={true}/>
      <Signup />
    </div>
  )
}

export default SignupPage
