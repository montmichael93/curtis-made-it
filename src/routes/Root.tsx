import "../App.css";
import "../mediaQuery.css";
import { BuildProvider } from "../Provider";
import { UpperSection } from "../Header";
import { FooterSection } from "../Footer";
import { ChakraProvider } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";

function Root() {
  return (
    <>
      <ChakraProvider>
        <BuildProvider>
          <UpperSection />
          <Outlet />
          <FooterSection />
        </BuildProvider>
      </ChakraProvider>
    </>
  );
}

export default Root;
