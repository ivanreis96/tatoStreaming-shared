import { z } from 'zod';

export const userProfileSchema = z.object({
  id: z.string().min(1, 'Id do usuário é obrigatório.'),
  displayName: z.string().min(2, 'Nome de exibição deve ter no mínimo 2 caracteres.'),
  email: z.email('E-mail inválido.'),
  avatarUrl: z.url('Avatar inválido.').optional(),
});

export type UserProfile = z.infer<typeof userProfileSchema>;
