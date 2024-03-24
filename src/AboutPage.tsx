import { useBuild } from "./Provider";
import aboutMePageImage from "../public/CLoveOnTopOfDogHouse.jpg";

export const AboutPage = () => {
  const { activeComponent } = useBuild();
  const isAboutPageSelected = activeComponent === "About";

  return (
    isAboutPageSelected && (
      <>
        <div
          className="flex-center-with-map"
          style={{
            backgroundImage: "url(/fadedPaintBackground.jpg )",
            zIndex: "-1",
            filter: "blur(10px)",
            position: "sticky",
          }}
        ></div>
        <img className="homePage-Image" src={aboutMePageImage} alt=""></img>

        <div className="about-me-text">
          <p>
            I appreciate you taking the time to support this tiny piece of the
            internet and I hope you have a wonderfully happy anniversary or
            birthday if you have one of those today. In this space, we are a
            passion-driven company and community of woodworkers and creators
            looking to continually self develop through encouraging, inspiring,
            motivating, learning, and helping one another while we create simple
            woodworking projects and other novel creations. This community was
            born in the month of October in the year of our Christ 2019 through
            an extreme stroke of luck and a blessing straight from Him.
            <br />
            <br />
            We’ve continued to grow because of the enormous support and
            networking experience that has been created by users from all over
            the world interacting with one another. Curiosity and friendship are
            two things that drive us. Here, we embrace new opportunities to
            learn and explore new horizons. We take pride in being a reliable
            source of knowledge and inspiration, hoping to awaken the creativity
            that may be hidden inside of you. As for me, Curtis, the primary
            creator and host, I’m an avid experimenter and DIY enthusiast who
            loves to try new things and share them with others who may want to
            try the same thing or something similar.
            <br />
            <br />
            Due to the success of the primary YouTube channel, I try to post a
            new video about once a month on a topic or build that I hope you
            will find interesting. I’ve got a long list and I’ve got a short
            list, but to be honest with you, I never really know what the next
            video is going to be. I always make sure to spend the time to make
            the videos informative, entertaining, funny, or otherwise useful to
            everyone that watches them. Monumental efforts are gone to to make
            sure your time is well spent in this area. The main topic posted on
            YouTube is simple woodworking projects. I try to keep them smaller
            and simpler because I’ve had back surgery twice so I can’t be
            lifting *all* of the boards all the time. I do enjoy a nice deck or
            fence build though. Also posted on YouTube will be a mix of life
            tips, homestead hacks, and other potentially useful items of
            interest. As your own creativity is unleashed by something you may
            discover here, please don’t ever hesitate to reach out for
            assistance with your projects. I make myself as available as I can
            to help as needed based on my desire to share the knowledge I have
            and the experiences I’ve gone through.
          </p>
        </div>
      </>
    )
  );
};
