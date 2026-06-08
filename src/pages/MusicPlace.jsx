import React from 'react'

import { FaPlayCircle,FaPauseCircle } from 'react-icons/fa'
import { useState,useRef } from 'react'
import Background from '../components/Background'
import { Link } from 'react-router-dom'

const MusicPlace = () => {
    const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleToggle = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className='flex flex-col gap-7 items-center justify-center min-h-screen'>
        <Background/>
         
        
            {/* This is music and character */}
            <section className='flex items-center justify-center gap-8'>
                <img src="/music-boy.webp" alt="music boy" className='w-1/3 h-auto ' loading="lazy"/>
                 <audio ref={audioRef} src="/yoon/beach.m4a" className='hidden'  preload="auto"
  loop />
                 

               {/*  Music Container and Text */}
                <span className='md:flex flex-col items-center gap-6  justify-between hidden'>
                    <h2 className='text-xl md:text-4xl text-pink-500 font-bold font-pacifico text-center' >Better With Music</h2>
                    <p className='font-bold font-caveat text-lg md:text-2xl text-center'>It might not be the best, but I try my best </p>
                    {/*Music player */}
                    <span className='flex items-center justify-center gap-5 p-4 text-4xl text-blue-400'>
                       
                        {!isPlaying &&<button onClick={handleToggle} className='cursor-pointer'><FaPlayCircle/></button>}
                        {isPlaying &&<button onClick={handleToggle} className='cursor-pointer'><FaPauseCircle/></button>}
                       
                    </span>
                    <Link to="/loading"><button className='p-2 px-4 rounded-xl bg-blue-300 cursor-pointer shadow-sm shadow-black font-bold'>Exlpore More</button></Link>
              </span>
                <img src="/music-girl.webp" alt="music girl" className='w-1/3 h-auto ' loading="lazy"/>
            </section>

            {/*  Music Container and Text mobile */}
            <span className='flex flex-col items-center  justify-between md:hidden'>
                
                    <h2 className='text-xl text-pink-500 font-bold font-pacifico text-center' >Better With Music</h2>
                    <p className='font-bold font-caveat text-lg text-center'>It might not be the best, but I try my best </p>
                    
                    {/*Music player */}
                    <span className='flex items-center justify-center gap-3 p-2 mt-2 text-2xl text-blue-400 mb-4'>
                        
                        
                        {!isPlaying && <button onClick={handleToggle} className='cursor-pointer'><FaPlayCircle/></button>}
                         {isPlaying &&<button onClick={handleToggle} className='cursor-pointer'><FaPauseCircle/></button>}
                       
                    </span>
                    <Link to="/loading"><button className='p-2 px-4 rounded-xl bg-blue-300 cursor-pointer shadow-sm shadow-black font-bold'>Exlpore More</button></Link>
                    
              </span>
        
    </section>
  )
}

export default MusicPlace