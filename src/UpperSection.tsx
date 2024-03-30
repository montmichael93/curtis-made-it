import { useBuild } from "./Provider";
import Hamburger from "hamburger-react";
import { useState } from "react";
import { FaYoutube, FaInstagram } from "react-icons/fa";

export const UpperSection = () => {
  const { activeComponent, setActiveComponent } = useBuild();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <section id="main-section">
        <div className="header-container">
          <span className="react-burger">
            <Hamburger
              onToggle={() => {
                setIsMenuOpen(!isMenuOpen);
              }}
            />
          </span>
          <div className="icons-section">
            <a href="https://www.youtube.com/@CurtisMadeIt">
              <FaYoutube size={"2rem"} />
            </a>

            <h1>CurtisMadeIt</h1>

            <a href="https://www.instagram.com/curtis_made_it/">
              <FaInstagram size={"2rem"} />
            </a>
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <div className="mobile-selectors">
              <button
                className={` button selector ${
                  activeComponent === "Home" ? "active" : ""
                }`}
                onClick={() => {
                  activeComponent === "Home"
                    ? setActiveComponent(activeComponent)
                    : setActiveComponent("Home");
                  setIsMenuOpen(!isMenuOpen);
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
                  setIsMenuOpen(!isMenuOpen);
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
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Check Out My Builds
              </button>

              <button
                className={`button selector ${
                  activeComponent === "Message" ? "active" : ""
                }`}
                onClick={() => {
                  activeComponent === "Message"
                    ? setActiveComponent(activeComponent)
                    : setActiveComponent("Message");
                  setIsMenuOpen(!isMenuOpen);
                }}
              >
                Send Me A Message
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
