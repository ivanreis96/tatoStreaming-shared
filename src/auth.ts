import { z } from 'zod';
import { userProfileSchema } from './user';

const passwordMessage =
  'A senha deve ter pelo menos 8 caracteres, 1 número e 1 caractere especial.';

export const registerSchema = z.object({
  displayName: z
    .string({ message: 'Nome de exibição é obrigatório.' })
    .min(2, 'Nome de exibição deve ter no mínimo 2 caracteres.'),
  email: z.string({ message: 'E-mail é obrigatório.' }).email('E-mail inválido.'),
  password: z
    .string({ message: 'Senha é obrigatória.' })
    .min(8, passwordMessage)
    .regex(/\d/, passwordMessage)
    .regex(/[^A-Za-z0-9]/, passwordMessage),
  avatarUrl: z.string().url('Avatar inválido.').optional(),
});

export const loginSchema = z.object({
  email: z.string({ message: 'E-mail é obrigatório.' }).email('E-mail inválido.'),
  password: z.string({ message: 'Senha é obrigatória.' }).min(1, 'Senha é obrigatória.'),
});

export const refreshTokenSchema = z.object({
  refreshToken: z.string().min(1, 'Refresh token é obrigatório.'),
});

export type RegisterDto = z.infer<typeof registerSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
export type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;

export type AuthSession = {
  accessToken: string;
  refreshToken: string;
  expiresAt: string;
  user: z.infer<typeof userProfileSchema>;
};
