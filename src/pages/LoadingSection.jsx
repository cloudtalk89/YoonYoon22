import React from 'react'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Background from '../components/Background'

const LoadingSection = () => {
  const images = [
  "/memoryboy.webp",
  "/memorygirl.webp",
  "/tree.webp",
  "/music-boy.webp",
  "/music-girl.webp",
  "/letterboy.webp",
  "/final-boy.webp",
  "/shipped-car.webp",
    "/bd.webp"
];

useEffect(() => {
  images.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);
  
  return (
    <section className='relative z-10 flex min-h-screen flex-col md:flex-row  items-center justify-center w-full bg-white px-4 py-16 md:gap-8'>
      <Background />
      <section className='flex flex-col justify-center  bg-red items-center h-full gap-6 my-2 md:gap-20'>
        <Link to="/memory"  className='p-2 px-4 md:p-4 md:px-8 min-w-52 text-center rounded-xl hover:translate-y-0.5 bg-linear-to-br from-blue-300 via-cyan-200 to-pink-400 cursor-pointer shadow-sm shadow-black font-bold'>Memory Tree</Link>
        <Link to="/music"  className='p-2 px-4 md:p-4 md:px-8 min-w-52 text-center rounded-xl hover:translate-y-0.5 bg-linear-to-br from-blue-300 via-cyan-200 to-pink-400 cursor-pointer shadow-sm shadow-black font-bold'>Music Garden</Link>
        
      </section>
      <div className='flex w-full items-center justify-center flex-col gap-2 max-w-max'>
        <Link to="/" className='flex items-center justify-center'><img src="./loading.webp" alt="loading" className='w-1/2 md:w-full  max-w-md object-contain'  loading="lazy"/></Link>
        <p className='text-md md:text-xl font-bold font-caveat text-center mb-4'>Choose a place to get some enjoyable thing</p>
      </div>

      <section className='flex flex-col justify-around items-center h-full gap-6 my-2 md:gap-20'>
        <Link to="/letter"  className='p-2 px-4 md:p-4 md:px-8 min-w-52 text-center rounded-xl hover:translate-y-0.5 bg-linear-to-br from-blue-300 via-cyan-200 to-pink-400 cursor-pointer shadow-sm shadow-black font-bold'>Letter House</Link>
        <Link to="/gift"  className='p-2 px-4 md:p-4 md:px-8 min-w-52 text-center rounded-xl hover:translate-y-0.5 bg-linear-to-br from-blue-300 via-cyan-200 to-pink-400 cursor-pointer shadow-sm shadow-black font-bold'>Birthday Gift</Link>
        
      </section>
    </section>
  )
}

export default LoadingSection
