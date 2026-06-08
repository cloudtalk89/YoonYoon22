import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Background from "../components/Background";

const messages = [
  "Happy Birthday, my love ❤️",
  "Today is all about you.",
  "Thank you for filling my days with happiness, laughter, and memories that I will always cherish.",
  "Every moment with you has become something precious to me, and that's why I wanted to create this little journey just for you.",
  "I hope this year brings you countless reasons to smile, endless happiness, and all the beautiful things you deserve.",
  "Happy Birthday, and thank you for being you. 🌸"
];

export default function LetterPlace() {
  const [text, setText] = useState("");
  const [messageIndex, setMessageIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const currentMessage = messages[messageIndex];

    const timeout = setTimeout(() => {
      if (deleting) {
        setText(currentMessage.slice(0, text.length - 1));
      } else {
        setText(currentMessage.slice(0, text.length + 1));
      }
    }, deleting ? 40 : 80);

    // Finished typing
    if (!deleting && text === currentMessage) {
      setTimeout(() => {
        setDeleting(true);
      }, 1500);
    }

    // Finished deleting
    if (deleting && text === "") {
      setDeleting(false);
      setMessageIndex((prev) => (prev + 1) % messages.length);
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, messageIndex]);

  return (
    <section className="min-h-screen flex items-center justify-center gap-8">
      <Background/>
      <span className='flex flex-col items-center gap-6  justify-between '>
                    <h2 className='text-xl md:text-4xl text-pink-500 font-bold font-pacifico text-center' >Letters from the heart</h2>
                    <p className='font-bold font-caveat text-lg md:text-2xl text-center'>Some things are easier to write than to say</p>
                    <Link to="/loading"><button className='p-2 px-4 rounded-xl bg-blue-300 cursor-pointer shadow-sm shadow-black font-bold'>Exlpore More</button></Link>
                    <img src="/letterboy.webp" alt="letter boy" className="w-full md:w-1/3 hauto" loading="lazy" />
                    <p className="font-caveat font-bold text-lg p-2 md:p-4">{text} <span className=" inline-block animate-pulse">|</span></p>
                   
      </span>
    </section>
    
  );
}