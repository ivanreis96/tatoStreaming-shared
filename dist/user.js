"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileSchema = void 0;
const zod_1 = require("zod");
exports.userProfileSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Id do usuario e obrigatorio.'),
    displayName: zod_1.z.string().min(2, 'Nome de exibicao deve ter no minimo 2 caracteres.'),
    email: zod_1.z.string().email('E-mail invalido.'),
    avatarUrl: zod_1.z.string().url('Avatar invalido.').optional(),
});
