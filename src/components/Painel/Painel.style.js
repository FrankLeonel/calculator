import styled from "styled-components";

export const PainelContainer = styled.div(({ theme: { colors } }) => ({
  width: "100%",
  height: "20%",
  backgroundColor: colors.primary,
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-end",
  padding: "10px",
  gap: "15px",

  p: {
    fontSize: "1.2em",
    margin: 0,
  },
}));
