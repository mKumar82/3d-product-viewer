import ViewerSettings from "../models/ViewerSettings.js";

export const saveSettings = async (req, res, next) => {
  try {
    const { backgroundColor, wireframe } = req.body;

    const settings = await ViewerSettings.create({
      backgroundColor,
      wireframe,
    });

    res.status(201).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    next(error);
  }
};

export const getLatestSettings = async (req, res, next) => {
  try {
    const settings = await ViewerSettings.findOne().sort({ createdAt: -1 });

    res.status(200).json({
      success: true,
      data: settings,
    });
  } catch (error) {
    next(error);
  }
};
