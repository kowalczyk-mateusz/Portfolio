import React from 'react'
import diaphgram from '../img/diaphragm.svg'
import clock from '../img/clock.svg'
import money from '../img/money.svg'
import teamwork from '../img/teamwork.svg'
import home2 from '../img/home2.png'
import styled from 'styled-components'
import {About, Description, Image} from '../styles'
import {useScroll} from './useScroll'
import {scrollReveal} from '../animation'

const ServicesSection = () =>{
    const [element, controls] = useScroll();
    return(
<Services variants={scrollReveal} animate={controls} initial='hidden' ref={element} >
    <Description>
        <h2>Hight <span>quality</span> services</h2>
        <Cards>

            <Card>
                <div className="icon">
                    <img src={clock} alt="icon"/>
                    <h3>Efficient</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
                <div className="icon">
                    <img src={teamwork} alt="icon"/>
                    <h3>Teamwork</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
                <div className="icon">
                    <img src={diaphgram} alt="icon"/>
                    <h3>Diaphgram</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

            <Card>
                <div className="icon">
                    <img src={money} alt="icon"/>
                    <h3>Affordable</h3>
                </div>
                <p>Lorem ipsum dolor sit amet.</p>
            </Card>

        </Cards>
    </Description>

    <Image>
        <img src={home2} alt="home2"/>
    </Image>
</Services>
    )
}
const Services = styled(About)`
h2{
    padding-bottom: 5rem;

}
p{
    width: 70%;
    padding: 2rem 0rem 4rem 0rem;
}


`

const Cards = styled.div`
display: flex;
flex-wrap: wrap;
@media (max-width: 1300px){
    justify-content: center;
}
`

const Card = styled.div`
flex-basis: 20rem;
.icon{
    display: flex;
    align-items: center;
    h3{
        margin-left: 1rem;
        background: white;
        color: black;
        padding: 1rem;
    }
}
@media (max-width: 1300px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
`
export default ServicesSection