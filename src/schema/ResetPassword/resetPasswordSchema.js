import { z } from 'zod'

export const resetPasswordSchema = z.object({
  User_Email: z.string().email({message: 'e-mail inválido'}).toLowerCase(),
})