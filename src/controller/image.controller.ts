import { Request, Response } from "express";
import { IImage } from "../interfaces/image.interface";
import {
  createImageService,
  deleteImageByIdService,
  readAllImagesService,
  readImageByIdService,
  updateImageByIdService,
} from "../services/image.service";

export const createImageController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newImage: IImage = await createImageService(req.body);
  return res.status(201).json(newImage);
};

export const readAllImagesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const images: IImage[] = await readAllImagesService();
  return res.status(200).json(images);
};

export const readImageByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const image: IImage = await readImageByIdService(id);
  return res.status(200).json(image);
};

export const updateImageByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const image: IImage = await updateImageByIdService(id, req.body);
  return res.status(200).json(image);
};

export const deleteImageByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  deleteImageByIdService(id);
  return res.status(204).json();
};
