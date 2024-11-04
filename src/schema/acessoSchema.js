import { z } from 'zod'

export const AcessoSchema = z.object({
  User_Email: z.string().email({message: 'e-mail inválido'}).toLowerCase(),
  User_Password: z.string().min(6, {message: 'a senha deve ter no mínimo 6 caracteres'})
})