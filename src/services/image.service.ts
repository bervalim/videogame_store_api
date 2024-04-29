import { app, prisma } from "../app";
import AppError from "../errors/AppError.error";
import {
  IProduct,
  TCreateProductBodyRequest,
  TUpdateImageBodyRequest,
} from "../interfaces/image.interface";

export const createProductService = async (
  data: TCreateProductBodyRequest
): Promise<IProduct> => {
  const newProduct: IProduct = await prisma.product.create({
    data: {
      name: data.name,
      price: Number(data.price),
      description: data.description,
      image: data.image,
    },
  });
  return newProduct;
};

export const readAllProductsService = async (): Promise<IProduct[]> => {
  const products: IProduct[] = await prisma.product.findMany();
  return products;
};

export const readProductByIdService = async (id: string): Promise<IProduct> => {
  const product: IProduct | null = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) throw new AppError("Product not found", 404);

  return product;
};

export const updateProductByIdService = async (
  id: string,
  data: TUpdateImageBodyRequest
): Promise<IProduct> => {
  const product: IProduct | null = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) throw new AppError("Product not found", 404);

  const updatedProduct = await prisma.product.update({
    where: { id: id },
    data,
  });

  return updatedProduct;
};

export const deleteProductByIdService = async (id: string): Promise<void> => {
  const product: IProduct | null = await prisma.product.findUnique({
    where: { id: id },
  });

  if (!product) throw new AppError("Product not found", 404);

  await prisma.product.delete({ where: { id: id } });
};
