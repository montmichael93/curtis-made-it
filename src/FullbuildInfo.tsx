import { useState } from "react";
import { useBuild } from "./Provider";

export const FullBuildInformation = () => {
  const { activeComponent, selectedBuild, setSelectedBuild } = useBuild();
  const [currentImageFromGallery, setCurrentImageFromGallery] = useState(0);
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
                setCurrentImageFromGallery(0);
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
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                //allowfullscreen
              ></iframe>
              <p className="build-description">
                {selectedBuild?.description[0]}
              </p>

              <div className="gallery-buttons">
                <button
                  className="button"
                  onClick={() => {
                    setCurrentImageFromGallery((nextImage) =>
                      nextImage === 0
                        ? selectedBuild?.imageGallery.length - 1
                        : nextImage - 1
                    );
                  }}
                >
                  Prev Image
                </button>
                <button
                  className="button"
                  onClick={() => {
                    setCurrentImageFromGallery((prevImage) =>
                      prevImage === selectedBuild?.imageGallery.length - 1
                        ? 0
                        : prevImage + 1
                    );
                  }}
                >
                  Next Image
                </button>
              </div>

              <img
                className="full-build-image"
                src={selectedBuild?.imageGallery[currentImageFromGallery]}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
