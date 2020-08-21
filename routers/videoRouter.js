import express from "express";
import routes from "../routes";
import {
  videosController,
  uploadController,
  editVideoController,
  deleteVideoController,
  videoDetailController
} from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.home, videosController);
videoRouter.get(routes.upload, uploadController);
videoRouter.get(routes.editVideo, editVideoController);
videoRouter.get(routes.deleteVideo, deleteVideoController);
videoRouter.get(routes.videoDetail, videoDetailController);

export default videoRouter;
