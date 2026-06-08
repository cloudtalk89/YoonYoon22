import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/Background'

const Birthday = () => {
  return (
     <section className="min-h-screen flex items-center justify-center gap-8">
      <Background/>
      <span className='flex flex-col items-center gap-6  justify-between '>
                    <h2 className='text-xl md:text-4xl text-pink-500 font-bold font-pacifico text-center' >Happy Birthday, Yoon Yoon !</h2>
                    <p className='font-bold font-caveat text-lg md:text-2xl text-center'>I hope this year bring you endless joy and happiness!</p>
                     <img src="/bd.webp" alt="Birthday" className="w-full md:w-1/3 hauto" loading="lazy" />
                    <Link to="/"><button className='p-2 px-4 rounded-xl bg-blue-300 cursor-pointer shadow-sm shadow-black font-bold hover:translate-y-0.5'>Back To Home</button></Link>
                   
                    </span>
        </section>
  )
}

export default Birthday