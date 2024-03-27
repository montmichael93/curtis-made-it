import { useBuild } from "./Provider";
import CLoveSittingDown from "../public/CloveSittingDown.jpg";
import { FaDiscourse, FaChair, FaTools, FaHouseUser } from "react-icons/fa";
import toast from "react-hot-toast";

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
          <div
            className="home-page-cards"
            onClick={() => {
              toast("Don't be shy! Send a message! 📨 ➜ 📬", {
                icon: "✉",
                style: { background: "#333", color: "#fff" },
              });
            }}
          >
            <div className="about-icons">
              <h3>Send A Message</h3>
              <FaDiscourse size={"4rem"} />
            </div>
            <p>Need Something Built? Shoot Me A Message</p>
          </div>

          <div
            className="home-page-cards"
            onClick={() => {
              toast("Each build is customized to your tastes! 🪵➜ 🪑", {
                icon: "🛠️",
                style: { background: "#333", color: "#fff" },
              });
            }}
          >
            <h3>Artisanal Builds</h3>
            <div className="about-icons">
              <FaChair size={"4rem"} />
            </div>
            <p>Using The Highest Quality Wood</p>
          </div>

          <div
            className="home-page-cards"
            onClick={() => {
              toast(
                "Need To Customize Your Living Space? 🏠❤️ Let's Get Started! 👨‍🔧 💪 😎",
                {
                  icon: "🧐",
                  style: { background: "#333", color: "#fff" },
                }
              );
            }}
          >
            <h3>Home Improvement</h3>
            <div className="about-icons">
              <FaHouseUser size={"4rem"} />
            </div>
            <p>To Personalize Your Living Space</p>
          </div>

          <div
            className="home-page-cards"
            onClick={() => {
              toast(
                "Learn The Art Of Woodcraft! 🎓 🪚 Ask If Your Need Help! 👨‍🏫 👨‍🔧",
                {
                  icon: "👨‍🎓",
                  style: { background: "#333", color: "#fff" },
                }
              );
            }}
          >
            <h3>DIY</h3>
            <div className="about-icons">
              <FaTools size={"4rem"} />
            </div>
            <p>The Finest In Woodcraft</p>
          </div>
        </div>
      </>
    )
  );
};
