import React from 'react'
import {motion} from 'framer-motion'
import {pageAnimation, titleAnimation, titleAnim} from '../animation'
import styled from 'styled-components'

const ContactUs = () =>{
    return(
        <ContactStyle variants={pageAnimation} initial='hidden' animate='show' exit='exit' style={{background: '#fff'}}>

        <Title>
            <Hide>
                <motion.h2 variants={titleAnimation}>Get in touch.</motion.h2>
            </Hide>
        </Title>
        <div>
            <Hide>
            <Social variants={titleAnim}>
            <Circle />
            <h2>Send us a Mesage</h2>

            </Social>
            </Hide>
            <Hide>
            <Social variants={titleAnim}>
            <Circle />
            <h2>Send a email</h2>

            </Social>
            </Hide>
            <Hide>
            <Social variants={titleAnim}>
            <Circle />
            <h2>Social Media</h2>

            </Social>
            </Hide>
        </div>
                    
        </ContactStyle>
    )
}
const ContactStyle = styled(motion.div)`
padding: 5rem 10rem;
color: #353535;
min-height: 90vh;
@media (max-width: 1300px){
    
    padding: 2rem;
    font-size: 1rem;
}

`
const Title = styled(motion.div)`
margin-bottom: 4rem;
color: black;
@media (max-width: 1300px){
    margin-top: 5rem;
}
`
const Hide = styled.div`
overflow: hidden;
`
const Circle = styled.div`
height: 3rem;
width: 3rem;
border-radius: 50%;
background: #353535;
`

const Social = styled(motion.div)`
display: flex;
align-items: center;
h2{
    margin: 2rem;
}
`


export default ContactUs