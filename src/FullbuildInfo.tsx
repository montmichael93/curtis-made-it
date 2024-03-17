import { useBuild } from "./Provider";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export const FullBuildInformation = () => {
  const { activeComponent, selectedBuild, setSelectedBuild } = useBuild();

  const willFullBuildInfoDisplay =
    selectedBuild && activeComponent === "Builds";

  return (
    <>
      {willFullBuildInfoDisplay && (
        <>
          <div className="full-Build-Info">
            <button
              className="close-that-button"
              onClick={() => {
                setSelectedBuild(null);
              }}
            >
              X
            </button>
            <div className="build-flex-container">
              <h2>{selectedBuild?.name}</h2>

              <iframe
                className="youtube"
                src={selectedBuild?.youTubeLink}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
                //allowfullscreen
              ></iframe>
              <p className="build-description">
                {selectedBuild?.description[0]}
              </p>
            </div>

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
        </>
      )}
    </>
  );
};
