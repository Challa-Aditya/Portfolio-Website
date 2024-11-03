'use client'
import { delay, motion } from "framer-motion";
import Typed from "@/components/Typed";
import Skills from "@/components/Skills";

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: delay,
    },
  },
});
const Home = () => {
  return (
    <div className="mt-16 pt-6 px-6 relative border-b border-neutral-900 pb-4 lg:mb-35">   
      <div className="relative flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-white text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Aditya Challa
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight max-md:text-center text-transparent"
            >
              <Typed/>
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 text-white max-lg:text-center max-w-xl py-6 font-light tracking-tighter"
            >
              Hey! I'm Aditya.
              With a passion for data analysis, machine learning, and frontend development, I love transforming data into insights 
              and building user-focused solutions. Dive in to see how I bring ideas to life through tech and creativity.
            </motion.p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <motion.img
              variants={container(0)}
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="rounded-3xl max-lg:w-9/12"
              src={"/assets/images/drums.jpg"}
              alt="profilepic"
            />
          </div>
        </div>
      </div>

      <h1 className='SkillsHeading'>Technical Skills</h1>
      <div className='skills'>
        <Skills skill='python'/>
        <Skills skill='java'/>
        <Skills skill='tensorflow'/>
        <Skills skill='hadoop'/>
        <Skills skill='hive'/>
        <Skills skill='sklearn'/>
        <Skills skill='powerbi'/>
        <Skills skill='react'/>
        <Skills skill='node'/>
        <Skills skill='flask'/>
        <Skills skill='django'/>
        <Skills skill='mysql'/>
        <Skills skill='postgresql'/>
        <Skills skill='mongodb'/>
        <Skills skill='aws'/>
        <Skills skill='git'/>
        <Skills skill='github'/>
        <Skills skill='postman'/>
        <Skills skill='docker'/>
        <Skills skill='firebase'/>
      </div>
    
    </div>

  );
  
}

export default Home;
