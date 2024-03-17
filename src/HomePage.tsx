import { useBuild } from "./Provider";
import CLoveSittingDown from "../public/CloveSittingDown.jpg";

export const HomePage = () => {
  const { activeComponent } = useBuild();
  const isHomePageSelected = activeComponent === "Home";

  return (
    isHomePageSelected && (
      <>
        <div className="flex-center-with-map">
          <img className="homePage-Image" src={CLoveSittingDown} alt=""></img>
          <div className="about-me-text">
            <p>
              Welcome to CurtisMadeIt: Where Woodworking Meets YouTube At
              CurtisMadeIt, craftsmanship isn't just a skill; it's a passion
              shared with our dedicated community of woodworking enthusiasts. As
              a sole proprietor, Curtis brings years of experience and artistry
              to every custom wood build he creates. From sleek floating
              bedframes to intricate furniture pieces, each creation is
              meticulously crafted with precision and care. What sets
              CurtisMadeIt apart is more than just our exceptional woodworking
              skills—it's the unique bond we share with our loyal YouTube
              community. With our channel as our platform, we invite you to join
              us on a journey of creativity, inspiration, and collaboration. Our
              fans aren't just customers; they're valued members of our
              woodworking family, guiding us every step of the way as we bring
              their custom wood dreams to life. Whether you're seeking a
              statement piece for your home or a one-of-a-kind gift for a loved
              one, CurtisMadeIt is here to make your vision a reality. Explore
              our portfolio of custom wood builds, inspired by the passion and
              enthusiasm of our YouTube community. Join us on our channel, where
              woodworking meets YouTube, and let's create something
              extraordinary together.
            </p>
          </div>
        </div>
      </>
    )
  );
};
