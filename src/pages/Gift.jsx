import React from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/Background'

const Gift = () => {
  return (
    <section className='min-h-screen flex justify-center items-center flex-col-reverse md:flex-row'>
      <Background/>
        <section className='flex items-center justify-center mt-4'>
            <img src="/final-boy.webp" alt="final boy" className='w-1/2 h-auto'  loading="lazy"/>
        </section>
         <Link to="/birthday"><button className='hover:translate-y-0.5 p-3 px-6 rounded-xl bg-blue-300 cursor-pointer shadow-md shadow-black font-bold'>Received</button></Link>
        <section className='flex flex-col items-center justify-center'>
                <div className='flex flex-col justify-center items-center'>
                     <h2 className='font-pacifico text-md md:text-3xl font-bold  my-4' >My Little Surprise Gift is</h2>
                     <p className='font-pacifico text-xl md:text-3xl font-bold  my-4' >On the way</p>
                     <img src="/shipped-car.webp" alt="shipped Car" loading="lazy"  className='w-1/2 h-auto '/>
                </div>
        </section>
    </section>
  )
}

export default Gift