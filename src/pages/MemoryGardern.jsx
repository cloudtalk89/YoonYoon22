import React, { useState,useEffect } from 'react'
import { Link } from 'react-router-dom'
import Background from '../components/Background'
import { MdFullscreenExit } from 'react-icons/md'

const MemoryGardern = () => {
const imgs = [
  "/memoryboy.webp",
  "/memorygirl.webp",
  "/tree.webp",
  "/music-boy.webp",
  "/music-girl.webp",
  "/letterboy.webp",
  "/final-boy.webp",
  "/shipped-car.webp",
  "bd.webp",
];

useEffect(() => {
  imgs.forEach((src) => {
    const img = new Image();
    img.src = src;
  });
}, []);
  

const images = [{source : '/yoon/yoon1.webp' , text : "Some memories are special because of the place. This one is special because of you"},
                {source :'/yoon/yoon2.webp', text : "Just a pretty girl, a little smile, and a memory I never want to lose"},
                {source :'/yoon/yoon3.webp', text: "If beauty were a memory , it would look something like this"},
                {source :'/yoon/yoon4.webp', text: "One smile form you is enough to make my whole day better."}
              ]

const [isImageFrame , setIsImageFrame] = useState(false)
const [image, setImage] = useState(images[0])
const flowers = Array.from({ length: 12 }, (_, i) => ({
  id: i,
  emoji: ["🌸", "🌺", "🌷", "🌸"][Math.floor(Math.random() * 4)],
  left: `${5 + i * 7 + Math.random() * 3}%`, // spread across tree
  delay: `${Math.random() * 1}s`,
  duration: `${4 + Math.random() * 3}s`,
  size: `${1 + Math.random() * 1.05}rem`,
  frame: Math.floor(Math.random() * 4),
  top: `${1 + Math.random() * 3.5}rem`,

}));

const handleImageFrame =(index) =>{
  setImage(images[index])
  setIsImageFrame(true)
}
    
  return (
    <section className='min-h-screen flex flex-col items-center justify-center'>
     {isImageFrame &&
      <section className='w-screen h-screen bg-transparent flex items-center justify-center'>
        <div className=' max-w-max  flex items-center justify-center flex-col gap-4'>
            <button onClick={()=>setIsImageFrame(false)} className=' p-2  text-lg m-2 border bg-cyan-400 rounded-lg shadow-md shadow-black font-bold hover:translate-y-0.5 cursor-pointer'> <MdFullscreenExit/></button>
             <img src={image?.source || images[0].source} className='w-2/3 md:w-1/3 p-10  border-2 rounded-2xl border-pink-400 shadow-2xl shadow-black' alt="" />
           
            <p className=' p-4 font-caveat mt-4 text-lg font-bold text-center'>{image?.text || images[0].text}</p>
        </div>
            
        
     </section>}

        <Background />
       {!isImageFrame && <div className='flex flex-col items-center justify-center gap-6 z-20 '>
            <h2 className='font-pacifico text-2xl md:text-5xl font-bold text-pink-500 my-4' >Memory Tree</h2>
            
            <p className='text-xl md:text-2xl font-caveat text-center font-bold'>Every memory with you become a leaf on this tree try to catch the leaves to see something</p>
             <Link to="/loading"><button className='p-2 hover:translate-y-0.5 px-4 rounded-xl bg-blue-300 cursor-pointer shadow-sm shadow-black font-bold'>Exlpore More</button></Link>
        </div>}
        {!isImageFrame &&
        <section className='flex flex-col-reverse  md:flex-row justify-center items-center w-full z-20 mt-6 px-4 h-full '>
            <img src="/memoryboy.webp" alt="memory boy" className='w-2/3 md:w-1/3'  loading="lazy"/>
            <div className="w-2/3 md:w-1/3 relative">
  <img src="/tree.webp" alt="tree" className="w-full h-full"  loading="lazy"/>

  {flowers.map((flower) => (
    <button
      key={flower.id}
      onClick={() => handleImageFrame(flower.frame)}
      className="absolute falling-flower cursor-pointer"
      style={{
        left: flower.left,
        top : flower.top,
        animationDelay: flower.delay,
        animationDuration: flower.duration,
        fontSize: flower.size,
      }}
    >
      {flower.emoji}
    </button>
  ))}
</div>
        </section>
}        

    </section>
  )
}

export default MemoryGardern