import React from 'react';
import { FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';
import { FollowContainer, FollowContent, FollowP, SocialIcons, SocialIconsLink } from './FollowElements'

const FollowSection = () => {
  return (
    <>
      <FollowContainer>
        <FollowContent>
          <FollowP>
            FOLLOW US ON OUR SOCIALS TO STAY UPDATED ON WHAT’S HAPPENING IN WEB3-VERSE
          </FollowP>
        </FollowContent>
        <SocialIcons>
            <SocialIconsLink href="/" target="_blank"
              area-label="Instagram">
              <FaInstagram />
            </SocialIconsLink>
            <SocialIconsLink href="/" target="_blank"
              area-label="Twitter">
              <FaTwitter />
            </SocialIconsLink>
            <SocialIconsLink href="/" target="_blank"
              area-label="Linkedin">
              <FaLinkedin />
            </SocialIconsLink>
          </SocialIcons>
      </FollowContainer>
      
    </>
  )
}

export default FollowSection;