import { app, prisma } from "../app";
import AppError from "../errors/AppError.error";
import {
  IImage,
  TCreateImageBodyRequest,
  TUpdateImageBodyRequest,
} from "../interfaces/image.interface";

export const createImageService = async (
  data: TCreateImageBodyRequest
): Promise<IImage> => {
  const newImage: IImage = await prisma.image.create({ data });
  return newImage;
};

export const readAllImagesService = async (): Promise<IImage[]> => {
  const images: IImage[] = await prisma.image.findMany();
  return images;
};

export const readImageByIdService = async (id: string): Promise<IImage> => {
  const image: IImage | null = await prisma.image.findUnique({
    where: { id: id },
  });

  if (!image) throw new AppError("Image not found", 404);

  return image;
};

export const updateImageByIdService = async (
  id: string,
  data: TUpdateImageBodyRequest
): Promise<IImage> => {
  const image: IImage | null = await prisma.image.findUnique({
    where: { id: id },
  });

  if (!image) throw new AppError("Image not found", 404);

  const updatedImage = await prisma.image.update({
    where: { id: id },
    data,
  });

  return updatedImage;
};

export const deleteImageByIdService = async (id: string): Promise<void> => {
  const image: IImage | null = await prisma.image.findUnique({
    where: { id: id },
  });

  if (!image) throw new AppError("Image not found", 404);

  await prisma.image.delete({ where: { id: id } });
};
