const multer = require("multer");
const path = require("path");

// Multer config
module.exports = multer({
  storage: multer.diskStorage({}),
  fileFilter: (req, file, cb) => {
    let ext = path.extname(file.originalname);  
    if (ext !== ".jpg" && ext!==".JPG" && ext!==".JPEG" && ext !== ".jpeg" && ext !== ".png" && ext !== ".mp4" && ext !== ".MP4") {
      cb(new Error("File type is not supported"), false);
      return;
    }
    cb(null, true);
  },
});