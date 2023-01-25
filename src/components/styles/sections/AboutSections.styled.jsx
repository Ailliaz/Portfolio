import styled, { keyframes } from "styled-components";

const rotate = keyframes`
    from{
        transform: rotate(0deg);
    }
    to{
        transform: rotate(-360deg);
    }
`;

export const StyledAboutSection = styled.section`
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10rem 0 5rem 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div`
  width: 13rem;
  height: 13rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 2.5rem;
  position: relative;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 4rem;
  }
`;

export const StyledImage = styled.img`
  width: 12rem;
  height: 12rem;
  border-radius: 50%;
  position: absolute;
  z-index: 4;
`;

export const GradientCircle = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  position: absolute;
  z-index: 2;
  animation: ${rotate} 1.5s linear infinite;
  background: linear-gradient(
    to right,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.mint} 50%,
    ${({ theme }) => theme.colors.pink} 100%
  );
`;

export const DarkCircle = styled.div`
  width: 12.5rem;
  height: 12.5rem;
  border-radius: 50%;
  position: absolute;
  z-index: 3;
  background: ${({ theme }) => theme.colors.darkPurple};
`;

export const AboutContent = styled.div`
  flex-grow: 1;
  flex-shrink: 1;
  flex: 1;

  p {
    font-family: "Nunito", sans-serif;
    font-size: 1.4rem;
    text-align: justify;
    margin-bottom: 1.45rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    p {
      font-size: 1.2rem;
    }
  }
`;

export const StyledHeading = styled.div`
  font-size: 3rem;
  margin-bottom: 20px;
`;

export const CTAContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-right: 3rem;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    justify-content: center;
    margin: 0;
  }
`;
