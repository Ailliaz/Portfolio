import styled, { keyframes, css } from "styled-components";

const navItemFade = keyframes`
    from{
        opacity: 0;
        transform: translate(50px)
    }
    to{
        opacity: 1;
        transform: translate(0px);
    }
`;

const navItemClose = keyframes`
    from{
        opacity: 1;
        transform: translate(0px)
    }
    to{
        opacity: 0;
        
    }
`;

const navItemAnimation = ({ index }) => css`
  animation: ${navItemFade} 0.4s ease forwards ${index / 6 + 0.4}s;
`;

const navItemAnimationClose = ({ index }) => css`
  animation: ${navItemClose} 0.5s ease backwards;
`;

export const Nav = styled.nav`
  height: 80px;
  width: 100%;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  z-index: 98;
  transition: all 1s ease-in-out;
  background: rgba(19, 1, 30, 0.8);
  top: ${({ scrollDirection }) =>
    scrollDirection === "down" ? "-80px" : "0px"};
`;

export const Logo = styled.img`
  width: 55px;
`;

export const MenuIcon = styled.div`
  cursor: pointer;
  background: ${({ theme, menuOpen }) =>
    menuOpen ? "none" : theme.colors.lightPurple};
  transition: ${({ theme }) => theme.transition};
  padding: 0.7rem;
  border-radius: 5px;
  display: none;
  position: absolute;
  right: 20px;
  z-index: 999;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: inline-block;
  }
`;

export const LineOne = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? "10px" : "0")};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.lightPink} 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen
      ? "rotate(-45deg) translate(-5px, 6px) scaleX(2) scaleY(1.5)"
      : "none"};
`;

export const LineTwo = styled.div`
  width: 30px;
  height: 3px;
  margin: 5px 0;
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.lightPink} 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) => (menuOpen ? "scaleX(0)" : "scaleX(1)")};
`;

export const LineThree = styled.div`
  width: 15px;
  height: 3px;
  margin: 5px 0;
  margin-left: ${({ menuOpen }) => (menuOpen ? "10px" : "15px")};
  background: linear-gradient(
    135deg,
    ${({ theme }) => theme.colors.pink} 0%,
    ${({ theme }) => theme.colors.lightPink} 100%
  );
  transition: ${({ theme }) => theme.transition};
  transform: ${({ menuOpen }) =>
    menuOpen
      ? "rotate(45deg) translate(-5px, -6px) scaleX(2) scaleY(1.5)"
      : "none"};
`;

export const NavList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  font-size: 14px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 24rem;
    height: 100vh;
    background: ${({ theme }) => theme.colors.lightPurple};
    top: 0;
    right: ${({ menuOpen }) => (menuOpen ? 0 : "-24rem")};
    transition: ${({ theme }) => theme.transition};
    position: fixed;
    padding-top: 3rem;
    justify-content: flex-start;
    flex-direction: column;
    z-index: 998;
  }
`;

export const NavItem = styled.li`
  margin: 0.2rem 0.7rem;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    opacity: 0;
    margin: 1.2rem 0;
    ${({ menuOpen }) => (menuOpen ? navItemAnimation : navItemAnimationClose)};
  }
`;

export const NavLink = styled.a`
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors.white};
  letter-spacing: 1.5px;

  &::after {
    content: "";
    display: block;
    height: 3px;
    width: 0%;
    background: ${({ theme }) => theme.colors.pink};
    transition: all ease-in-out 300ms;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

export const Profile = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 9rem;
      width: auto;
      border-radius: 50%;
      display: block;
      margin: 1.5rem 0;
    }

    span {
    }
  }
`;

export const SocialIcons = styled.div`
  display: none;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin: 0 0.5;
      font-size: 2.5rem;
    }
  }
`;
