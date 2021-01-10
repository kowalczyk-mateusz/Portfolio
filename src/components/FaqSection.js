import React from 'react'
import {About} from '../styles'
import styled from 'styled-components'
import Toggle from '../components/Toggle'
import {AnimateSharedLayout, motion} from 'framer-motion'

const FaQSection = () =>{
    return(
            <Faq>
                <h2>Any Questions <span>FAQ</span></h2>
                <AnimateSharedLayout>
                <Toggle title={'How DO I Start'}>
                    <motion.div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </motion.div>
                </Toggle>
                <Toggle title={'Daily Schedule'}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                </Toggle>
                <Toggle title={'Diffrent Payment methods'}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                </Toggle>
                <Toggle title={'What product do you offer?'}>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                </Toggle>
                </AnimateSharedLayout>
            </Faq>
    )
}

const Faq = styled(About)`
display: block;
span{
    display: block;
}
h2{
    padding-bottom: 2rem;
    font-weight: lighter;
}
.faq-line{
background: #ccc;
height: 0.2rem;
margin: 2rem 0rem;
width: 100%;
}
.questions{
    padding: 3rem 0rem;
    cursor: pointer;

}
.answer{
    padding: 2rem 0rem;
    p{
        padding: 1rem 0rem;
    }
}
`


export default FaQSection