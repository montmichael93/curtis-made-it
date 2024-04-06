import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { ActiveComponent, VideoData } from "../src/assets/types";

type TypeBuildsProvider = {
  selectedVideo: VideoData | null;
  activeComponent: ActiveComponent;
  setSelectedVideo: Dispatch<SetStateAction<VideoData | null>>;
  setActiveComponent: Dispatch<SetStateAction<ActiveComponent>>;
};

const buildsContext = createContext<TypeBuildsProvider>(
  {} as TypeBuildsProvider
);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("Home");
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <buildsContext.Provider
      value={{
        activeComponent,
        selectedVideo,
        setActiveComponent,
        setSelectedVideo,
      }}
    >
      {children}
    </buildsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBuild = () => useContext(buildsContext);
