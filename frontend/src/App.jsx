import WelcomePage from "./pages/Welcomepage";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <WelcomePage />
      </ChakraProvider>
    </>
  );
}

export default App;
