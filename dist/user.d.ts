import { z } from 'zod';
export declare const userProfileSchema: z.ZodObject<{
    id: z.ZodString;
    displayName: z.ZodString;
    email: z.ZodString;
    avatarUrl: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
export type UserProfile = z.infer<typeof userProfileSchema>;
