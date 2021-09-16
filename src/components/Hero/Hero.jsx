import React from 'react'
import Navbar from '../Navbar/Navbar'
import { 
    HeroContainer, 
    HeroContent, 
    HeroItems, 
    HeroH1, 
    HeroP, 
    HeroBtn } from './HeroElement'

function Hero() {
    return (
        <HeroContainer>
            <Navbar/>
            <HeroContent>
                <HeroItems>
                    <HeroH1>We offer the meals with greatest tastes in town.</HeroH1>
                    <HeroP>Every meal is ready in few minutes.</HeroP>
                    <HeroBtn>Place Order</HeroBtn>
                </HeroItems>
            </HeroContent>
        </HeroContainer>
    )
}

export default Hero
