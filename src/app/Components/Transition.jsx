"use client"
import React from 'react'
import {motion} from 'framer-motion'

const Transition = () => {
  return (
    <>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-30 tra' initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}} transition={{duration:0.8, ease:"easeInOut"}}/>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-20 tran' initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}} transition={{duration:0.8, delay:0.2, ease:"easeInOut"}}/>
    <motion.div className='fixed top-0 bottom-0 right-full w-screen h-screen z-10 trans' initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}} transition={{duration:0.8, delay:0.4, ease:"easeInOut"}}/>
    </>
  )
}

export default Transition
