import { z } from 'zod';

export const mediaKindSchema = z.enum(['movie', 'series']);

export const mediaSchema = z.object({
  id: z.string().min(1, 'ID da mídia é obrigatório.'),
  createdBy: z.string().min(1, 'Criador da mídia é obrigatório.'),
  titulo: z.string().min(1, 'Título é obrigatório.'),
  tituloOriginal: z.string().min(1, 'Título original é obrigatório.'),
  subtitulo: z.string().min(1, 'Subtítulo é obrigatório.'),
  sinopse: z.string().min(1, 'Sinopse é obrigatória.'),
  generos: z.array(z.string().min(1, 'Gênero inválido.')).min(1, 'Informe pelo menos um gênero.'),
  popularidade: z.string().min(1, 'Popularidade é obrigatória.'),
  votos: z.string().min(1, 'Votos são obrigatórios.'),
  rating: z.coerce.number().min(0, 'Rating deve ser no mínimo 0.').max(10, 'Rating deve ser no máximo 10.'),
  lancamento: z.string().min(1, 'Lançamento é obrigatório.'),
  duracao: z.string().min(1, 'Duração é obrigatória.'),
  situacao: z.string().min(1, 'Situação é obrigatória.'),
  idioma: z.string().min(1, 'Idioma é obrigatório.'),
  orcamento: z.string().min(1, 'Orçamento é obrigatório.'),
  receita: z.string().min(1, 'Receita é obrigatória.'),
  lucro: z.string().min(1, 'Lucro é obrigatório.'),
  posterUrl: z.url('URL do pôster inválida.'),
  kind: mediaKindSchema,
  backgroundUrl: z.url('URL do background inválida.'),
  teaserUrl: z.url('URL do teaser inválida.'),
});

export const createMediaSchema = mediaSchema.omit({ id: true, createdBy: true });

export const updateMediaSchema = createMediaSchema.partial().refine((value) => Object.keys(value).length > 0, {
  message: 'Envie ao menos um campo para atualização.',
});

export const mediaIdParamSchema = z.object({
  id: z.uuid('ID inválido. Use um UUID.'),
});

export type MediaKind = z.infer<typeof mediaKindSchema>;
export type Media = z.infer<typeof mediaSchema>;
export type CreateMediaDto = z.infer<typeof createMediaSchema>;
export type UpdateMediaDto = z.infer<typeof updateMediaSchema>;
export type MediaIdParamDto = z.infer<typeof mediaIdParamSchema>;
