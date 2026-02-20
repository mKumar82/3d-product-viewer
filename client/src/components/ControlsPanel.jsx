import { useViewer } from "../context/ViewerContext";
import { uploadModel, saveSettings } from "../services/api";

export default function ControlsPanel() {
  const { setModelUrl, bgColor, setBgColor, wireframe, setWireframe } =
    useViewer();

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const res = await uploadModel(file);
    setModelUrl(res.data.fileUrl);
  };

  const handleSave = async () => {
    await saveSettings({
      backgroundColor: bgColor,
      wireframe,
    });
    alert("Settings Saved");
  };

  return (
    <div className="panel">
      <h3>Controls</h3>

      {/* Upload */}
      <input type="file" accept=".glb,.gltf" onChange={handleUpload} />

      {/* Background Color */}
      <label>Background</label>
      <input
        type="color"
        value={bgColor}
        onChange={(e) => setBgColor(e.target.value)}
      />

      {/* Wireframe */}
      <label>
        <input
          type="checkbox"
          checked={wireframe}
          onChange={(e) => setWireframe(e.target.checked)}
        />
        Wireframe
      </label>

      {/* Save */}
      <button onClick={handleSave}>Save Settings</button>
    </div>
  );
}
