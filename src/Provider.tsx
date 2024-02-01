import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";
import { buildData } from "../public/buildData";
import { ActiveComponent, buildInfo } from "../public/types";

type TypeBuildsProvider = {
  buildData: buildInfo[];
  selectedBuild: buildInfo | null;
  activeComponent: ActiveComponent;
  setSelectedBuild: Dispatch<SetStateAction<buildInfo | null>>;
  setActiveComponent: Dispatch<SetStateAction<ActiveComponent>>;
};

const buildsContext = createContext<TypeBuildsProvider>(
  {} as TypeBuildsProvider
);

export const BuildProvider = ({ children }: { children: ReactNode }) => {
  const [activeComponent, setActiveComponent] =
    useState<ActiveComponent>("Home");
  const [selectedBuild, setSelectedBuild] = useState<buildInfo | null>(null);

  return (
    <buildsContext.Provider
      value={{
        buildData,
        activeComponent,
        selectedBuild,
        setActiveComponent,
        setSelectedBuild,
      }}
    >
      {children}
    </buildsContext.Provider>
  );
};

export const useBuild = () => useContext(buildsContext);
