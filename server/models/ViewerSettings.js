import mongoose from "mongoose";

const viewerSettingsSchema = new mongoose.Schema(
  {
    backgroundColor: {
      type: String,
      required: true,
    },
    wireframe: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true },
);

export default mongoose.model("ViewerSettings", viewerSettingsSchema);
