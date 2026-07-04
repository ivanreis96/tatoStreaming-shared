import { z } from 'zod';
export declare const mediaKindSchema: z.ZodEnum<{
    movie: "movie";
    series: "series";
}>;
export declare const mediaSchema: z.ZodObject<{
    id: z.ZodString;
    createdBy: z.ZodString;
    titulo: z.ZodString;
    tituloOriginal: z.ZodString;
    subtitulo: z.ZodString;
    sinopse: z.ZodString;
    generos: z.ZodArray<z.ZodString>;
    popularidade: z.ZodString;
    votos: z.ZodString;
    rating: z.ZodCoercedNumber<unknown>;
    lancamento: z.ZodString;
    duracao: z.ZodString;
    situacao: z.ZodString;
    idioma: z.ZodString;
    orcamento: z.ZodString;
    receita: z.ZodString;
    lucro: z.ZodString;
    posterUrl: z.ZodURL;
    kind: z.ZodEnum<{
        movie: "movie";
        series: "series";
    }>;
    backgroundUrl: z.ZodURL;
    teaserUrl: z.ZodURL;
}, z.core.$strip>;
export declare const createMediaSchema: z.ZodObject<{
    kind: z.ZodEnum<{
        movie: "movie";
        series: "series";
    }>;
    titulo: z.ZodString;
    tituloOriginal: z.ZodString;
    subtitulo: z.ZodString;
    sinopse: z.ZodString;
    generos: z.ZodArray<z.ZodString>;
    popularidade: z.ZodString;
    votos: z.ZodString;
    rating: z.ZodCoercedNumber<unknown>;
    lancamento: z.ZodString;
    duracao: z.ZodString;
    situacao: z.ZodString;
    idioma: z.ZodString;
    orcamento: z.ZodString;
    receita: z.ZodString;
    lucro: z.ZodString;
    posterUrl: z.ZodURL;
    backgroundUrl: z.ZodURL;
    teaserUrl: z.ZodURL;
}, z.core.$strip>;
export declare const updateMediaSchema: z.ZodObject<{
    kind: z.ZodOptional<z.ZodEnum<{
        movie: "movie";
        series: "series";
    }>>;
    titulo: z.ZodOptional<z.ZodString>;
    tituloOriginal: z.ZodOptional<z.ZodString>;
    subtitulo: z.ZodOptional<z.ZodString>;
    sinopse: z.ZodOptional<z.ZodString>;
    generos: z.ZodOptional<z.ZodArray<z.ZodString>>;
    popularidade: z.ZodOptional<z.ZodString>;
    votos: z.ZodOptional<z.ZodString>;
    rating: z.ZodOptional<z.ZodCoercedNumber<unknown>>;
    lancamento: z.ZodOptional<z.ZodString>;
    duracao: z.ZodOptional<z.ZodString>;
    situacao: z.ZodOptional<z.ZodString>;
    idioma: z.ZodOptional<z.ZodString>;
    orcamento: z.ZodOptional<z.ZodString>;
    receita: z.ZodOptional<z.ZodString>;
    lucro: z.ZodOptional<z.ZodString>;
    posterUrl: z.ZodOptional<z.ZodURL>;
    backgroundUrl: z.ZodOptional<z.ZodURL>;
    teaserUrl: z.ZodOptional<z.ZodURL>;
}, z.core.$strip>;
export declare const mediaIdParamSchema: z.ZodObject<{
    id: z.ZodUUID;
}, z.core.$strip>;
export type MediaKind = z.infer<typeof mediaKindSchema>;
export type Media = z.infer<typeof mediaSchema>;
export type CreateMediaDto = z.infer<typeof createMediaSchema>;
export type UpdateMediaDto = z.infer<typeof updateMediaSchema>;
export type MediaIdParamDto = z.infer<typeof mediaIdParamSchema>;
