import { createContext, useContext, useState } from "react";

const ViewerContext = createContext();

export const ViewerProvider = ({ children }) => {
  const [modelUrl, setModelUrl] = useState(null);
  const [bgColor, setBgColor] = useState("#ffffff");
  const [wireframe, setWireframe] = useState(false);

  return (
    <ViewerContext.Provider
      value={{
        modelUrl,
        setModelUrl,
        bgColor,
        setBgColor,
        wireframe,
        setWireframe,
      }}
    >
      {children}
    </ViewerContext.Provider>
  );
};

export const useViewer = () => useContext(ViewerContext);
