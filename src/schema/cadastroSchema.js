import { z } from 'zod'

export const CadastroSchema = z.object({
  User_Name: z.string().min(2, {message: 'o name deve ter no mínimo 2 caracteres'}),
  User_Username: z.string().min(3, {message: 'o username deve ter no mínimo 3 caracteres'}),
  User_Email: z.string().email({message: 'e-mail inválido'}).toLowerCase(),
  User_Password: z.string().min(6, {message: 'a senha deve ter no mínimo 6 caracteres'}),
  confirmpasswordData: z.string().min(6, { message: "as senhas não conferem" }),
}).refine((data) => data.User_Password === data.confirmpasswordData, {
  message: 'as senhas não conferem',
  path: ['confirmpasswordData']
})