"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.userProfileSchema = void 0;
const zod_1 = require("zod");
exports.userProfileSchema = zod_1.z.object({
    id: zod_1.z.string().min(1, 'Id do usuário é obrigatório.'),
    displayName: zod_1.z.string().min(2, 'Nome de exibição deve ter no mínimo 2 caracteres.'),
    email: zod_1.z.string().email('E-mail inválido.'),
    avatarUrl: zod_1.z.string().url('Avatar inválido.').optional(),
});
