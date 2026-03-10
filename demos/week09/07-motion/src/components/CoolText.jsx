"use client"
import { motion } from "motion/react"

export default function CoolText({children}) {
    return (
        <motion.div 
            animate={{scale: 3}}
            transition={{
                repeat: Infinity,
                duration: 5,
                type: 'spring',
                bounce: 0.5
            }}
        
        >
            {children}
        </motion.div>
    )
}

<iframe id="myFrame" style="flex: 1 1 auto;" src="https://tech-educators.github.io/software-development/lessons/react/react-motion/" frameborder="0">
    You are using a browser that does not support iFrames, please choose
    another.
  </iframe>