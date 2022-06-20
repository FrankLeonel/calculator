import * as S from "./Painel.style";

const Painel = ({ operacao, resultado }) => (
  <S.PainelContainer>
    <p>{operacao}</p>
    <p> = {resultado}</p>
  </S.PainelContainer>
);

export default Painel;
