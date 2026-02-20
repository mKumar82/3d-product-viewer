export const uploadModel = async (req, res, next) => {
  try {
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const fileUrl = `${process.env.BASE_URL}/uploads/${req.file.filename}`;

    res.status(201).json({
      success: true,
      fileUrl,
    });
  } catch (error) {
    next(error);
  }
};
