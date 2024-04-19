import { Router } from "express";
import { imageRouter } from "./image.router";

export const allRoutes: Router = Router();

allRoutes.use("/image", imageRouter);
