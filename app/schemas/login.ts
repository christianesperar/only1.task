import { z } from 'zod'

export const loginSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .min(1, 'Email is required')
    .email('Invalid email address'),
  password: z
    .string({
      required_error: 'Password is required',
    })
    .min(1, 'Password is required'),
})

export type LoginData = z.infer<typeof loginSchema>
