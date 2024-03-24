import Brand from "../public/branding.jpg";
import { FaYoutube, FaInstagram } from "react-icons/fa";
export const FooterSection = () => {
  return (
    <>
      <div className="footer">
        <a>
          <FaYoutube
            size={"2rem"}
            href="https://www.youtube.com/@CurtisMadeIt"
          />
        </a>
        <img className="temp-brand-bottom" src={Brand} />
        <a href="https://www.instagram.com/curtis_made_it/">
          <FaInstagram size={"2rem"} />
        </a>
      </div>
    </>
  );
};
