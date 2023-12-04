import multer from 'multer';
import {GridFsStorage} from 'multer-gridfs-storage';
import dotenv from 'dotenv';
dotenv.config();
const storage = await new GridFsStorage({
    url:process.env.MONGO_CONN,
    file: (req, file) => {
      return new Promise((resolve, reject) => {
          const filename = file.originalname;
          const fileInfo = {
            filename: filename,
            bucketName: 'videos'
          };
          resolve(fileInfo);
      });
    }
  });
const upload = multer({ storage: storage });

export default upload;