import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { VideoData } from "../utils/types";

type TypeBuildsProvider = {
  selectedVideo: VideoData | null;
  setSelectedVideo: Dispatch<SetStateAction<VideoData | null>>;
};

const buildsContext = createContext<TypeBuildsProvider>(
  {} as TypeBuildsProvider
);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);

  return (
    <buildsContext.Provider
      value={{
        selectedVideo,
        setSelectedVideo,
      }}
    >
      {children}
    </buildsContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useBuild = () => useContext(buildsContext);
