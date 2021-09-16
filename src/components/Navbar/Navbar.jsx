import React from 'react'
import {Nav, NavLink, NavIcon, Bars} from './NavbarElement'

function Navbar() {
    return (
        <>
           <Nav>
               <NavLink to='/'>Foodie</NavLink>
               <NavIcon>
                   <p>Menu</p>
                   <Bars />
               </NavIcon>
           </Nav>
        </>
    )
}

export default Navbar
