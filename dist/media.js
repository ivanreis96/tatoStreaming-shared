"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaIdParamSchema = exports.updateMediaSchema = exports.createMediaSchema = exports.mediaSchema = exports.mediaKindSchema = void 0;
const zod_1 = require("zod");
exports.mediaKindSchema = zod_1.z.enum(['movie', 'series']);
exports.mediaSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'ID da mídia é obrigatório.'),
    createdBy: zod_1.z.string().min(1, 'Criador da mídia é obrigatório.'),
    titulo: zod_1.z.string().min(1, 'Título é obrigatório.'),
    tituloOriginal: zod_1.z.string().min(1, 'Título original é obrigatório.'),
    subtitulo: zod_1.z.string().min(1, 'Subtítulo é obrigatório.'),
    sinopse: zod_1.z.string().min(1, 'Sinopse é obrigatória.'),
    generos: zod_1.z.array(zod_1.z.string().min(1, 'Gênero inválido.')).min(1, 'Informe pelo menos um gênero.'),
    popularidade: zod_1.z.string().min(1, 'Popularidade é obrigatória.'),
    votos: zod_1.z.string().min(1, 'Votos são obrigatórios.'),
    rating: zod_1.z.coerce.number().min(0, 'Rating deve ser no mínimo 0.').max(10, 'Rating deve ser no máximo 10.'),
    lancamento: zod_1.z.string().min(1, 'Lançamento é obrigatório.'),
    duracao: zod_1.z.string().min(1, 'Duração é obrigatória.'),
    situacao: zod_1.z.string().min(1, 'Situação é obrigatória.'),
    idioma: zod_1.z.string().min(1, 'Idioma é obrigatório.'),
    orcamento: zod_1.z.string().min(1, 'Orçamento é obrigatório.'),
    receita: zod_1.z.string().min(1, 'Receita é obrigatória.'),
    lucro: zod_1.z.string().min(1, 'Lucro é obrigatório.'),
    posterUrl: zod_1.z.url('URL do pôster inválida.'),
    kind: exports.mediaKindSchema,
    backgroundUrl: zod_1.z.url('URL do background inválida.'),
    teaserUrl: zod_1.z.url('URL do teaser inválida.'),
});
exports.createMediaSchema = exports.mediaSchema.omit({ id: true, createdBy: true });
exports.updateMediaSchema = exports.createMediaSchema.partial().refine((value) => Object.keys(value).length > 0, {
    message: 'Envie ao menos um campo para atualização.',
});
exports.mediaIdParamSchema = zod_1.z.object({
    id: zod_1.z.uuid('ID inválido. Use um UUID.'),
});
