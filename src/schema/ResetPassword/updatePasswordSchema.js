import { z } from 'zod'

export const updatePasswordSchema = z.object({
  User_NewPassword: z.string().min(6, {message: 'a senha deve ter no mínimo 6 caracteres'}),
  User_PasswordConfirm: z.string().min(6, { message: "as senhas não conferem" }),
}).refine((data) => data.User_NewPassword === data.User_PasswordConfirm, {
  message: 'as senhas não conferem',
  path: ['User_PasswordConfirm']
})