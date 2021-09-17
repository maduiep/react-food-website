import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElement'

function Navbar({toggle}) {
    return (
        <>
           <Nav>
               <NavLink to='/'>Foodie</NavLink>
               <NavIcon onClick={toggle}>
                   <p>Menu</p>
                   <Bars />
               </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar
