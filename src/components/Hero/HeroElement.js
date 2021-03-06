import styled from 'styled-components'
import ImgBg from '../../images/img-10.jpg'

export const HeroContainer = styled.div`
    background: linear-gradient(to right, 
    rgba(0,0,0,0.7), 
    rgba(0,0,0,0.7)), 
    url(${ImgBg});
    height: 100vh;
    background-position: center;
    background-size: cover;
`;

export const  HeroContent = styled.div`
    height: calc(100vh - 80px);
    max-height: 100%;
    width: 100vw;
    padding: 0rem calc((100w - 1300px) / 2);

    @media screen and (max-width: 650px) {
        margin-top: 1rem;
    }
`;


export const  HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 1050px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1;
    font-weight: bold;

    @media screen and (max-width: 650px) {
        width: 100%;
    }
`;


export const  HeroH1 = styled.h1`
    font-size: clamp(2rem, 10vw, 4rem);
    margin-bottom: 1rem; 
    box-shadow: 3px 5px #e9ba23;
    letter-spacing: 3px;

    @media screen and (max-width: 650px) {
        font-size: clamp(1rem, 5vw, 2rem);
    }
`;


export const  HeroP = styled.p`
    font-size: clamp(2rem, 2.5vw, 3rem);
    margin-bottom: 2rem;

    @media screen and (max-width: 650px) {
        font-size: clamp(1rem, 1vw, 1rem);
    }
`;

export const  HeroBtn = styled.button`
    font-size: 1.5rem;
    padding: 1rem 4rem;
    border: none;
    background: #e31837;
    color: #fff;
    transition: 0.2s ease-out;
    border-radius: 3px;

    &:hover {
        background: #ffc500;
        transition: 0.2 ease-out;
        cursor: pointer;
        color: #000;
    }
`;