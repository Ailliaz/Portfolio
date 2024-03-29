import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/layout/NavBar";
import { AboutSection } from "./components/sections/AboutSection";
import { HeroSection } from "./components/sections/HeroSection";
import { Container } from "./components/styles/common/Container.styled";
import { GlobalStyles } from "./components/styles/Globals.styled";

function App() {
  const theme = {
    colors: {
      white: "rgba(240, 247, 255, 1)",
      green: "rgba(0, 206, 158, 1)",
      mint: "rgba(0, 255, 217, 1)",
      pink: "rgba(210, 0, 233, 1)",
      darkPink: "rgba(218, 0, 203, 1)",
      lightPink: "rgba(248, 176, 255, 1)",
      darkPurple: "rgba(19, 1, 30, 1)",
      lightPurple: "rgba(40, 0, 63, 1)",
    },
    mobile: "768px",
    transition: "all 650ms ease-in-out",
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <NavBar />
        <HeroSection />
        <Container>
          <AboutSection />
        </Container>
      </ThemeProvider>
    </>
  );
}

export default App;
