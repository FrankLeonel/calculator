import Calculator from "components/Calculator";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles/GlobalStyle";
import { theme } from "theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Calculator />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
