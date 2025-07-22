import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/uber_logo.png'
import bg from '../assets/delivery_taxi_02.jpg'
import { FaArrowRight } from "react-icons/fa6";

function Start() {
  return (
    <div className='w-full flex flex-col justify-between h-screen'>
      <div className='bg-cover h-[80%] bg-center' style={{backgroundImage: `url(${bg})`}}>
        <img className='p-5 w-35' src={logo} alt="uber logo" />
      </div>
      <section className='flex flex-col p-3'>
        <p className=' py-8 text-3xl font-semibold'>Get Started with Uber</p>
        <div className='flex bg-zinc-950 w-full items-center px-3 py-3 rounded-lg'>
          <Link className='bg-zinc-950 w-full text-center text-lg text-white font-bold' to="/user-login">Continue</Link>
          <FaArrowRight size="25px" color='white' />
        </div>
      </section>
    </div>
  )
}

export default Start