import { z } from 'zod'

export const loginSchema = z.object({
  username: z.
            string().
            min(8, 'Usuario requerido'),
  password: z.string().min(6, 'Contraseña requerida'),
})

export type LoginFormData = z.infer<typeof loginSchema>