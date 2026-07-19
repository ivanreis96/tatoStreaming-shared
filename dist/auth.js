"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
const passwordMessage = 'A senha deve ter pelo menos 8 caracteres, 1 número e 1 caractere especial.';
exports.registerSchema = zod_1.z.object({
    displayName: zod_1.z
        .string({ message: 'Nome de exibição é obrigatório.' })
        .min(2, 'Nome de exibição deve ter no mínimo 2 caracteres.'),
    email: zod_1.z.string({ message: 'E-mail é obrigatório.' }).email('E-mail inválido.'),
    password: zod_1.z
        .string({ message: 'Senha é obrigatória.' })
        .min(8, passwordMessage)
        .regex(/\d/, passwordMessage)
        .regex(/[^A-Za-z0-9]/, passwordMessage),
    avatarUrl: zod_1.z.string().url('Avatar inválido.').optional(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string({ message: 'E-mail é obrigatório.' }).email('E-mail inválido.'),
    password: zod_1.z.string({ message: 'Senha é obrigatória.' }).min(1, 'Senha é obrigatória.'),
});
exports.refreshTokenSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(1, 'Refresh token é obrigatório.'),
});
