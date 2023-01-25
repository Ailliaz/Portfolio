import { CTAButton } from "../styles/common/CTAButtons.styled";
import {
  HeroContent,
  HeroSocialIcons,
  StyledArrowDown,
  StyledHeroSection,
  SocialIcon,
} from "../styles/sections/HeroSection.styled";
import {
  FaArrowDown,
  FaGithub,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";

export const HeroSection = () => {
  return (
    <StyledHeroSection>
      <HeroContent>
        <h1>Lia Destefani</h1>
        <h3>{"{Full-Stack Web Developer}"}</h3>
        <p>Node.js | React | Redux Toolkit | Javascrypt</p>
        <div>
          <CTAButton href="#projects">Projects</CTAButton>
          <CTAButton href="#contact" primary margin="0 0 0 20px">
            Hire Me
          </CTAButton>
        </div>
      </HeroContent>
      <StyledArrowDown href="#about">
        <FaArrowDown />
      </StyledArrowDown>
      <HeroSocialIcons>
        <SocialIcon href="#" target="_blank">
          <FaLinkedinIn />
        </SocialIcon>
        <SocialIcon href="#" target="_blank">
          <FaGithub />
        </SocialIcon>
      </HeroSocialIcons>
    </StyledHeroSection>
  );
};
