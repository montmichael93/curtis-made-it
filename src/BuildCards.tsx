import { useBuild } from "./Provider";

export const BuildCards = () => {
  const { activeComponent, selectedBuild, setSelectedBuild, buildData } =
    useBuild();
  const isBuildSectionSelected =
    activeComponent === "Builds" && selectedBuild === null;
  return (
    <div
      className="flex-container"
      style={{ backgroundImage: "url(/fadedPaintBackground.jpg )" }}
    >
      {isBuildSectionSelected &&
        buildData.map((builds) => {
          return (
            <>
              <div className="build-card" key={builds.youTubeLink}>
                <h3 className="build-name">{builds.name}</h3>
                <img className="build-image" src={builds.imageGallery[0]} />
                <div>
                  <button
                    className="button"
                    onClick={() => {
                      setSelectedBuild(builds);
                    }}
                  >
                    More Info
                  </button>
                </div>
              </div>
            </>
          );
        })}
    </div>
  );
};
