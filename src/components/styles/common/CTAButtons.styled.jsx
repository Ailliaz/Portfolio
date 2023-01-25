import styled from "styled-components";

export const CTAButton = styled.a`
  background: ${({ primary, theme }) => (primary ? theme.colors.mint : "none")};
  color: ${({ primary, theme }) =>
    primary ? theme.colors.lightPurple : theme.colors.mint};
  padding: 10px 20px;
  margin: ${({ margin }) => margin};
  border: 2px solid ${({ theme }) => theme.colors.mint};
  border-radius: 5px;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 800;
  cursor: pointer;
  display: inline-block;

  &:hover {
    background: ${({ primary, theme }) =>
      primary ? theme.colors.darkPink : "none"};
    color: ${({ primary, theme }) =>
      primary ? theme.colors.white : theme.colors.darkPink};
    border: 2px solid ${({ theme }) => theme.colors.darkPink};
  }
`;
