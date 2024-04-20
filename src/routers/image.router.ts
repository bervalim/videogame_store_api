import { Router } from "express";
import {
  createImageController,
  deleteImageByIdController,
  readAllImagesController,
  readImageByIdController,
  updateImageByIdController,
} from "../controller/image.controller";
import { upload } from "../middlewares/multer.middleware";

export const imageRouter: Router = Router();

imageRouter.post("/", upload.single("image"), createImageController);
imageRouter.get("/", readAllImagesController);
imageRouter.get("/:id", readImageByIdController);
imageRouter.delete("/:id", deleteImageByIdController);
imageRouter.patch("/:id", updateImageByIdController);
