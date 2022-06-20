import styled from "styled-components";

export const Content = styled.div(({ theme: { breakpoints } }) => ({
  margin: "auto",
  maxWidth: "calc(1440px + 48px)",
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",

  [breakpoints.md]: {
    maxWidth: "calc(1440px + 128px)",
  },
}));

export const CalculatorContainer = styled.div(({ theme: { colors } }) => ({
  width: "30%",
  height: "90%",
  display: "flex",
  flexDirection: "column",
  border: `1px solid ${colors.white}`,
  borderRadius: "10px",
  margin: "20px 0",
  padding: "20px",
}));

export const GridButtons = styled.ul(({ theme: { colors } }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 4fr)",
  gap: "10px",
}));
