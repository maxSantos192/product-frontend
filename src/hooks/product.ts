import { Product } from "@/@types/product";
import { api } from "@/services/api";

export const productHook = {
  getAll: (name?: string) => {
    return api.get<Product[]>("/product", { params: { name } });
  },

  getById: (id: string) => {
    return api.get<Product>(`/product/${id}`);
  },

  create: (data: Partial<Product>) => {
    return api.post("/product", data);
  },

  update: (id: string, data: Partial<Product>) => {
    return api.patch(`/product/${id}`, data);
  },

  delete: (id: string) => {
    return api.delete(`/product/${id}`);
  },
};
