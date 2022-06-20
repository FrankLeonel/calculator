import Button from "components/Button";
import Painel from "components/Painel";
import * as S from "./Calculator.style";

const Calculator = () => {
  const elements = [
    "AC",
    "<-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "0",
    ",",
    "=",
  ];

  const checkElement = (element) => {
    switch (element) {
      case "AC":
        return "secondary";
      case "<-":
        return "secondary";
      case "%":
        return "secondary";
      case "/":
        return "secondary";
      case "x":
        return "secondary";
      case "-":
        return "secondary";
      case "+":
        return "secondary";
      case "=":
        return "secondary";
      default:
        return "primary";
    }
  };

  return (
    <S.Content>
      <S.CalculatorContainer>
        <Painel operacao="1 + 2" resultado={3} />
        <S.GridButtons></S.GridButtons>
        {elements.map((element) => (
          <Button key={element} background={checkElement(element)}>
            {element}
          </Button>
        ))}
      </S.CalculatorContainer>
    </S.Content>
  );
};

export default Calculator;
