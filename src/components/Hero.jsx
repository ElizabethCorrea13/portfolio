import image from "/public/image.jpg"
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div id="home" className="px-16 flex min-h-screen w-full items-center justify-center py-28 md:px-32">
      <div className="flex flex-col items-center justify-center gap-10 text-white">
        <motion.div
        initial={{y: -50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}

        >
          <img src={image} alt="" className="w-[280px] cursor-pointer rounded-full shadow-xl shadow-indigo-900 transition-all duration-300 hover:translate-y-5 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-600 md:w-[330px]"/>
        </motion.div>

        <motion.div
        initial={{y: 50, opacity: 0}}
        animate={{y: 0, opacity: 1}}
        transition={{duration: 0.8, delay: 0.2}}

        className="flex max-w-[600px] flex-col items-center justify-center gap-3 text-center">
          <h1 className="bg-gradient-to-r from-blue-500 to-pink-500 bg-clip-text text-transparent text-3xl font-light md:text-6xl">Elizabeth Correa</h1>
          <h3 className="bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent text-2xl md:text-4xl">Full-Stack Developer</h3>
          <p className="md:text-base text-pretty text-sm text-gray-400">
            I'm a motivated Full Stack Developer with a strong foundation in web development. I enjoy transforming ideas into functional and visually appealing applications. Always eager to learn and grow, I'm ready to take on new challenges and bring value to innovative projects.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero