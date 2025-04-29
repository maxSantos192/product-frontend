import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { productHook } from "@/hooks/product";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const formSchema = z.object({
  name: z.string().min(1, "Nome obrigatório"),
  qty: z.number().min(0, "Quantidade deve ser no mínimo 0"),
  price: z.number().min(0, "Preço deve ser no mínimo 0"),
  photo: z.string().url("URL Inválida"),
});

type FormValues = z.infer<typeof formSchema>;

function ProductForm() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const isEditing = id !== "0";

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(data: FormValues) {
    if (isEditing && id) {
      await productHook.update(id, data);
    } else {
      await productHook.create(data);
    }
    navigate("/product");
  }

  async function loadProduct() {
    if (isEditing && id) {
      const { data } = await productHook.getById(id);
      setValue("name", data.name);
      setValue("qty", data.qty);
      setValue("price", data.price);
      setValue("photo", data.photo);
    }
  }

  useEffect(() => {
    loadProduct();
  }, []);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="mx-auto max-w-md space-y-4 p-8"
    >
      <h1 className="mb-6 text-2xl font-bold">
        {isEditing ? "Editar" : "Cadastrar"} Produto
      </h1>

      <Input {...register("name")} placeholder="Name" />
      {errors.name && <p className="text-red-500">{errors.name.message}</p>}

      <Input
        type="number"
        {...register("qty", { valueAsNumber: true })}
        placeholder="Quantity"
      />
      {errors.qty && <p className="text-red-500">{errors.qty.message}</p>}

      <Input
        type="number"
        step="0.01"
        {...register("price", { valueAsNumber: true })}
        placeholder="Price"
      />
      {errors.price && <p className="text-red-500">{errors.price.message}</p>}

      <Input {...register("photo")} placeholder="Photo URL" />
      {errors.photo && <p className="text-red-500">{errors.photo.message}</p>}

      <Button className="w-full hover:cursor-pointer" type="submit">
        {isEditing ? "Atualizar" : "Cadatrar"}
      </Button>
    </form>
  );
}

export default ProductForm;
