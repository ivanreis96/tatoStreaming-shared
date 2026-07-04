import { z } from 'zod';

export const userProfileSchema = z.object({
  id: z.string().min(1, 'Id do usuario e obrigatorio.'),
  displayName: z.string().min(2, 'Nome de exibicao deve ter no minimo 2 caracteres.'),
  email: z.string().email('E-mail invalido.'),
  avatarUrl: z.string().url('Avatar invalido.').optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
