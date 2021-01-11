import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import {motion} from 'framer-motion'
import {useLocation} from 'react-router-dom'

const Nav = ()=>{
    const {pathname} = useLocation();
    return(
        <StyledNav>
                <h1> 
                     <Link id="logo" to="/"> Portfolio</Link>

                </h1>
                <ul>
                    <li>
                        <Link to="/">1. About US</Link>
                        <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/' ? '50%' : '0%'}}/>
                    </li>

                    <li>
                        <Link to="/work">1. Our Work</Link>
                        <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/work' ? '50%' : '0%'}}/>
                    </li>

                    <li>
                    <Link to="/Contact">1. Contact Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/Contact' ? '50%' : '0%'}}/>
                    </li>
                    
                    </ul>


        </StyledNav>
    )
}

const StyledNav = styled.nav`
min-height: 10vh;
display: flex;
justify-content: space-between;
align-items: center;
margin: auto;
background-color: #282828;
padding: 1rem 10rem;
position: sticky;
top: 0;
z-index: 10;
a{
    text-decoration: none;
    color: white;

}
ul{
    display: flex;
    list-style: none;

    li{
            padding-left: 10rem;
            position: relative;
    }

}
#logo{
    font-size: 1.5rem;
    font-family: 'Lobster', cursive;
    font-weight: lighter;
}

@media (max-width: 1300px){
    flex-direction: column;
    padding: 2rem 1rem;
    #logo{
        display: inline-block;
        margin: 2rem;
    }
    ul{
        padding: 2rem;
        justify-content: space-around;
        width: 100%;
        li{
            padding: 0;
        }
    }
}


`
const Line = styled(motion.div)`
width: 0%;
height: 0.3rem;
position: absolute;
bottom: -80%;
left: 60%;
background: #23d997;
@media (max-width: 1300px){
    left: 0%;
}
`
export default Nav