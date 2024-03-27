import { useBuild } from "./Provider";
import CLoveSittingDown from "../public/CloveSittingDown.jpg";
import { FaDiscourse, FaChair, FaTools, FaHouseUser } from "react-icons/fa";

export const HomePage = () => {
  const { activeComponent } = useBuild();
  const isHomePageSelected = activeComponent === "Home";

  return (
    isHomePageSelected && (
      <>
        <div
          className="flex-center-with-map-home"
          style={{
            backgroundImage: "url(/fadedPaintBackground.jpg )",
            zIndex: "-1",
            filter: "blur(10px)",
          }}
        ></div>

        <img className="homePage-Image" src={CLoveSittingDown} alt=""></img>

        <div
          className="home-page-cards-container"
          style={{
            zIndex: "1",
          }}
        >
          <div className="home-page-cards">
            <div className="about-icons">
              <h3>Send A Message</h3>
              <FaDiscourse size={"4rem"} />
            </div>
            <p>Need Something built? Shoot me a Message</p>
          </div>

          <div className="home-page-cards">
            <h3>Artisanal Builds</h3>
            <div className="about-icons">
              <FaChair size={"4rem"} />
            </div>
            <p>Using the highest quality wood</p>
          </div>

          <div className="home-page-cards">
            <h3>Home Improvement</h3>
            <div className="about-icons">
              <FaHouseUser size={"4rem"} />
            </div>
            <p>To Personalize your living space</p>
          </div>

          <div className="home-page-cards">
            <h3>DIY</h3>
            <div className="about-icons">
              <FaTools size={"4rem"} />
            </div>
            <p>The finest in woodcraft</p>
          </div>
        </div>
      </>
    )
  );
};
