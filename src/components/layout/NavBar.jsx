import { useState } from "react";
import { NavItems } from "../../data/NavItems";
import useScrollDirection from "../../hooks/useScrollDirection";
import {
  LineOne,
  LineThree,
  LineTwo,
  Logo,
  MenuIcon,
  Nav,
  NavItem,
  NavLink,
  NavList,
  Profile,
  SocialIcons,
} from "../styles/layout/Nav.styled";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrollDirection = useScrollDirection("down");

  return (
    <>
      <Nav scrollDirection={scrollDirection}>
        <div>
          <a href="#hero-section">
            <Logo src="./images/Logo.png" />
          </a>
        </div>
        <MenuIcon menuOpen={menuOpen} onClick={() => setMenuOpen(!menuOpen)}>
          <LineOne menuOpen={menuOpen} />
          <LineTwo menuOpen={menuOpen} />
          <LineThree menuOpen={menuOpen} />
        </MenuIcon>
        <NavList menuOpen={menuOpen}>
          {NavItems &&
            NavItems.map((navItem, index) => (
              <NavItem
                key={index}
                index={index}
                menuOpen={menuOpen}
                onClick={() => setMenuOpen(false)}
              >
                {navItem.isProfile ? (
                  <NavLink href="#hero-section">
                    <Profile>
                      <img src="./images/profile-pic.jpg" alt="Lia Destefani" />
                      <span>Lia Destefani</span>
                    </Profile>
                  </NavLink>
                ) : null}

                {navItem.hasSocialIcons ? (
                  <SocialIcons>
                    <NavLink href="#" target="_blank">
                      <FaLinkedin />
                    </NavLink>
                    <NavLink href="#" target="_blank">
                      <FaGithub />
                    </NavLink>
                  </SocialIcons>
                ) : null}

                {navItem.text ? (
                  <NavLink href={navItem.href}>{navItem.text}</NavLink>
                ) : null}
              </NavItem>
            ))}
        </NavList>
      </Nav>
    </>
  );
};
