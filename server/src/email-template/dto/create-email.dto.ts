import { z } from 'zod';
import { createZodDto } from '@anatine/zod-nestjs';

export const createEmailSchema = z.object({
  name: z.string().min(4),
  subject: z.string().min(4),
  cc: z.array(z.string().email()).optional().nullable(),
  body: z.string().min(4),
});

export type CreateEmailType = z.infer<typeof createEmailSchema>;
export class CreateEmailDto extends createZodDto(createEmailSchema) {}
