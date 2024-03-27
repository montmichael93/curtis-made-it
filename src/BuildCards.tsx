import { useBuild } from "./Provider";
import toast from "react-hot-toast";
import brand from "../public/branding.jpg";
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
                      toast(() => (
                        <span className="hot-toast-branding">
                          <img className="hot-toast-logo-image" src={brand} />
                          <b>{builds.name}</b>
                        </span>
                      ));
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
