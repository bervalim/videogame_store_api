export interface IImage {
  id: string;
  image: string;
}

export type TCreateImageBodyRequest = Omit<IImage, "id">;

export type TUpdateImageBodyRequest = Partial<TCreateImageBodyRequest>;
