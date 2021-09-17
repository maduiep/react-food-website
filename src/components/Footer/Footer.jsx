import React from 'react'
import {
    FooterContainer,
    FooterWrap,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    SocialIcons,
    SocialIconLink
} from '../Footer/FooterElements'

import {
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
    FaYoutube
} from 'react-icons/fa'

function Footer() {
    return (
        <FooterContainer>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/">
                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Facebook" rel="noopener noreferrer">
                                    <FaFacebook />
                                </SocialIconLink>
                            </SocialIcons>

                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Instagram" rel="noopener noreferrer">
                                    <FaInstagram />
                                </SocialIconLink>
                            </SocialIcons>

                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Twitter" rel="noopener noreferrer">
                                    <FaTwitter />
                                </SocialIconLink>
                            </SocialIcons>

                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn" rel="noopener noreferrer">
                                    <FaLinkedin />
                                </SocialIconLink>
                            </SocialIcons>

                            <SocialIcons>
                                <SocialIconLink href="/" target="_blank" aria-label="Youtube" rel="noopener noreferrer">
                                    <FaYoutube />
                                </SocialIconLink>
                            </SocialIcons>
                        </SocialLogo>
                    </SocialMediaWrap>
                </SocialMedia>
                <h5>&copy; Copyright Madu IP 2021</h5>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
