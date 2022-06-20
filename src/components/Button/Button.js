import { useTheme } from "styled-components";
import * as S from "./Button.style";

const Button = ({ background, onClick, children }) => {
  const theme = useTheme();
  return (
    <S.ButtonContainer background={theme.colors[background]}>
      {children}
    </S.ButtonContainer>
  );
};

export default Button;
