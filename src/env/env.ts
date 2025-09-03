import { z } from 'zod';

const envSchema = z.object({
  MODE: z.enum(['development', 'production', 'test']),
  DEV: z.boolean(),
  PROD: z.boolean(),
  VITE_APP_TITLE: z.string(),
  VITE_API_URL: z.string(),
});

export const env = envSchema.parse(import.meta.env);

export type Env = z.infer<typeof envSchema>;
// export type Env = typeof env;
