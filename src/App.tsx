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

function App() {
  return (
    <>
      <BuildProvider>
        <UpperSection />
        <HomePage />
        <AboutPage />
        <BuildCards />
        <FullBuildInformation />
        <MessageComponent />
        <FooterSection />
      </BuildProvider>
    </>
  );
}

export default App;
