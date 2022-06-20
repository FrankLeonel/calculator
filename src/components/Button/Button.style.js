import styled from "styled-components";

export const ButtonContainer = styled.li(({ theme, background }) => ({
  padding: "5%",
  width: "50px",
  borderRadius: "50%",
  backgroundColor: background,
}));
