import crypto from "crypto";
import multer from "multer";

const storage = multer.diskStorage({
  destination: "temp/",
  filename: (req, file, cb) => {
  const uniqueName = crypto.randomUUID() + "-" + file.originalname;
  cb(null, uniqueName);

  },
});

const multer_Temp_Storage = { storage };
export default multer_Temp_Storage;