import { z } from "zod";

export const registerSchema = z.object({
  username: z.string({
    required_error: "El nombre de usuario es requerido",
  }),
  email: z
    .string({
      required_error: "Email es requeido",
    })
    .email({
      message: "Formato de email no valido",
    }),
  password: z
    .string({
      required_error: "Contrasenia es requerida",
    })
    .min(6, {
      message: "La contrasenia debe tener al menos 6 caracteres",
    }),
  phone: z.string({
    required_error: "Phone es requerido",
  }),
  address: z.string({
    required_error: "Direccion es requerida",
  })
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
