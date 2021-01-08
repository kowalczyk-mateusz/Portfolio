import React from 'react'
import {About} from '../styles'
import styled from 'styled-components'

const FaQSection = () =>{
    return(
            <Faq>
                <h2>Any Questions <span>FAQ</span></h2>
                <div className="questions">
                    <h4>How DO I Start</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="questions">
                    <h4>Daily Schedule</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="questions">
                    <h4>Diffrent Payment methods</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
                <div className="questions">
                    <h4>What product do you offer?</h4>
                    <div className="answer">
                        <p>Lorem ipsum dolor sit.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum soluta eligendi sequi id,
                             quos voluptatum earum quae veniam, quas ab dolores? Numquam, porro. 
                             Necessitatibus doloribus maxime nemo molestiae adipisci possimus?</p>
                    </div>
                    <div className="faq-line"></div>
                </div>
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