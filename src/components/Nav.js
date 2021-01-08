import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Nav = ()=>{
    return(
        <StyledNav>
                <h1> 
                     <Link id="logo" to="/"> Portfolio</Link>
                </h1>
                <ul>
                    <li>
                        <Link to="/">1. About US</Link>
                    </li>

                    <li>
                        <Link to="/work">1. Our Work</Link>
                    </li>

                    <li>
                    <Link to="/Contact">1. Contact Us</Link>
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
`

export default Nav