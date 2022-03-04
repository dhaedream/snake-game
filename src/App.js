// import react  from 'react'
import "./App.css";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";

// import { Provider } from "react-redux";
// import store from "./store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ChakraProvider>
          <Container maxW="container.lg.lg" centerContent>
            <Heading as="h1" size="xl">
              {" "}
              Snakey Snake Game{" "}
            </Heading>
            {/* future children   */}
          </Container>
        </ChakraProvider>
      </Provider>
    </div>
  );
}

export default App;
