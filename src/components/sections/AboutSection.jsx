import { CTAButton } from "../styles/common/CTAButtons.styled";
import {
  StyledImage,
  ImageContainer,
  StyledAboutSection,
  AboutContent,
  StyledHeading,
  GradientCircle,
  DarkCircle,
  CTAContainer,
} from "../styles/sections/AboutSections.styled";

export const AboutSection = () => {
  return (
    <>
      <StyledAboutSection id="about">
        <ImageContainer>
          <StyledImage src="./images/profile-pic.jpg" alt="Lia Destefani" />
          <GradientCircle />
          <DarkCircle />
        </ImageContainer>
        <AboutContent>
          <StyledHeading>Hello</StyledHeading>
          <p>
            I am a thirty year old that had learned many different skills, as
            gastronomy, programming, writing, management and more.
          </p>
          <p>
            Now I'm working as a full stack developer, something I wished to do
            for a while but my old work didn't let me but then I took the
            chance.
          </p>
          <p>
            I use different technologies as NodeJs, ReactJs, Redux toolkit,
            javascript/typescipt and many more.{" "}
          </p>
          <p>
            I got into programing since I was a child, coming and going as it
            always interested me but could never completely get a hang on it.
            But my desired for learning made me keep on going looking for
            different areas as game development, simple apps. Then, a need to
            develop new interest I changed from the area of gastronomy where I
            spend many years working and managing a small catering business.{" "}
          </p>
          <p>
            The constant need of learning and being able to see the result of it
            made me decided of web development as there are many technologies
            and you need to keep on learning and using them.
          </p>
          <p>
            I wish to keep on learning and seeing all the new things I can
            create and the people I could help with my work.
          </p>
          <CTAContainer>
            <CTAButton href="#" target="_blank" primary>
              Get CV
            </CTAButton>
          </CTAContainer>
        </AboutContent>
      </StyledAboutSection>
      <hr />
    </>
  );
};
