import { AboutPage } from "./AboutPage";
import "./App.css";
import "./mediaQuery.css";
import { BuildCards } from "./BuildCards";
import { FullBuildInformation } from "./FullbuildInfo";
import { HomePage } from "./HomePage";
import { MessageComponent } from "./MessageComponent";
import { BuildProvider } from "./Provider";
import { UpperSection } from "./UpperSection";
import { FooterSection } from "./Footer";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <>
      <ChakraProvider>
        <BuildProvider>
          <UpperSection />
          <HomePage />
          <AboutPage />
          <BuildCards />
          <FullBuildInformation />
          <MessageComponent />
          <FooterSection />
        </BuildProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
