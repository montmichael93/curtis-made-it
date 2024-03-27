import { useBuild } from "./Provider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { FaArrowLeft } from "react-icons/fa";
export const FullBuildInformation = () => {
  const { activeComponent, selectedBuild, setSelectedBuild } = useBuild();

  const willFullBuildInfoDisplay =
    selectedBuild && activeComponent === "Builds";

  console.log(selectedBuild?.description.length);

  const selectRandomDescription =
    selectedBuild?.description.length &&
    Math.floor(Math.random() * selectedBuild?.description.length);
  return (
    <>
      {willFullBuildInfoDisplay && (
        <>
          <button
            className="close-that-button"
            onClick={() => {
              setSelectedBuild(null);
            }}
          >
            <FaArrowLeft /> Back
          </button>
          <br />
          <br />
          <div className="full-Build-Info">
            <div className="build-flex-container">
              <h2 className="full-build-title">{selectedBuild?.name}</h2>

              <iframe
                className="youtube"
                src={selectedBuild?.youTubeLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                //allowfullscreen
              ></iframe>
              <br />
              <br />

              <Carousel>
                {selectedBuild?.imageGallery.map((image) => (
                  <div>
                    <img
                      className="carousel-image full-build-image"
                      src={image}
                    />
                    <p className="legend">{selectedBuild?.name}</p>
                  </div>
                ))}
              </Carousel>
            </div>

            <p className="build-description">
              {selectedBuild?.description[selectRandomDescription!]}
            </p>
          </div>
        </>
      )}
    </>
  );
};
