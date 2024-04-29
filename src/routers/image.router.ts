import { Router } from "express";
import { upload } from "../middlewares/multer.middleware";
import {
  createProductController,
  deleteProductByIdController,
  readAllProductsController,
  readProductByIdController,
  updateProductByIdController,
} from "../controller/image.controller";

export const imageRouter: Router = Router();

imageRouter.post("/", upload.single("image"), createProductController);
imageRouter.get("/", readAllProductsController);
imageRouter.get("/:id", readProductByIdController);
imageRouter.delete("/:id", deleteProductByIdController);
imageRouter.patch("/:id", updateProductByIdController);
