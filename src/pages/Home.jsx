import React,{useEffect,useRef,useState} from 'react'
import Background from '../components/Background'
import { Link } from 'react-router-dom'

const messages = [
  "Once upon a time on a special day in 2004...",
  "A beautiful soul was born",
  "Nobody knew then how many soul she would touch",
  "and how many memories she would create ",
  "and how special she would become ",
  "Today is her day."
]

const Home = () => {
  const [text, setText] = useState("");
  const [msgIndex, setMsgIndex] = useState(0);
  const [showHero, setShowHero] = useState(false);

 useEffect(() => {
    if (msgIndex >= messages.length) {
      // Typing finished, show hero
      setTimeout(() => setShowHero(true), 500); // optional delay for smooth transition
      return;
    }

    let charIndex = 0;

    const interval = setInterval(() => {
      if (charIndex < messages[msgIndex].length) {
        setText(messages[msgIndex].slice(0, charIndex + 1));
        charIndex++;
      } else {
        clearInterval(interval);
        setTimeout(() => {
          setText(""); // clear before next message
          setMsgIndex((prev) => prev + 1);
        }, 1000); // pause between messages
      }
    }, 50);

    return () => clearInterval(interval);
  }, [msgIndex]);
  
   const images = [
    "/hero-boy.webp",
    "/hero-girl.webp",
    "/loading.webp"
  ];
 

  useEffect(() => {
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  if(!showHero){
    return (
      <section className='relative z-10 flex items-center justify-center min-h-screen w-full bg-white px-4 py-16 gap-8'>
        <Background />
         <p className='text-2xl font-bold font-caveat text-center' >{text}</p>
        </section>
    )
  }

 

  return (
    
    <section className='relative z-10 flex flex-col min-h-screen justify-center items-center w-full bg-white gap-8 md:gap-2'>
     <Background/>
      <div className='flex items-center justify-center flex-col gap-4 text-center  md:hidden'>
          <h1 className='font-pacifico font-bold text-2xl ' >Happy Birthday</h1>
          <p className='font-pacifico text-xl text-red-500 font-bold'>My Love</p>
          <p className=' font-bold font-caveat' >Today, I prepared a little birthday surprise for you</p>
          <Link to="/loading"><button className='p-2 px-4 rounded-xl hover:translate-y-0.5 bg-blue-300 cursor-pointer shadow-sm shadow-black font-bold'>Start the Journey</button></Link>
        </div>
      
      <section className='flex items-center justify-center'>
        <div className='w-1/2 flex justify-center items-center'>
            <img src="/hero-boy.webp" alt="hero boy" className='w-full md:w-2/3 h-auto object-cover'  loading="lazy"/>
        </div>
        
        <div className=' items-center justify-center flex-col gap-8 text-center hidden md:flex w-1/3 '>
          <h1 className='font-pacifico font-bold text-5xl leading-20' >Happy Birthday🎂</h1>
          <p className='font-pacifico text-3xl text-red-500 font-bold'>My Love</p>
          <p className='text-xl font-bold font-caveat' >Today I prepared a little birthday surprise for you.</p>
          <Link to="/loading"><button className='hover:translate-y-0.5 p-3 px-6 rounded-xl bg-blue-300 cursor-pointer shadow-md shadow-black font-bold'>Start the Journey</button></Link>
        </div>

        <div className='w-1/2 flex justify-center items-center'>
        <img src="/hero-girl.webp" alt="hero girl" className='w-full md:w-2/3 h-auto object-cover'  loading="lazy"/>
        </div>
      </section>
      
     
    </section > 
  )
}

export default Home
