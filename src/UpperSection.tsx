import { useBuild } from "./Provider";
import Brand from "../public/branding.jpg";
import Hamburger from "hamburger-react";
import { useState } from "react";

export const UpperSection = () => {
  const { activeComponent, setActiveComponent } = useBuild();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section id="main-section">
        <img className="temp-brand-top" src={Brand} />
        <h1>Welcome to my Channel</h1>

        <span className="react-burger">
          <Hamburger
            onToggle={() => {
              setIsMenuOpen(!isMenuOpen);
            }}
          />
        </span>
        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-selectors">
              <button
                className={`button selector ${
                  activeComponent === "Home" ? "active" : ""
                }`}
                onClick={() => {
                  activeComponent === "Home"
                    ? setActiveComponent(activeComponent)
                    : setActiveComponent("Home");
                }}
              >
                Home
              </button>

              <button
                className={`button selector ${
                  activeComponent === "About" ? "active" : ""
                }`}
                onClick={() => {
                  activeComponent === "About"
                    ? setActiveComponent(activeComponent)
                    : setActiveComponent("About");
                }}
              >
                About
              </button>

              <button
                className={`button selector ${
                  activeComponent === "Builds" ? "active" : ""
                }`}
                onClick={() => {
                  activeComponent === "Builds"
                    ? setActiveComponent(activeComponent)
                    : setActiveComponent("Builds");
                }}
              >
                check out my builds
              </button>

              <button
                className={`button selector ${
                  activeComponent === "Message" ? "active" : ""
                }`}
                onClick={() => {
                  activeComponent === "Message"
                    ? setActiveComponent(activeComponent)
                    : setActiveComponent("Message");
                }}
              >
                send me a message
              </button>
            </div>
          </div>
        )}

        <div className="container-header">
          <div className="selectors">
            <button
              className={`button selector ${
                activeComponent === "Home" ? "active" : ""
              }`}
              onClick={() => {
                activeComponent === "Home"
                  ? setActiveComponent(activeComponent)
                  : setActiveComponent("Home");
              }}
            >
              Home
            </button>

            <button
              className={`button selector ${
                activeComponent === "About" ? "active" : ""
              }`}
              onClick={() => {
                activeComponent === "About"
                  ? setActiveComponent(activeComponent)
                  : setActiveComponent("About");
              }}
            >
              About
            </button>

            <button
              className={`button selector ${
                activeComponent === "Builds" ? "active" : ""
              }`}
              onClick={() => {
                activeComponent === "Builds"
                  ? setActiveComponent(activeComponent)
                  : setActiveComponent("Builds");
              }}
            >
              check out my builds
            </button>

            <button
              className={`button selector ${
                activeComponent === "Message" ? "active" : ""
              }`}
              onClick={() => {
                activeComponent === "Message"
                  ? setActiveComponent(activeComponent)
                  : setActiveComponent("Message");
              }}
            >
              send me a message
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
