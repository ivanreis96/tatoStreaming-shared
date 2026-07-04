"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mediaIdParamSchema = exports.updateMediaSchema = exports.createMediaSchema = exports.mediaSchema = exports.mediaKindSchema = void 0;
const zod_1 = require("zod");
exports.mediaKindSchema = zod_1.z.enum(['movie', 'series']);
exports.mediaSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Id da midia e obrigatorio.'),
    createdBy: zod_1.z.string().min(1, 'Criador da midia e obrigatorio.'),
    titulo: zod_1.z.string().min(1, 'Titulo e obrigatorio.'),
    tituloOriginal: zod_1.z.string().min(1, 'Titulo original e obrigatorio.'),
    subtitulo: zod_1.z.string().min(1, 'Subtitulo e obrigatorio.'),
    sinopse: zod_1.z.string().min(1, 'Sinopse e obrigatoria.'),
    generos: zod_1.z.array(zod_1.z.string().min(1, 'Genero invalido.')).min(1, 'Informe pelo menos um genero.'),
    popularidade: zod_1.z.string().min(1, 'Popularidade e obrigatoria.'),
    votos: zod_1.z.string().min(1, 'Votos e obrigatorio.'),
    rating: zod_1.z.coerce.number().min(0, 'Rating deve ser no minimo 0.').max(10, 'Rating deve ser no maximo 10.'),
    lancamento: zod_1.z.string().min(1, 'Lancamento e obrigatorio.'),
    duracao: zod_1.z.string().min(1, 'Duracao e obrigatoria.'),
    situacao: zod_1.z.string().min(1, 'Situacao e obrigatoria.'),
    idioma: zod_1.z.string().min(1, 'Idioma e obrigatorio.'),
    orcamento: zod_1.z.string().min(1, 'Orcamento e obrigatorio.'),
    receita: zod_1.z.string().min(1, 'Receita e obrigatoria.'),
    lucro: zod_1.z.string().min(1, 'Lucro e obrigatorio.'),
    posterUrl: zod_1.z.url('Poster URL invalida.'),
    kind: exports.mediaKindSchema,
    backgroundUrl: zod_1.z.url('Background URL invalida.'),
    teaserUrl: zod_1.z.url('Teaser URL invalida.'),
});
exports.createMediaSchema = exports.mediaSchema.omit({ id: true, createdBy: true });
exports.updateMediaSchema = exports.createMediaSchema.partial().refine((value) => Object.keys(value).length > 0, {
    message: 'Envie ao menos um campo para atualizacao.',
});
exports.mediaIdParamSchema = zod_1.z.object({
    id: zod_1.z.uuid('ID invalido. Use um UUID.'),
});
