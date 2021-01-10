import React from 'react'
import home1 from '../img/home1.png'
import {motion} from 'framer-motion'
import {titleAnimation, fade, imageAnimation } from '../animation'
import Wave from '../components/Wave'

import { About, Description, Hide, Image} from '../styles'
const AboutSection = () =>{
    return(
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>We work to make</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                        <motion.h2 variants={titleAnimation}>true.</motion.h2>
                    </Hide>
                </motion.div>
                <motion.p variants={fade}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
                    Accusantium fugit vitae velit natus.
                     </motion.p>
                     <motion.button variants={fade}>Contact Us</motion.button>

            </Description>
            <Image>
                <motion.img variants={imageAnimation} src={home1} alt='the guy with camera'/>
            </Image>
            <Wave/>
        </About>
    )
}



export default AboutSection