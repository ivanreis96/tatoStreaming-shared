import { z } from 'zod';
import { userProfileSchema } from './user';
export declare const registerSchema: z.ZodObject<{
    displayName: z.ZodString;
    email: z.ZodString;
    password: z.ZodString;
    avatarUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export declare const loginSchema: z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
}, z.core.$strip>;
export declare const refreshTokenSchema: z.ZodObject<{
    refreshToken: z.ZodString;
}, z.core.$strip>;
export type RegisterDto = z.infer<typeof registerSchema>;
export type LoginDto = z.infer<typeof loginSchema>;
export type RefreshTokenDto = z.infer<typeof refreshTokenSchema>;
export type AuthSession = {
    accessToken: string;
    refreshToken: string;
    expiresAt: string;
    user: z.infer<typeof userProfileSchema>;
};
