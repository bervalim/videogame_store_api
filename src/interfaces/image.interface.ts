export interface IProduct {
  id: string;
  name: string;
  price: number;
  description: string | null;
  image: string;
}

export type TCreateProductBodyRequest = Omit<IProduct, "id">;

export type TUpdateImageBodyRequest = Partial<TCreateProductBodyRequest>;
