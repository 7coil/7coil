import React from 'react'
import { FaTwitter, FaGithub, FaLinkedin, FaDiscord } from 'react-icons/fa'
import { SiteButton } from '../SiteNavigation'
import { ButtonRow } from '../ButtonRow'

const SocialMediaHandles = () => (
  <ButtonRow>
    <SiteButton href="https://github.com/7coil">
      <FaGithub />
      GitHub
    </SiteButton>
    <SiteButton href="https://twitter.com/sevencoil">
      <FaTwitter />
      Twitter
    </SiteButton>
    <SiteButton href="https://www.linkedin.com/in/leondro/">
      <FaLinkedin />
      LinkedIn
    </SiteButton>
    <SiteButton href="https://discord.gg/mAVaeYDGkb">
      <FaDiscord />
      Discord
    </SiteButton>
  </ButtonRow>
)

export { SocialMediaHandles }
