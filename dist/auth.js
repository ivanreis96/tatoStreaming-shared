"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshTokenSchema = exports.loginSchema = exports.registerSchema = void 0;
const zod_1 = require("zod");
const passwordMessage = 'A senha deve ter pelo menos 8 caracteres, 1 numero e 1 caractere especial.';
exports.registerSchema = zod_1.z.object({
    displayName: zod_1.z
        .string({ message: 'Nome de exibicao e obrigatorio.' })
        .min(2, 'Nome de exibicao deve ter no minimo 2 caracteres.'),
    email: zod_1.z.string({ message: 'E-mail e obrigatorio.' }).email('E-mail invalido.'),
    password: zod_1.z
        .string({ message: 'Senha e obrigatoria.' })
        .min(8, passwordMessage)
        .regex(/\d/, passwordMessage)
        .regex(/[^A-Za-z0-9]/, passwordMessage),
    avatarUrl: zod_1.z.string().url('Avatar invalido.').optional(),
});
exports.loginSchema = zod_1.z.object({
    email: zod_1.z.string({ message: 'E-mail e obrigatorio.' }).email('E-mail invalido.'),
    password: zod_1.z.string({ message: 'Senha e obrigatoria.' }).min(1, 'Senha e obrigatoria.'),
});
exports.refreshTokenSchema = zod_1.z.object({
    refreshToken: zod_1.z.string().min(1, 'Refresh token e obrigatorio.'),
});
