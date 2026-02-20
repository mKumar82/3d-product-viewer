import { useEffect } from "react";
import Viewer from "./components/Viewer";
import ControlsPanel from "./components/ControlsPanel";
import { useViewer } from "./context/ViewerContext";
import { getSettings } from "./services/api";

export default function App() {
  const { setBgColor, setWireframe } = useViewer();

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const res = await getSettings();

        if (res.data.data) {
          setBgColor(res.data.data.backgroundColor);
          setWireframe(res.data.data.wireframe);
        }
      } catch (error) {
        console.error("Fetch settings error", error);
      }
    };

    fetchSettings();
  }, []);

  return (
    <div className="app">
      <ControlsPanel />
      <Viewer />
    </div>
  );
}
