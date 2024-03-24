import { useBuild } from "./Provider";
import Brand from "../public/branding.jpg";
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
          <img className="temp-brand-top" src={Brand} />
          <h1>CurtisMadeIt</h1>
          <div className="icons-section">
            <a>
              <FaYoutube
                size={"2rem"}
                href="https://www.youtube.com/@CurtisMadeIt"
              />
            </a>

            <a href="https://www.instagram.com/curtis_made_it/">
              <FaInstagram size={"2rem"} />
            </a>
          </div>
        </div>

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
