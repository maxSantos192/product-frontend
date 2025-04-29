import { Product } from "@/@types/product";
import { api } from "@/services/api";

export const productHook = {
  getAll: (name?: string) => {
    return api.get<Product[]>("/product", { params: { name } });
  },

  delete: (id: string) => {
    return api.delete(`/product/${id}`);
  },
};
