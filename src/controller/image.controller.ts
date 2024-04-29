import { Request, Response } from "express";
import { v2 as cloudinary } from "cloudinary";
import fs from "fs";
import { IProduct } from "../interfaces/image.interface";
import {
  createProductService,
  deleteProductByIdService,
  readAllProductsService,
  readProductByIdService,
  updateProductByIdService,
} from "../services/image.service";

export const createProductController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const upload = await cloudinary.uploader.upload(
    req.file!.path,
    (error, result) => result
  );
  fs.unlink(req.file!.path, (error) => {
    if (error) {
      console.log(error);
    }
  });

  const data = {
    name: req.body.name,
    price: Number(req.body.price),
    description: req.body.description,
    image: upload.url,
  };

  const newProduct: IProduct = await createProductService(data);
  return res.status(201).json(newProduct);
};

export const readAllProductsController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const products: IProduct[] = await readAllProductsService();
  return res.status(200).json(products);
};

export const readProductByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const product: IProduct = await readProductByIdService(id);
  return res.status(200).json(product);
};

export const updateProductByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  const product: IProduct = await updateProductByIdService(id, req.body);
  return res.status(200).json(product);
};

export const deleteProductByIdController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const { id } = req.params;
  deleteProductByIdService(id);
  return res.status(204).json();
};
